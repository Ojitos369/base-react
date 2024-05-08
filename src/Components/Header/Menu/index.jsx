import { useMemo } from 'react';
import { useStates } from '../../../Hooks/useStates';

import { HamburgerButton } from '../../Buttons';

import { GeneralModal } from '../../Modals/GeneralModal';
import { MenuModal } from './MenuModal';
// import { Filtros } from './Filtros';
import { useEffect } from 'react';

const Menu = props => {
    const { s, f } = useStates();
    const { styles } = props;
    const value = useMemo(() => !!s.modals?.header?.showMenu, [s.modals?.header?.showMenu]);
    const [ComponentMenu, keyExec] = useMemo(() => {
        let C = MenuModal;
        let keyExec = null;
        switch (s.menu?.modal?.mode) {
            // case ('filtros'):
            //     C = Filtros;
            //     keyExec = false;
            //     break;
            default:
                break;
        }
        
        return [C, keyExec];
    }, [s.menu?.modal?.mode]);

    
    const update = value => {
        f.u2('modals', 'header', 'showMenu', value);
    }
    const onClick = e => {
        if (!!e) e.preventDefault();
        f.u2('modals', 'header', 'showMenu', !value);
    }

    useEffect(() => {
        f.u2('menu', 'modal', 'mode', 'menu');
    }, [s.modals?.header?.showMenu])

    return (
        <>
            <HamburgerButton
                value={value}
                update={update}
                onClick={onClick}
                />

            {s.modals?.header?.showMenu &&
            <GeneralModal
                Component={ComponentMenu}
                lvl1={'header'}
                lvl2={'showMenu'}
                modal_container_w="50"
                styles={styles}
                keyExec={keyExec}
                />}
        </>
    )
}

export { Menu }
