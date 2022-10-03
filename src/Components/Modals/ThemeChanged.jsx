import React from 'react';
import { AllContext } from '../../App/MyContext';

function ThemeChanged({}) {
    const { ls, Icons, s, f } = React.useContext(AllContext);
    const icons = new Icons();

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
            onClick={close}
            >
            <div 
                className={`container modal-container pb-5 pt-5 modal-${ls.theme}`}
                style={{...s.styles.basicStyle}}
                onClick={e => e.stopPropagation()}
                >
                <div className="row justify-content-around">
                    Thema Cambiado a: {ls.theme}
                </div>
            </div>
        </div>
    )
}

export { ThemeChanged };