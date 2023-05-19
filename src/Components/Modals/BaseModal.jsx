import React from 'react';
import { AllContext } from '../../App/MyContext';

function BaseModal(props) {
    const { ls, Icons, s, f } = React.useContext(AllContext);
    
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
    React.useEffect(() => {
        document.addEventListener('keydown', closeModal);
        return () => {
            document.removeEventListener('keydown', closeModal);
        }
    }, [s.modals?.exampleBase?.example]);
    return (
        <div
            className="modal-info"
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`container modal-container modal-container-50 pb-5 pt-5 my-modal`}
                style={{...s.styles.basic}}
                onClick={e => e.stopPropagation()}
                >
                Content Here
                <div className="row justify-content-around">
                    And Here :3
                </div>
            </div>
        </div>
    )
}

export { BaseModal };