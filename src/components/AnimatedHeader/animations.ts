// Animation variants for the animated header system
const smoothTransition = { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] };
const fastTransition = { duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] };

export const opacity = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: fastTransition
  },
  closed: {
    opacity: 0,
    transition: fastTransition
  }
};

export const height = {
  initial: {
    height: 0,
    overflow: "hidden"
  },
  enter: {
    height: "auto",
    overflow: "visible",
    transition: {
      height: { ...smoothTransition },
      overflow: { delay: 0.7 }
    }
  },
  exit: {
    height: 0,
    overflow: "hidden",
    transition: {
      height: { ...smoothTransition },
      overflow: { delay: 0 }
    }
  }
};

export const background = {
  initial: {
    height: 0,
    opacity: 0
  },
  open: {
    height: "100vh",
    opacity: 1,
    transition: {
      height: { ...smoothTransition },
      opacity: { duration: 0.3, ease: "easeOut" }
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { ...smoothTransition, delay: 0.1 },
      opacity: { duration: 0.2, ease: "easeIn" }
    }
  }
};

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1
  },
  open: {
    filter: "blur(8px)",
    opacity: 0.4,
    transition: smoothTransition
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: smoothTransition
  }
};

export const translate = {
  initial: {
    y: "100%",
    opacity: 0
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number], 
      delay: i[0] 
    }
  }),
  exit: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number], 
      delay: i[1] 
    }
  })
};
