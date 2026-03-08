interface SectionDividerProps {
  className?: string;
  variant?: 'flat' | 'angled';
}

export default function SectionDivider({
  className = '',
  variant = 'flat',
}: SectionDividerProps) {
  if (variant === 'angled') {
    return (
      <div
        className={`w-full h-1 bg-primary ${className}`}
        style={{
          clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0 60%)',
          height: '6px',
        }}
        role="separator"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`w-full bg-primary ${className}`}
      style={{ height: '4px' }}
      role="separator"
      aria-hidden="true"
    />
  );
}
