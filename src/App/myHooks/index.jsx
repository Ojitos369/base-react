import { useContext, useEffect } from 'react';
import { AllContext } from '../MyContext';


const useKeyDown = (callback, keys, keyExec) => {
    const { s, f } = useContext(AllContext);
    const onKeyDown = (event) => {
        if (!keyExec) return;
        const wasAnyKeyPressed = keys.some((key) => event.key.toLowerCase() === key.toLowerCase());
        if (wasAnyKeyPressed) {
            // event.preventDefault();
            let keys = {
                ...s.shortCuts?.keys,
                [event.key.toLowerCase()]: true,
            }
            f.upgradeLvl1('shortCuts', 'keys', keys);
            if (!!callback) callback(event);
        }
    };
    useEffect(() => {
        if (!keyExec) return;
        document.addEventListener('keydown', onKeyDown);
        return () => {
        document.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, keyExec]);
};


const useKeyUp = (callback, keys, keyExec) => {
    const { s, f } = useContext(AllContext);
    const onKeyUp = (event) => {
        if (!keyExec) return;
        const wasAnyKeyPressed = keys.some((key) => event.key.toLowerCase() === key.toLowerCase()) || keys.includes('any');
        if (wasAnyKeyPressed) {
            // event.preventDefault();
            let keys = {
                ...s.shortCuts?.keys,
            }
            delete keys[event.key.toLowerCase()];
            f.upgradeLvl1('shortCuts', 'keys', keys);
            if (!!callback) callback(event);
        }
    };
    useEffect(() => {
        if (!keyExec) return;
        document.addEventListener('keyup', onKeyUp);
        return () => {
        document.removeEventListener('keyup', onKeyUp);
        };
    }, [onKeyUp, keyExec]);
};

export { 
    useKeyDown,
    useKeyUp 
};