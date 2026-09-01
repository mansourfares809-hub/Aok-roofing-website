import React from 'react';

export function Button({ className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    default: 'bg-primary text-primary-foreground hover:opacity-90',
    outline: 'border border-input bg-background hover:bg-secondary',
  };
  return <button className={`${base} ${variants[variant] || variants.default} ${className}`} {...props} />;
}