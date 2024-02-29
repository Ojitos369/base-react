import { useContext } from 'react';
import { AllContext } from '../../App/MyContext';
import { GeneralModal } from './GeneralModal';

const ModalThemeChanged = props => {
    return (
        <GeneralModal
            Component={Content}
            lvl1="themes"
            lvl2="changed"
            {...props}
        />
    )
}

const Content = props => {
    const { ls } = useContext(AllContext);
    return (
        <h3 className="text-center basis-full text-bold">
            Thema Cambiado a: {ls.theme}
        </h3>
    )
}

export { ModalThemeChanged };