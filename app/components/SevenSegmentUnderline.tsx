type Props = { length: number };
export default function SevenSegmentUnderline({ length }: Props) {
  return (
    <span
      className="font-seven-segments absolute -bottom-2 left-0 w-full select-none"
      style={{ zIndex: -10 }}
    >
      {Array.from({ length }).map((_, i) => (
        <span key={i}>_</span>
      ))}
    </span>
  );
}
