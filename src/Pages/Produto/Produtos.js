import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../App.module.css'
import Loading from '../../Components/Loading'
import Head from '../../Components/Head';

const Produtos = () => {
    const [produtos, setProdutos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProdutos(data)
            setLoading(false)
        })
    }, [])

    if(loading)
        return <Loading />
    return (
        <>
            <Head title="Produtos" description="Esta é a página de produtos"/>
            <section className={styles.container}>
                <div className={styles.produtos}>
                    {produtos.map(produto => (
                        <div key={produto.id} className={styles.produto}>
                            <NavLink to={{pathname: `/produto/${produto.id}`}}>
                                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                                <h4>{produto.nome}</h4>
                            </NavLink>
                        </div>
                    ))}
                    
                </div>
            </section>
        </>
    )
}

export default Produtos
