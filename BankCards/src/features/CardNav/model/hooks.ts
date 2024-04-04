import { useState } from 'react';

export function useToggle(initialValue: boolean): [boolean, () => void] {
    const [toggle, setToggle] = useState(initialValue);

    const toggleFn = () => {
        setToggle(!toggle);
    };

    return [toggle, toggleFn];
}
