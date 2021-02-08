import React from 'react'
import styles from '../../App.module.css'
import Head from '../../Components/Head';

const Contato = () => {
    return (
        <>
            <Head title="Contato" description="Esta é a página de contato"/>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.flexLeft}>
                        <img src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/camera.jpg" alt="Entre em contato" />
                    </div>
                    <div className={styles.flexRight}>
                        <h3>Entre em contato</h3>
                        <span className={styles.underline}>jean@revirtua.com.br</span>
                        <span className={styles.underline}>31 98987-0540</span>
                        <span className={styles.underline}>Rua Tal, 1008</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contato
