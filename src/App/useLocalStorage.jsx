import React from 'react';

function useLocalStorage(key, initialValue = '') {
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        const locaStorageItem = localStorage.getItem(key);
        let parsedItem;

        if (locaStorageItem) {
            parsedItem = JSON.parse(locaStorageItem);
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            parsedItem = [];
        }
        setItem(parsedItem);
    },[]);

    const saveItems = (itemList) => {
        const data = JSON.stringify(itemList);
        localStorage.setItem(key, data);
        setItem(itemList);
    }
    return [item, saveItems]
}

export { useLocalStorage };