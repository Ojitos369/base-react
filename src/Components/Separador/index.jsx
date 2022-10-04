import React from 'react';
import { AllContext } from '../../App/MyContext';

function Separador(props) {
    /*
        bg = background
        bglt = background line top
        bglc = background line center
        bglb = background line bottom
        smt = size margin top
        slt = size line top
        sst = size space top
        slc = size line center
        ssb = size space bottom
        slb = size line bottom
        smb = size margin bottom
        align = (start, center, end, between, around, evenly)
        width = width (1 - 12)
    */

    const { s } = React.useContext(AllContext);
    let bg = (props?.bg ? {backgroundColor: props.bg} : null) || s.styles.basiceReversed;
    let bglt = (props?.bglt ? {backgroundColor: props.bglt} : null) || bg;
    let bglc = (props?.bglc ? {backgroundColor: props.bglc} : null) || bg;
    let bglb = (props?.bglb ? {backgroundColor: props.bglb} : null) || bg;


    let smt = props.smt || 0;
    smt = {height: `${smt}px`};

    let slt = props.slt || 0;
    slt = {height: `${slt}px`};

    let sst = props.sst || 0;
    sst = {height: `${sst}px`};

    let slc = props.slc || 0;
    slc = {height: `${slc}px`};

    let ssb = props.ssb || 0;
    ssb = {height: `${ssb}px`};

    let slb = props.slb || 0;
    slb = {height: `${slb}px`};

    let smb = props.smb || 0;
    smb = {height: `${smb}px`};

    let align = props.align || 'center';
    align = 'justify-content-' + align;

    let width = props.width || '12';
    width = 'col-' + width;
    
    return (
        <React.Fragment>
            <div className={`row ${align}`}>
                {/* margin top */}
                <div 
                    className={`smt ${width}`}
                    style = {{...smt}}
                ></div>
                {/* /margin top */}
            </div>

            <div className={`row ${align}`}>
                {/* linea top */}
                <div 
                    className={`slt ${width}`}
                    style = {{...slt, ...bglt}}
                ></div>
                {/* /linea top */}
            </div>

            <div className={`row ${align}`}>
                {/* space top */}
                <div 
                    className={`sst ${width}`}
                    style = {{...sst}}
                ></div>
                {/* /space top */}
            </div>

            <div className={`row ${align}`}>
                {/* linea center */}
                <div 
                    className={`slc ${width}`}
                    style = {{...slc, ...bglc}}
                ></div>
                {/* /linea center */}
            </div>

            <div className={`row ${align}`}>
                {/* space bottom */}
                <div 
                    className={`ssb ${width}`}
                    style = {{...ssb}}
                ></div>
                {/* /space bottom */}
            </div>

            <div className={`row ${align}`}>
                {/* linea bottom */}
                <div 
                    className={`slb ${width}`}
                    style = {{...slb, ...bglb}}
                ></div>
                {/* /linea bottom */}
            </div>

            <div className={`row ${align}`}>
                {/* margin bottom */}
                <div
                    className={`smb ${width}`}
                    style = {{...smb}}
                ></div>
                {/* /margin bottom */}
            </div>
        </React.Fragment>
    )
}

export { Separador };