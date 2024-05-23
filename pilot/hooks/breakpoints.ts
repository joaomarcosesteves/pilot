
export enum BreakpointsName {
    tablet,
    laptop,
    laptopLarge,
    desktop,
  }
type BreakpointsType = {
  [key in keyof typeof BreakpointsName]: number;
};

export const BREAKPOINTS: BreakpointsType = {
  tablet: 768,
  laptop: 1024,
  laptopLarge: 1280,
  desktop: 1480,
};

