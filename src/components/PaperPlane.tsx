import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

interface PaperPlaneProps {
  /** Viewport coordinates the plane launches from (button center). */
  origin: { x: number; y: number };
  /** Called once the flight finishes so the parent can unmount this. */
  onDone: () => void;
}

/**
 * A one-shot cinematic: an origami paper plane peels off the submit button,
 * banks along a curved trajectory and soars off the top-right of the screen,
 * drawing a dotted contrail right behind it before shrinking into the distance.
 */
const PaperPlane = ({ origin, onDone }: PaperPlaneProps) => {
  const rootRef = useRef<SVGSVGElement>(null);

  const W = typeof window !== "undefined" ? window.innerWidth : 1200;
  const H = typeof window !== "undefined" ? window.innerHeight : 800;

  // Build a swooping flight path: a small forward dip off the button, then a
  // long arc up and out past the top-right corner.
  const ox = origin.x;
  const oy = origin.y;
  const c1 = { x: ox + 120, y: oy + 45 };
  const c2 = { x: ox + (W - ox) * 0.55, y: oy * 0.25 };
  const end = { x: W + 200, y: -200 };
  const pathD = `M ${ox} ${oy} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;

  const FLIGHT = 1.75; // total flight time, in seconds

  useLayoutEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      const id = window.setTimeout(onDone, 10);
      return () => window.clearTimeout(id);
    }

    const ctx = gsap.context(() => {
      // Reveal the dotted trail progressively by "drawing" the mask stroke.
      const reveal = rootRef.current?.querySelector<SVGPathElement>("#pp-reveal");
      if (reveal) {
        const len = reveal.getTotalLength();
        gsap.set(reveal, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(reveal, { strokeDashoffset: 0, duration: FLIGHT, ease: "power2.in" });
      }

      const tl = gsap.timeline({ onComplete: onDone });

      // Fly along the curve, auto-banking with the tangent of the path.
      tl.to(
        "#pp-plane",
        {
          duration: FLIGHT,
          ease: "power2.in",
          motionPath: {
            path: "#pp-reveal",
            align: "#pp-reveal",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        },
        0
      );

      // Pop off the button...
      tl.fromTo(
        "#pp-plane",
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
        0
      );

      // ...then shrink into the distance as it exits.
      tl.to("#pp-plane", { scale: 0.15, opacity: 0, duration: FLIGHT * 0.34, ease: "power2.in" }, FLIGHT * 0.66);

      // A little burst of paper dust at the launch point.
      tl.fromTo(
        ".pp-burst",
        { scale: 0, opacity: 0.9 },
        { scale: 2.6, opacity: 0, duration: 0.55, ease: "power2.out", stagger: 0.05 },
        0
      );
    }, rootRef);

    return () => ctx.revert();
  }, [onDone]);

  const overlay = (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <svg
        ref={rootRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Dotted contrail gradient — indigo → violet, fading at the tail. */}
          <linearGradient id="pp-trail" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="35%" stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
          </linearGradient>

          {/* Paper shading to fake the folded, 3D origami look. */}
          <linearGradient id="pp-paper-top" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
          <linearGradient id="pp-paper-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c7ccd6" />
            <stop offset="100%" stopColor="#8b93a3" />
          </linearGradient>

          <filter id="pp-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#312e81" floodOpacity="0.35" />
          </filter>

          {/* Mask that "draws" the trail so dots appear right behind the plane. */}
          <mask id="pp-mask">
            <path
              id="pp-reveal"
              d={pathD}
              fill="none"
              stroke="white"
              strokeWidth={22}
              strokeLinecap="round"
            />
          </mask>
        </defs>

        {/* Visible dotted trail, revealed through the mask. */}
        <path
          id="pp-reveal-visible"
          d={pathD}
          fill="none"
          stroke="url(#pp-trail)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray="0.1 13"
          mask="url(#pp-mask)"
        />

        {/* Launch burst */}
        <g>
          <circle className="pp-burst" cx={ox} cy={oy} r={10} fill="#a855f7" opacity={0} />
          <circle className="pp-burst" cx={ox} cy={oy} r={16} fill="#6366f1" opacity={0} />
          <circle className="pp-burst" cx={ox} cy={oy} r={22} fill="#818cf8" opacity={0} />
        </g>

        {/* The origami dart — drawn pointing right (+x), centred on (0,0) so
            MotionPath can rotate it around its own middle. */}
        <g id="pp-plane" filter="url(#pp-shadow)" style={{ opacity: 0 }}>
          {/* lower fold (in shadow) */}
          <path d="M 22 0 L -6 0 L -20 15 Z" fill="url(#pp-paper-bottom)" stroke="#3f3f46" strokeWidth={0.6} strokeLinejoin="round" />
          {/* upper wing (lit) */}
          <path d="M 22 0 L -20 -15 L -6 0 Z" fill="url(#pp-paper-top)" stroke="#3f3f46" strokeWidth={0.6} strokeLinejoin="round" />
          {/* centre crease */}
          <line x1={22} y1={0} x2={-6} y2={0} stroke="#9ca3af" strokeWidth={0.7} />
        </g>
      </svg>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(overlay, document.body);
};

export default PaperPlane;
