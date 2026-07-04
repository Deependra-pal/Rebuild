import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'ghost' | 'light' | 'outline-light' | 'invert' | 'ghost-light';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

const variantMap: Record<string, string> = {
  primary: 'sq-btn-primary',
  ghost: 'sq-btn-secondary',
  light: 'sq-btn-secondary',
  'outline-light': 'sq-btn-secondary',
  invert: 'sq-btn-invert',
  'ghost-light': 'sq-btn-ghost-light',
};

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
  const classes = `sq-btn sq-btn-${size} ${variantMap[variant] ?? 'sq-btn-primary'} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} id={id}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} id={id}>
      {children}
    </button>
  );
}
