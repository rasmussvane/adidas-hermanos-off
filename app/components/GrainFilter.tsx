function GradientFilter() {
  return (
    <svg className="absolute w-0 h-0">
      <defs>
        <filter id="grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.125" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}

export default GradientFilter;
