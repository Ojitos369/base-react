import React from 'react';
import styles from './styles/index.module.scss';

const Sun = props => {
    const icon = props.icon || '';
    const primary = props.primary || props.class1 || '';
    const secondary = props.secondary || props.class2 || '';
    const fillPrimary = props.fillPrimary || props.fill1 || '';
    const fillSecondary = props.fillSecondary || props.fill2 || '';
    const className = props.className || `icon ${icon || styles.sun_icon}` || '';
    const classPrimary = props.classPrimary || primary || (!fillPrimary && styles.sun_primary) || '';
    const classSecondary = props.classSecondary || secondary || (!fillSecondary && styles.sun_secondary) || '';
    const style = props.style || {};
    const stylePrimary = props.stylePrimary || props.style1 || {};
    const styleSecondary = props.styleSecondary || props.style2 || {};

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
            style={style}
            viewBox="0 0 640 512">
            <path 
                className={classPrimary}
                fill={fillPrimary}
                style={stylePrimary}
                d="M639.1 416C639.1 468.1 596.1 512 543.1 512H271.1c-53 0-96-43-96-95.99c0-50.62 39.25-91.62 88.88-95.37C264.7 317.8 263.1 315 263.1 312c0-61.86 50.25-111.1 112-111.1c45.38 0 84.25 27.13 101.9 65.1c9.876-6.249 21.5-9.999 34.13-9.999c35.25 0 63.1 28.63 63.1 64c0 1.875-.6203 3.619-.7453 5.619C612.7 338.6 639.1 373.9 639.1 416z"/>
            <path 
                className={classSecondary}
                fill={fillSecondary}
                style={styleSecondary}
                d="M144.7 303c-43.63-43.74-43.63-114.7 0-158.3c43.75-43.62 114.8-43.62 158.5 0c9.626 9.748 16.88 20.1 22.25 32.74c9.75-3.749 20.13-5.999 30.75-7.499l29.75-88.86c4-11.87-7.25-23.12-19.25-19.25L278.1 91.2L237.5 8.342c-5.5-11.12-21.5-11.12-27.13 0L168.1 91.2L81.1 61.83C69.22 57.96 57.97 69.21 61.85 81.08l29.38 87.73L8.344 210.3c-11.13 5.624-11.13 21.5 0 27.12l82.88 41.37l-29.38 87.86c-4 11.87 7.375 22.1 19.25 19.12l76.13-25.25c6-12.37 14-23.75 23.5-33.49C167.7 321.7 155.4 313.7 144.7 303zM139.1 223.8c0 40.87 29.25 74.86 67.88 82.36c8-4.749 16.38-8.873 25.25-11.75C238.5 250.2 264.1 211.9 300.5 189.4C287.2 160.3 257.1 139.9 223.1 139.9C177.7 139.9 139.1 177.6 139.1 223.8z"/>
        </svg>
    )
}

const Moon = props => {
    const icon = props.icon || '';
    const primary = props.primary || props.class1 || '';
    const secondary = props.secondary || props.class2 || '';
    const fillPrimary = props.fillPrimary || props.fill1 || '';
    const fillSecondary = props.fillSecondary || props.fill2 || '';
    const className = props.className || `icon ${icon || styles.moon_icon}` || '';
    const classPrimary = props.classPrimary || primary || (!fillPrimary && styles.moon_primary) || '';
    const classSecondary = props.classSecondary || secondary || (!fillSecondary && styles.moon_secondary) || '';
    const style = props.style || {};
    const stylePrimary = props.stylePrimary || props.style1 || {};
    const styleSecondary = props.styleSecondary || props.style2 || {};

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
            style={style}
            viewBox="0 0 576 512">
            <path 
                className={classPrimary}
                fill={fillPrimary}
                style={stylePrimary}
                d="M415.1 431.1C415.1 476.2 380.2 512 335.1 512H95.99c-52.1 0-95.1-43-95.1-96c0-41.88 27.13-77.25 64.62-90.25c-.125-2-.6279-3.687-.6279-5.687c0-53 43-96.06 96-96.06c36.25 0 67.37 20.25 83.75 49.88c11.5-11 27-17.87 44.25-17.87c35.25 0 63.1 28.75 63.1 64c0 12-3.5 23.13-9.25 32.75C383.7 356.2 415.1 390.1 415.1 431.1z"/>
            <path 
                className={classSecondary}
                fill={fillSecondary}
                style={styleSecondary}
                d="M565.2 298.4c-92.1 17.75-178.5-53.62-178.5-147.6c0-54.25 29-104 76.12-130.9c7.375-4.125 5.375-15.12-2.75-16.63C448.4 1.125 436.7 0 424.1 0c-105.9 0-191.9 85.88-191.9 192c0 8.5 .6251 16.75 1.75 25c5.875 4.25 11.62 8.875 16.75 14.25C262.1 226.5 275.2 224 287.1 224c52.87 0 95.1 43.13 95.1 96c0 3.625-.25 7.25-.625 10.75c23.62 10.75 42.37 29.5 53.5 52.5c54.37-3.375 103.7-29.25 137.1-70.37C579.2 306.4 573.5 296.8 565.2 298.4z"/>
        </svg>
    )
}

export { 
    Sun,
    Moon
 };