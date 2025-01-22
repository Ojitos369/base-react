import { useEffect, useRef, useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
import { useKeyDown, useKeyUp, useLocalTab } from '../../Hooks';
import styles from './styles/index.module.scss';

const dragElement = (elmnt, updatePost, xpos, ypos) => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;

    function dragMouseDown(e) {
        // console.log('%c dragMouseDown', 'color: #498');
        e = e || window.event;
        // e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
        
        document.ontouchmove = elementMove;
        document.ontouchend = onTouchEnd;
    }

    function elementMove(e) {
        e.preventDefault();

        let ele_height = elmnt.offsetHeight;
        let ele_width = elmnt.offsetWidth;

        pos1 = e.changedTouches[0].pageX;
        pos2 = e.changedTouches[0].pageY;

        elmnt.style.top = (pos2 - (ele_height / 2)) + "px";
        elmnt.style.left = (pos1 - (ele_width / 2)) + "px";
    }

    function elementDrag(e) {
        // console.log('%c elementDrag', 'color: #168');
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // console.log('pos1', pos1);
        // console.log('pos2', pos2);
        // console.log('pos3', pos3);
        // console.log('pos4', pos4);

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        // let newx = elmnt.offsetLeft - pos1;
        // let newy = elmnt.offsetTop - pos2;
        // updatePost(newx, newy);
    }

    function closeDragElement() {
        // console.log('%c closeDragElement', 'color: #783');
        document.onmouseup = null;
        document.onmousemove = null;

        document.ontouchend = null;
        document.ontouchmove = null;

        const actual_x = elmnt.offsetLeft;
        const actual_y = elmnt.offsetTop;

        
        const xpos_aux = parseInt(xpos.toString().split('px')[0]);
        const ypos_aux = parseInt(ypos.toString().split('px')[0]);
        // console.log('xpos_aux', actual_x, xpos, xpos_aux);
        // console.log('ypos_aux', actual_y, ypos, ypos_aux);

        const dif_x = Math.abs(actual_x - xpos_aux);
        const dif_y = Math.abs(actual_y - ypos_aux);
        // console.log(`%c x: ${actual_x} - ${xpos_aux} = ${dif_x}`, 'color: #760');
        // console.log(`%c y: ${actual_y} - ${ypos_aux} = ${dif_y}`, 'color: #165');

        // updatePost(actual_x, actual_y);
        if ((dif_x > 10) || (dif_y > 10)) {
            // lf.updateOpenSidenavPos(actual_x, actual_y);
            updatePost(actual_x, actual_y);
        }
        // else {
        //     // lf.updateOpenSidenavPos(actual_x, actual_y);
        //     updatePost(actual_x, actual_y);
        //     f.u2('modals', 'menu','showNavbar', !s?.modals?.menu?.showNavbar);
        // }

    }
    
    function onTouchEnd() {
        // console.log('%c closeDragElement', 'color: #783');
        document.onmouseup = null;
        document.onmousemove = null;

        document.ontouchend = null;
        document.ontouchmove = null;

        const actual_x = elmnt.offsetLeft;
        const actual_y = elmnt.offsetTop;

        
        const xpos_aux = parseInt(xpos.toString().split('px')[0]);
        const ypos_aux = parseInt(ypos.toString().split('px')[0]);

        const dif_x = Math.abs(actual_x - xpos_aux);
        const dif_y = Math.abs(actual_y - ypos_aux);
        // console.log(`%c x: ${actual_x} - ${xpos_aux} = ${dif_x}`, 'color: #760');
        // console.log(`%c y: ${actual_y} - ${ypos_aux} = ${dif_y}`, 'color: #165');

        // updatePost(actual_x, actual_y);
        if (!((dif_x > 15) || (dif_y > 15))) {
            updatePost(actual_x, actual_y);
            f.u2('modals', 'menu', 'showNavbar', !s?.modals?.menu?.showNavbar);
        }
    }
}

const ListenKeys = props => {
    const { keyExec } = props;
    // ---------------------------------------------   KEYBOARD EVENTS   --------------------------------------------- #
    useKeyDown(props.close, ['escape'], keyExec);
    useKeyUp(null, ['any'], keyExec);
    // ---------------------------------------------   /KEYBOARD EVENTS   --------------------------------------------- #

    return null;
}

const GeneralModalMove = props => {
    const { s, f } = useStates();
    const { Component, lvl1, lvl2 } = props;
    const moveElement = `modal-${lvl1}_${lvl2}_content`;

    // const keyExec = useMemo(() => {
    //     const modalOpen = !!s.modals?.[lvl1]?.[lvl2];
    //     const modalStyle = !!s.styles?.modals?.[lvl1]?.[lvl2]?.ztyle;
    //     return (modalOpen && modalStyle);
    // } , [s.modals?.[lvl1]?.[lvl2], s.styles?.modals?.[lvl1]?.[lvl2]?.ztyle]);
    const keyExec = !!s.modals?.[lvl1]?.[lvl2] && !!s.styles?.modals?.[lvl1]?.[lvl2]?.ztyle;

    const ztyle = s.styles?.modals?.[lvl1]?.[lvl2]?.ztyle || (props.zindex ? {zIndex: props.zindex} : {});

    const xpos = s.positions?.modals?.[lvl1]?.[lvl2]?.x;
    const ypos = s.positions?.modals?.[lvl1]?.[lvl2]?.y;


    const close = () => {
        if (s.extra_modals?.[lvl1]?.[lvl2]?.close) {
            s.extra_modals[lvl1][lvl2].close();
        }
        if (props.close) {
            props.close();
        }
        f.u2('modals', lvl1, lvl2, false);
    }

    const updatePost = (x, y) => {
        // console.log('updatePost', x, y);
        f.u3('positions', 'modals', lvl1, lvl2, {x, y});
    }

    useEffect(() => {
        // return;
        if (!moveElement) return;

        setTimeout(() => {
            let element = document.getElementById(moveElement);
            // console.log('element', element);
            let [x, y] = [xpos, ypos];
            // console.log('post', x, y);
            if (!x) {
                x = element.offsetLeft;
            }
            if (!y) {
                y = element.offsetTop;
            }
            // console.log('post', x, y);
            dragElement(element, updatePost, x, y);
        }, 100);

        // eslint-disable-next-line
    }, [lvl1, lvl2, moveElement]);

    useEffect(() => {
        f.u1('shortCuts', 'keys', {});
    }, []);

    useEffect(() => {
        if (!moveElement) return;
        let element = document.getElementById(moveElement);
        if (!!xpos && !!ypos) return;
        const [x, y] = [element.offsetLeft, element.offsetTop];
        updatePost(x, y);
    }, [xpos, ypos, moveElement]);

    const modalRef = useRef(null);
    const padding = props.padding ?? 'pb-5 pt-5';
    useLocalTab(s.modals?.[lvl1]?.[lvl2], modalRef);

    return (
        <>
        {keyExec && 
        <ListenKeys 
            keyExec={keyExec}
            close={close}
        />}
        <div
            className={`${styles.modal_info_movil}`}
            style={{...ztyle, justifyContent: !xpos && 'center'}}
            // onClick={close}
            id={`modal-${lvl1}_${lvl2}`}
            ref={modalRef}
            >
            <div 
                className={`flex ${styles.modal_container} ${styles[props?.modal_container_w || "modal_container_50"]} ${padding} ${styles.my_modal}`}
                id={`modal-${lvl1}_${lvl2}_content`}
                // style={{
                //     top: ypos || '10vh',
                //     left: xpos,
                // }}
                style={{top: ypos || '10vh', left: xpos}}
                onClick={e => {
                    e.stopPropagation(); 
                    f.u1('styles', 'modals', null);
                    f.u3('styles', 'modals', lvl1, lvl2, {ztyle: {zIndex: 999999}});
                }}
                // on focus add styles on leave remove styles
                onFocus={e => {
                    f.u3('styles', 'modals', lvl1, lvl2, {ztyle: {zIndex: 999999}});
                }}
                onBlur={e => {
                    f.u1('styles', 'modals', null);
                }}
                >
                <div className={`${styles.modal_close_head}`}>
                    <div 
                        className={`${styles.modal_close}`}
                        onClick={close}
                        >
                        X
                    </div>
                </div>
                <Component 
                    {...props}
                />
            </div>
        </div>
        </>
    )
}

export { GeneralModalMove };