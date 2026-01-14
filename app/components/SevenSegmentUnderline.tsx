export default function SevenSegmentUnderline() {
  return (
    <span
      className="font-seven-segments absolute -bottom-2 left-0 w-full select-none"
      style={{ zIndex: -10 }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i}>_</span>
      ))}
    </span>
  );
}
