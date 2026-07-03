import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'ghost' | 'light' | 'outline-light';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'button',
  id,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full cursor-pointer transition-all duration-150 ease-in-out whitespace-nowrap active:scale-[0.98]';

  const sizeClasses =
    size === 'lg' ? 'py-3 px-8 text-[0.95rem]' : 'py-2 px-5 text-[0.88rem]';

  const variantClasses = {
    primary:
      'border border-transparent bg-primary text-white hover:bg-primary-hover hover:shadow-focus',
    ghost:
      'border border-border bg-transparent text-text-primary hover:border-border-hover hover:bg-hover-overlay',
    light:
      'border border-transparent bg-transparent text-text-primary hover:bg-hover-overlay',
    'outline-light':
      'border border-border bg-transparent text-text-primary hover:border-border-hover hover:bg-hover-overlay',
  };

  const computedClasses = `${baseClasses} ${sizeClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={computedClasses} onClick={onClick} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={computedClasses} onClick={onClick} id={id}>
      {children}
    </button>
  );
}
