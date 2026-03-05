import { type ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
    className?: string;
}

export const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
    // Оставляем твои px-8 py-3 и font-bold
    const baseStyles = "px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer";

    const variants = {
        // Заменили text-white на text-brand-white
        primary: "bg-brand-orange text-brand-white shadow-button-glow hover:brightness-110",
        
        // Outline теперь при наведении тоже красится в твой brand-white
        outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-white hover:shadow-button-glow"
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