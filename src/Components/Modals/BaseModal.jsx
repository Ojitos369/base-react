import React, { useEffect, useContext, Fragment } from 'react';
import { AllContext } from '../../App/MyContext';
import styles from '/src/Components/Modals/styles/index.module.scss';

const BaseModal = props => {
    const { ls, s, f } = useContext(AllContext);
    
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};

    const close = () => {
        f.upgradeLvl2('modals', 'exampleBase', 'example', false);
    }
    const closeModal = e => {
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', closeModal);
        return () => {
            document.removeEventListener('keydown', closeModal);
        }
    }, [s.modals?.exampleBase?.example]);
    return (
        <div
            className={`${styles.modal_info}`}
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`flex ${styles.modal_container} ${styles.modal_container_50} pb-5 pt-5 ${styles.my_modal}`}
                style={{...s.styles.basic}}
                onClick={e => e.stopPropagation()}
                >
                Content Here
                <div className="flex flex-row flex-wrap justify-around">
                    And Here :3
                </div>
            </div>
        </div>
    )
}

export { BaseModal };