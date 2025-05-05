type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
};

export default function Section({
  children,
  className,
  title,
  titleClassName,
}: Readonly<SectionProps>) {
  return (
    <div
      className={`mt-16 sm:mt-32 animate-slideFromDownAndFade [animation-delay:var(--animation-delay)] ${className}`}
    >
      {title && <h2 className={`mb-4 ${titleClassName}`}>{title}</h2>}
      {children}
    </div>
  );
}
