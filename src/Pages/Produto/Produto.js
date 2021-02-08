import React from 'react'
import styles from '../../App.module.css'
import {useParams} from 'react-router-dom';
import Loading from '../../Components/Loading'
import Head from '../../Components/Head';

const Produto = () => {
    const {id} = useParams()
    
    const [produto, setProduto] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [slideAtivo, setSlideAtivo] = React.useState(0);    
    const [position, setPosition] = React.useState(0);

    const slideRef = React.useRef()

    React.useEffect(() => {
        if(loading) return;
        const { width } = slideRef.current.getBoundingClientRect();
        setPosition(-(width * slideAtivo));
    }, [slideAtivo, loading]);

    React.useEffect(() => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProduto(data)
            setLoading(false)
        })
    }, [id])

    

    if(loading)
        return <Loading />
    return (
        <>
            <Head title={`${produto.nome} - R$${produto.preco}`} description={`${produto.nome} - ${produto.descricao}`}/>
            <div className={styles.container}>
                <div className={styles.produtoContent}>
                    <div className={styles.flexLeft}>
                        <div className={styles.imgPrincipalContainer}>                            
                            <div ref={slideRef} className={styles.imgPrincipalcontent} style={{transform: `translateX(${position}px)`}}>
                                {produto.fotos.map((foto) => (
                                    <div key={foto.src} className={styles.imgPrincipalItem}>
                                        <img src={foto.src} alt={foto.titulo} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`${styles.flex} ${styles.galeria}`}>
                            {produto.fotos.map((foto, i) => (
                                <img key={foto.src} src={foto.src} alt={foto.titulo} onClick={() => setSlideAtivo(i)}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.flexRight}>
                        <h3>{produto.nome}</h3>
                        <span className={styles.preco}>R${produto.preco}</span>
                        <p>{produto.descricao}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Produto
