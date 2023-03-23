import React from 'react'
import { useTheme } from 'next-themes'
import styles from './ThemeToggle.module.scss.d'
import classnames from 'classnames'

const ThemeToggle = ({hideOnSmallScreens}: {hideOnSmallScreens?: boolean}) => {
    const { theme, setTheme } = useTheme()

    return <div className={classnames(styles.toggle, hideOnSmallScreens && styles.hideOnSmallScreens)} title="Dark mode">
        <input className={styles.input} type="checkbox" id="theme-toggle-input" defaultChecked={theme === 'dark'}
               onClick={(event) => setTheme((event.target as HTMLInputElement).checked ? 'dark' : 'light')} />
        <label htmlFor="theme-toggle-input">
            <div className={styles.switchDiv}>
                <div className={styles.dot}></div>
            </div>
            <span />
        </label>
    </div>
}

export default ThemeToggle
