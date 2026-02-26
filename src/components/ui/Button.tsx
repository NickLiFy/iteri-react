import { type ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
    className?: string;
}

export const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
    const baseStyles = "px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer";

    const variants = {
        primary: "bg-brand-orange text-white shadow-button-glow",
        outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};