import { useContext, useEffect } from 'react';
import { AllContext } from '../MyContext';


const useKeyDown = (callback, keys, keyExec, extras) => {
    const element = document;
    const { s, f } = useContext(AllContext);
    const onKeyDown = (event) => {
        if (!keyExec) return;
        const evKey = event?.key?.toLowerCase();
        const evCode = event?.code?.toLowerCase();
        const evKeyCode = event?.keyCode;
        const valids = [evKey, evCode, evKeyCode];
        const actualKeys = Object.keys(s.shortCuts?.keys);
        if (actualKeys.includes(evKey)) return;

        const wasAnyKeyPressed = keys.some((key) => valids.includes(key.toLowerCase()));
        if (wasAnyKeyPressed) {
            let keys = {
                ...s.shortCuts?.keys,
                [evKey]: true,
            }
            f.upgradeLvl1('shortCuts', 'keys', keys);
            if (!!callback) callback(event);
        }
    };
    useEffect(() => {
        if (!keyExec) return;
        element.addEventListener('keydown', onKeyDown);
        return () => {
            element.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, keyExec]);
};


const useKeyUp = (callback, keys, keyExec, extras) => {
    const element = document;
    const { s, f } = useContext(AllContext);
    const onKeyUp = (event) => {
        if (!keyExec) return;
        const evKey = event?.key?.toLowerCase();
        const evCode = event?.code?.toLowerCase();
        const evKeyCode = event?.keyCode;
        const valids = [evKey, evCode, evKeyCode];
        const wasAnyKeyPressed = keys.some((key) => valids.includes(key.toLowerCase())) || keys.includes('any');
        if (wasAnyKeyPressed) {
            // event.preventDefault();
            let keys = {
                ...s.shortCuts?.keys,
            }
            delete keys[evKey];
            f.upgradeLvl1('shortCuts', 'keys', keys);
            if (!!callback) callback(event);
        }
    };
    useEffect(() => {
        if (!keyExec) return;
        element.addEventListener('keyup', onKeyUp);
        return () => {
            element.removeEventListener('keyup', onKeyUp);
        };
    }, [onKeyUp, keyExec]);
};

export { 
    useKeyDown,
    useKeyUp 
};