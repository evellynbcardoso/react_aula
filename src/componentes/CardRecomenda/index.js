function CardRecomenda({titulo, subtitulo, descrição, img}){
    return(
           <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{descrição}</p>
            <img src="{img}"/>
            <button>Saiba mais</button>
        </div>
    )
}

export default CardRecomenda 