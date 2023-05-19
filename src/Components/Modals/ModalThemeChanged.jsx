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
            className="modal-info basis-full flex justify-center"
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`flex modal-container modal-container-50 pb-5 pt-5 my-modal`}
                style={{...s?.styles?.basic}}
                onClick={e => e.stopPropagation()}
                >
                <h3 className="text-center basis-full text-bold">
                    Thema Cambiado a: {ls.theme}
                </h3>
            </div>
        </div>
    )
}

export { ModalThemeChanged };