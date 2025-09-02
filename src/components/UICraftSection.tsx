import React, { useEffect, useRef, useState } from 'react';

// Import images directly
import bikePhoto from '../assets/bike-photo.jpg';
import flowerMacro from '../assets/flower-macro.jpg';
import jumpingSilhouette from '../assets/jumping-silhouette.jpg';
import sunglassesPortrait from '../assets/sunglasses-portrait.jpg';

interface CraftItem {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  imageUrl: string;
  href: string;
}

const craftItems: CraftItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Full-stack development solutions with modern frameworks and technologies. From concept to deployment, creating robust web applications.',
    iconPath: 'M3 3h18v18H3z M7 3v18 M3 7.5h4 M3 12h18 M3 16.5h4 M17 3v18 M17 7.5h4 M17 16.5h4',
    imageUrl: bikePhoto,
    href: '#'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Crafting intuitive user experiences and beautiful interfaces. Research-driven design solutions that delight users and drive results.',
    iconPath: 'M13.5 6.5a.5.5 0 1 1 0 0 M17.5 10.5a.5.5 0 1 1 0 0 M8.5 7.5a.5.5 0 1 1 0 0 M6.5 12.5a.5.5 0 1 1 0 0 M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z',
    imageUrl: flowerMacro,
    href: '#'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications. Creating seamless experiences across iOS and Android platforms.',
    iconPath: 'M5 2h14v20H5V2z M5 5h14 M5 17h14',
    imageUrl: jumpingSilhouette,
    href: '#'
  },
  {
    id: 'brand-development',
    title: 'Brand Development',
    description: 'Strategic brand identity design and development. Building memorable brands that connect with audiences and stand out.',
    iconPath: 'M6 3h12l4 6-10 13L2 9Z M11 3 8 9l4 13 4-13-3-6 M2 9h20',
    imageUrl: sunglassesPortrait,
    href: '#'
  }
];

const UICraftSection: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemInteraction = (index: number) => {
    setActiveIndex(index);
  };

  const getGridRows = () => {
    return craftItems.map((_, i) => i === activeIndex ? '10fr' : '1fr').join(' ');
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-foreground"
          style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
        >
          Services & Expertise
        </h1>
        <p 
          className="max-w-4xl mx-auto text-studio-gray leading-relaxed text-lg mb-16"
          style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
        >
          Comprehensive digital solutions tailored to your needs. From strategic planning
          to final implementation, delivering exceptional results across all touchpoints.
        </p>
      </div>

      <ul
        ref={listRef}
        className="grid gap-4 list-none p-0 mx-auto max-w-2xl transition-all duration-600 ease-out"
        style={{
          gridTemplateRows: getGridRows(),
          height: '80vh',
          maxHeight: '800px'
        }}
        onMouseMove={(e) => {
          const li = (e.target as Element).closest('li');
          if (li) {
            const index = Array.from(listRef.current?.children || []).indexOf(li);
            if (index !== -1) handleItemInteraction(index);
          }
        }}
        onClick={(e) => {
          const li = (e.target as Element).closest('li');
          if (li) {
            const index = Array.from(listRef.current?.children || []).indexOf(li);
            if (index !== -1) handleItemInteraction(index);
          }
        }}
      >
        {craftItems.map((item, index) => (
          <li
            key={item.id}
            className="relative overflow-hidden min-h-16 rounded-2xl border border-border/50 cursor-pointer"
            style={{
              backgroundColor: 'var(--background)',
            }}
            data-active={index === activeIndex}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 transition-all duration-700 border border-border/30 ${
                index === activeIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-100 scale-110'
              }`}
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: index === activeIndex ? 'grayscale(0) brightness(1)' : 'grayscale(100%) brightness(1.2)'
              }}
            />

            {/* Content */}
            <div 
              className={`relative z-10 h-full flex flex-col gap-4 p-6 ${
                index === activeIndex ? 'justify-end' : 'justify-center'
              } transition-all duration-700`}
              style={{ 
                fontFamily: '"Geist", system-ui, -apple-system, sans-serif'
              }}
            >
              <div className="flex items-center gap-4">
                <svg
                  className={`w-6 h-6 flex-shrink-0 fill-none stroke-current stroke-2 transition-opacity duration-700 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-60'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.iconPath} />
                </svg>
                
                <h3 
                  className={`text-lg font-medium transition-opacity duration-700 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-80'
                  }`}
                  style={{ fontFamily: '"Geist", system-ui, -apple-system, sans-serif' }}
                >
                  {item.title}
                </h3>
              </div>

              <p 
                className={`text-sm leading-6 text-studio-gray transition-all duration-700 ${
                  index === activeIndex ? 'opacity-100 delay-150 max-h-32' : 'opacity-0 max-h-0'
                } overflow-hidden`}
                style={{ 
                  textWrap: 'balance',
                  fontFamily: '"Geist", system-ui, -apple-system, sans-serif'
                }}
              >
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UICraftSection;