import React from 'react';
import { AllContext } from '../../App/MyContext';

function BaseModal({}) {
    const { ls, Icons, s, f } = React.useContext(AllContext);
    const icons = new Icons();

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
            onClick={close}
            >
            <div 
                className={`container modal-container pb-5 pt-5 modal-${ls.theme}`}
                style={{...s.styles.basicStyle}}
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