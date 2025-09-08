import { useMemo } from 'react';

const useOpts = (fluidColor = '#ff9966') => {
  const isMobile = window.innerWidth < 812;
  const OPTS = useMemo(
    () => ({
      intensity: 5,
      force: 1,
      curl: 1,
      radius: isMobile ? 0.11 : 0.14,
      swirl: 3,

      pressure: 0.0,
      densityDissipation: isMobile ? 0.96 : 0.965,
      velocityDissipation: 0.93,

      fluidColor: fluidColor,
      backgroundColor: '#070410',

      showBackground: false,

      dyeRes: isMobile ? 64 : 256,
      simRes: isMobile ? 16 : 50,
    }),
    [fluidColor],
  );
  return OPTS;
};
export default useOpts;
