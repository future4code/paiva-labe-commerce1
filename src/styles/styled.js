import styled from 'styled-components';

export const MainContainer = styled.div`
display: grid;
grid-template-columns: 200px 1fr 1fr;
grid-template-rows: 100px 1fr 1fr 200px;
min-height: 100vh;

header {
    display: flex;
    grid-column: 1 / -1;
    justify-content: center;
    background-color: #FDEA2D;
    align-items: center;
}

footer {
    grid-column: 1 / -1;
    grid-row: 4 / span -1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FDEA2D;
}

.container-lado-esquerdo {
    grid-column: 1;
    grid-row: 2 / 3;
    background-color: blue;
}

`
export const CarrinhoContainer = styled.div`
border:1px solid black;
`
export const HomeContainer = styled.div`
grid-row: 2 / span 3;
grid-column: 2 / span 3;

.home-container-align {
    min-height: 100%;
}
.filtro-align {
    display: flex;
    justify-content: space-around;
    justify-items: center;
}

.container-do-card {
    display: flex;
    border: 1px solid black;
    flex-wrap: wrap;
        .card {
            display: flex;
            border: 1px solid black;
            border-radius: 5px;
            width: 250px;
            margin: 5px auto;
            align-items: center;
            flex-direction: column;
            p {
                margin-top: 10px;
            }
            img {
            margin: 2% auto;
            max-width: 98%;
            max-height: 98%;
            border-radius: 5px;
        }
        .botao {
            padding: 5px;
            margin-bottom: 10px;
            font-size: 10pt;
            border-radius: 10px;
            background: #00aa5b;
            font-weight: 700;
            line-height: 20px;
            cursor: pointer;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
}
`
export const SecaoFiltros = styled.div`
grid-column: 1;
grid-row: 2;

.container-de-filtros{
input:last-child {
    margin-bottom: 10px;
}
}
`



