import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (

    <aside className={styles.sidebar}>
        <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />

        <Avatar src="https://github.com/DevTechG.png" />
        <div className={styles.profile}>
            <strong>DevTechG</strong>
            <span>Full-Stack Developer</span>
        </div>

        <footer>
            <PencilLine size={20} />
            <a href="#">
            Editar seu perfil
            </a>

        </footer>
        
        </aside>
  );
}