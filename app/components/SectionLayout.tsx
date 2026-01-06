import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLayout({ children, className = "" }: Props) {
  return (
    <div
      className={classNames('flex flex-col justify-center items-center min-h-screen w-full p-4 overflow-hidden', className)}
    >
      {children}
    </div>
  );
}
