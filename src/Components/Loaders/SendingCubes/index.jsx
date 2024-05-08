import styles from '../styles/sendingCubes.module.scss';
const SendingCubes = props => {
    return (
        <div className={`${styles.loader}`}>
            <div className={`box box0`}>
                <div></div>
            </div>
            <div className={`${styles.box} ${styles.box1}`}>
                <div></div>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
                <div></div>
            </div>
            <div className={`${styles.box} ${styles.box3}`}>
                <div></div>
            </div>
            <div className={`${styles.box} ${styles.box4}`}>
                <div></div>
            </div>
            <div className={`${styles.box} ${styles.box5}`}>
                <div></div>
            </div>
            <div className={`${styles.box} ${styles.box6}`}>
                <div></div>
            </div>
            <div className={`${styles.box} ${styles.box7}`}>
                <div></div>
            </div>
            <div className={`${styles.ground}`}>
                <div></div>
            </div>
        </div>
    )
}

export { SendingCubes };