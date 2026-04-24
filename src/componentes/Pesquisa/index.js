import Input from "../Input";
import styled from "styled-components";
import {useState} from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight:500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    diplay: flex;
    justify-content: center;
    aling-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p{
    width: 200px;
    }
    img{
    width: 100px;
    }
    $:hover{
    border: 1px solid white
    }
`

function Pesquisa() {
    const[livrosPesquisados, setLivrosPesquisados] = useState([])
console.log(livrosPesquisados)    
    return (
        <PesquisaContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <Input placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
           {livrosPesquisados.map(livro => (
            <Resultado>
                <p>{livro.nome}</p>
                <img src={livro.src}/>
            </Resultado>
           ))
           
           }
 {/* estado de componente são variaveis mutaveis  desses componentes que fazem partes da montagem da pagina  */}
        </PesquisaContainer>
    )
}

export default Pesquisa;