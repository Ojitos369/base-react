import { useEffect, useRef, useState } from 'react';
import { useStates } from '../../Hooks/useStates';
import { useKeyDown, useKeyUp, useLocalTab } from '../../Hooks';
import styles from './styles/index.module.scss';


const ListenKeys = props => {
    const { keyExec } = props;
    // ---------------------------------------------   KEYBOARD EVENTS   --------------------------------------------- #
    useKeyDown(props.close, ['escape'], keyExec);
    useKeyUp(null, ['any'], keyExec);
    // ---------------------------------------------   /KEYBOARD EVENTS   --------------------------------------------- #

    return null;
}

const GeneralModal = props => {
    let { BaseModal } = props;
    BaseModal = BaseModal || LocalModal;
    return (
        <BaseModal {...props} />
    )
}


const LocalModal = props => {
    const { s, f } = useStates();
    const { Component, lvl1, lvl2, autoFocus=true } = props;
    const keyExec = !!s.modals?.[lvl1]?.[lvl2];
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};

    const close = () => {
        if (s.extra_modals?.[lvl1]?.[lvl2]?.close) {
            s.extra_modals[lvl1][lvl2].close();
        }
        if (props.close) {
            props.close();
        }
        f.u2('modals', lvl1, lvl2, false);
    }

    useEffect(() => {
        f.u1('shortCuts', 'keys', {});
    }, []);

    const modalRef = useRef(null);
    const padding = props.padding ?? 'pb-5 pt-5';
    useLocalTab(s.modals?.[lvl1]?.[lvl2], modalRef, autoFocus);

    return (
        <>
        {keyExec && 
        <ListenKeys 
            keyExec={keyExec}
            close={close}
        />}
        <div
            className={`${styles.modal_info}`}
            style={{...ztyle}}
            onClick={close}
            id={`modal-${lvl1}_${lvl2}`}
            ref={modalRef}
            >
            <div 
                className={`flex ${styles.modal_container} ${styles[props?.modal_container_w || "modal_container_50"]} ${padding} ${styles.my_modal}`}
                onClick={e => e.stopPropagation()}
                >
                <Component 
                    {...props}
                />
            </div>
        </div>
        </>
    )
}

export { GeneralModal };