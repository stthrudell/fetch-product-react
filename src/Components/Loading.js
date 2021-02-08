import React from 'react'
import styles from '../App.module.css'

const Loading = () => {
    return (
        <div className={`${styles.container} ${styles.loading}`}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Loading
