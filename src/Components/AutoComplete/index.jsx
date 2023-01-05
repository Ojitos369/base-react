import React from 'react';
import { AllContext } from '../../App/MyContext';
import { ModalThemeChanged } from '../Modals/ModalThemeChanged';

const values_complete = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>',
    '"': '"',
    "'": "'",
    '`': '`',
}

function AutoComplete() {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();

    const editData = e => {
        e.preventDefault();
        let value = e.target.value;
        let key = e.nativeEvent.data;
        const old_value = s?.info?.test || '';
        const selectionStart = e.target.selectionStart;
        f.upgradeLvl1('info','selection', [0,0]);
        if (!!key && !!values_complete[key]) {
            f.upgradeLvl1('info','loadingChange', true);
            if (!s?.info?.text_temp) {
                value = old_value.slice(0, selectionStart - 1) + key + values_complete[key] + old_value.slice(selectionStart - 1);
                f.upgradeLvl1('info','selection', [selectionStart, selectionStart]);
            } else {
                value = old_value.slice(0, selectionStart - 1) + key + s?.info?.text_temp + values_complete[key] + old_value.slice(selectionStart + s?.info?.text_temp.length - 1);
                f.upgradeLvl1('info','selection', [selectionStart, selectionStart + s?.info?.text_temp.length]);
            }
            f.upgradeLvl1('info','loadingChange', false);
        }
        f.upgradeLvl1('info','test', value);
        f.upgradeLvl1('info','text_temp', '');
    }
    
    React.useEffect(() => {
        const selection = s?.info?.selection || [0,0];
        const element = document.getElementById('test');
        if (selection[0] > 0 || selection[1] > 0) {
            console.log('selection[0]: ', selection[0]);
            console.log('selection[1]: ', selection[1]);
            element.setSelectionRange(selection[0], selection[1]);
        } else {
            element.setSelectionRange(element.selectionStart, element.selectionStart);
        }
    }, [s?.info?.selection]);
    return (
        <React.Fragment>
            <div className='row justify-content-center pt-5 h2 fw-bold'>
                <div
                    className='col-6 col-md-6'>
                    <textarea 
                        name="test" 
                        className='form-control'
                        value = {s?.info?.test || ''}
                        id="test" 
                        onChange={e => {
                            editData(e);
                            
                        }}
                        onSelectCapture={e => {
                            if (!!s?.info.loadingChange) {return}
                            const selectionEnd = e.target.selectionEnd;
                            const selectionStart = e.target.selectionStart;
                            let value = e.target.value;
                            value = value.substring(selectionStart, selectionEnd);
                            f.upgradeLvl1('info','text_temp', value);
                        }}
                        rows="10">
                    </textarea>
                </div>
            </div>
            {/* {s.modals?.themes?.changed && <ModalThemeChanged zindex={-1} />} */}
            {s.modals?.themes?.changed && <ModalThemeChanged />}
        </React.Fragment>
    )
}

export { AutoComplete };