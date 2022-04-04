import styles from './Layout.module.css';

const Layout = ({ children }) => {

    return (
        <main className={styles.container}>{children}</main>
    )
}

export default Layout;