import styled from 'styled-components';

export const MainContainer = styled.div`
display: grid;
grid-template-columns:  200px 1fr 200px;
grid-template-rows: 100px 1fr 1fr 300px;
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

.container-lado-direito {
    grid-column: 3;
    grid-row: 2 / -1;
    background-color: #d3d4d6;
}

.container-lado-esquerdo {
    grid-row: 2 / -1;
    background-color: #d3d4d6;
}

`
export const CarrinhoContainer = styled.div`
/* border:1px solid black; */
.info-carrinho {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    align-items: center;
    button {
        padding: 5px;
    }
}
`
export const HomeContainer = styled.div`
grid-row: 2 / span 3;
grid-column: 2;

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
    /* flex-wrap: wrap; */
    flex-flow: row wrap;
    margin: 20px;
        .card {
            display: flex;
            width: 250px;
            margin: 5px auto;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            p {
                margin-top: 10px;
                strong {
                    font-size: 14pt;
                }
            }
            img {
            margin: 2% auto;
            max-width: 98%;
            max-height: 98%;
            border-radius: 5px;
        }
        .botao {
            border: none;
            width: 95%;
            padding: 10px;
            margin: 10px 0;
            font-size: 14pt;
            border-radius: 5px;
            background: #00aa5b;
            font-weight: 600;
            line-height: 20px;
            cursor: pointer;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
    .card:hover {
            border: 1px solid #d3d4d6;
            border-radius: 5px;     
    }
    .botao:hover {
        background: rgba(0,170,91,0.8);

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



