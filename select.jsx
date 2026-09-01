import React, { createContext, useContext } from 'react';

const SelectContext = createContext(null);

export function Select({ value, onValueChange, children }) {
  return <SelectContext.Provider value={{ value, onValueChange }}>{children}</SelectContext.Provider>;
}
export function SelectTrigger({ children, className = '' }) {
  const { value } = useContext(SelectContext);
  return (
    <div className={`relative ${className}`}>
      <select value={value} onChange={(e) => useContext(SelectContext)?.onValueChange?.(e.target.value)} className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm outline-none focus:ring-2 focus:ring-ring">
        <option value="">Select a service</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">{children}</div>
    </div>
  );
}
export function SelectValue({ placeholder }) { return <span className="text-muted-foreground">{placeholder}</span>; }
export function SelectContent() { return null; }
export function SelectItem() { return null; }