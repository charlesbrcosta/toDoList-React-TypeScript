import rocket from '../assets/logoRocket.svg'

import styles from './Header.module.css'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={rocket} alt='Logo da Rockeseat'/>
            <span className={styles.to}>to</span>
            <span className={styles.do}>do</span>
        </header>
    )
}