import styles from '../styles/dobleLoader.module.scss';
const DobleLoader = props => {
    return (
        <div className={`${styles.dobleLoader}`}>
            <p className={`${styles.h2}`} >Loading....<span className={`${styles.lol}`}></span></p>
        </div>
    )
}
export { DobleLoader };