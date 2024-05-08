import styles from '../styles/colorsCubesUpdate.module.scss';
const ColorsCubesUpdate = props => {
    return (
        <div className={`${styles.loop} ${styles.cubes}`}>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
            <div className={`${styles.item} ${styles.cubes}`}></div>
        </div>
    )
}

export { ColorsCubesUpdate };