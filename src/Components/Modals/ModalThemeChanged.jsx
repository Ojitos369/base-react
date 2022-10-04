import React from 'react';
import { AllContext } from '../../App/MyContext';

function ModalThemeChanged(props) {
    const { ls, s, f } = React.useContext(AllContext);
    
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};

    const close = () => {
        f.upgradeLvl2('modals', 'themes', 'changed', false);
    }
    const closeModal = e => {
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
        }
    }
    React.useEffect(() => {
        document.addEventListener('keydown', closeModal);
        return () => {
            document.removeEventListener('keydown', closeModal);
        }
    }, [s.modals?.themes?.changed]);
    return (
        <div
            className="modal-info"
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`container modal-container modal-container-50 pb-5 pt-5 modal-${ls.theme}`}
                style={{...s.styles.basic}}
                onClick={e => e.stopPropagation()}
                >
                <div className="row justify-content-around">
                    Thema Cambiado a: {ls.theme}
                </div>
            </div>
        </div>
    )
}

export { ModalThemeChanged };