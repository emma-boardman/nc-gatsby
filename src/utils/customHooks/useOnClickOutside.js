import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
    console.log(ref);
    useEffect(() => {
        const listener = event => {
            if (!ref || ref.contains(event.target)) {
                return;
            }
            handler(event);
        }
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        }
    },
    [ref, handler],
    );
}