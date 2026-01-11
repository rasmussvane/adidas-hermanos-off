import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLayout({ children, className = '' }: Props) {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-center min-h-dvh w-full p-sm md:p-base py-10',
        className
      )}
    >
      {children}
    </div>
  );
}
