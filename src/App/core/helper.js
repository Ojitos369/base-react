const helper = {
    cambiarThema: thema => {
        const minor = thema === 'black' ? '#ffffff' : '#212121';
        const major = thema === 'black' ? '#212121' : '#ffffff';
        document.documentElement.style.setProperty('--my-minor', minor);
        document.documentElement.style.setProperty('--my-major', major);
        return 
    },
    getFloatCurrency: (text) => {
        const value = text.replace(/[^0-9.-]+/g, '');
        return parseFloat(value);
    },
    showCurrency: (value, decimals) => {
        decimals = decimals || 2;
        // separe with commas
        value = parseFloat(value || 0);
        value = value.toFixed(decimals);
        // value = Math.round(value * 10000000) / 10000000;


        let negativo = false;
        let valueString = value.toString();
        if (valueString[0] === '-') {
            negativo = true;
            valueString = valueString.slice(1);
        }

        const decimal = valueString.split('.')[1] || '';
        const integer = valueString.split('.')[0];
        const integerArray = integer.split('').reverse();
        let integerArrayWithCommas = '';
        for (let i = 0; i < integerArray.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                integerArrayWithCommas += ',';
            }
            integerArrayWithCommas += integerArray[i];
        }
        let new_string = integerArrayWithCommas.split('').reverse().join('') + (decimal ? '.' + decimal : '.00');
        
        if (new_string[new_string.length - 1] === ',') {
            new_string = new_string.slice(0, -1);
        }
        if (new_string[0] === ',') {
            new_string = new_string.slice(1);
        }
        
        return '$ ' + (negativo ? '-' : '') + new_string;
    },
    showDate: (date, showTime) => {
        if (!date) {
            return '';
        }
        // console.log(date)
        date = date.toString()
        const sep = date.includes('T') ? date.split('T') : date.split(' ');
        // [0].split('-').reverse().join('/');
        let fecha = sep[0].split('-').reverse().join('/');
        if (showTime || showTime === undefined || showTime === null) {
            let hora = sep.length > 1 ? sep[1].split('.')[0] : '';
            return fecha + ' ' + hora;
        } else {
            return fecha;
        }
    },
    showNumber: (value, decimals) => {
        decimals = decimals || 3;
        // separe with commas
        value = parseFloat(value || 0);
        value = value.toFixed(decimals);
        // value = Math.round(value * 10000000) / 10000000;


        let negativo = false;
        let valueString = value.toString();
        if (valueString[0] === '-') {
            negativo = true;
            valueString = valueString.slice(1);
        }

        let decimal = valueString.split('.')[1] || '';
        decimal = parseInt(decimal) > 0 ? decimal : '';
        const integer = valueString.split('.')[0];
        const integerArray = integer.split('').reverse();
        let integerArrayWithCommas = '';
        for (let i = 0; i < integerArray.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                integerArrayWithCommas += ',';
            }
            integerArrayWithCommas += integerArray[i];
        }
        let new_string = integerArrayWithCommas.split('').reverse().join('') + (decimal ? '.' + decimal : '');
        
        if (new_string[new_string.length - 1] === ',') {
            new_string = new_string.slice(0, -1);
        }
        if (new_string[0] === ',') {
            new_string = new_string.slice(1);
        }
        
        return (negativo ? '-' : '') + new_string;
    },
}

export { helper };