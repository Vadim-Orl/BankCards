import { useState, useEffect } from 'react';

const root = document.getElementById('root') as HTMLElement;

export function useBlur(initialValue: boolean): [boolean, () => void] {
    const [isModal, setIsModal] = useState(initialValue);
    console.log('blur')
    useEffect(() => {
        if (isModal) {
            root.classList.add('blur');
        } else {
            root.classList.remove('blur');
        }
    }, [isModal]);

    const toggle = () => {
        setIsModal(!isModal);
    };

    return [isModal, toggle];
}
