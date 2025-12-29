type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLayout({ children, className = "" }: Props) {
  return (
    <div
      className={` flex flex-col justify-center items-center min-h-screen w-full p-4 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
