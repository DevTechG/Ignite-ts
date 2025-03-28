// Componentes começar com letra Maiúscula para diferenciar de tag HTML
import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return(
        <header>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong className={styles.header}> Ignite Feed</strong>
        </header>
    )
}