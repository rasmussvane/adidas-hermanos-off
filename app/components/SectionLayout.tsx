import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLayout({ children, className = '' }: Props) {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-center min-h-dvh w-full px-sm md:px-base py-18.75 md:py-37.5',
        className
      )}
    >
      {children}
    </div>
  );
}
