import { ReactNode } from 'react';
import './Button.scss';

type ButtonProps = {
    children?: string | ReactNode;
    id?: string;
    onClick?: boolean | (() => void);
    className?: string;
    style?: {
        background?: string;
        backgroundImage?: string;
        color?: string;
    };
};

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button {...props} type="button">
            {children}
        </button>
    );
}
