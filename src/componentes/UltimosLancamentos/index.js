import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import imagemLivro from '../../imagens/livro2.png';
import CardRecomenda from "../CardRecomenda";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content:center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
        <Titulo 
        cor={"#000"}
        tamanhoFonte={"36px"}
        >
            ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
        { livros.map( livro => (
            <img src={livro.src}/>
        ))}
        </NovosLivrosContainer>
        <CardRecomenda
            titulo="Talvez você se interesse por..."
            subtitulo="Angular l1"
            descrição="Construindo uma aplicação com a plataforma Google"
            img={imagemLivro}
        />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos