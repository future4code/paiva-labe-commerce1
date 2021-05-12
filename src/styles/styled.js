import styled from 'styled-components';

export const MainContainer = styled.div`

`
export const CarrinhoContainer = styled.div`
display:flex;
flex-direction:column;
border:1px solid black;
justify-content: space-between;
div{
    display:flex;
    justify-content: space-between;
}
`
export const HomeContainer = styled.div`
width: 500px;

margin: 5px auto;
background-color: yellow;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 10px;

`
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
border: solid black 1px;
text-align: center;

img {
    width: 100%;
}

button {
    padding: 5px
}
`

export const SecaoFiltros = styled.div`
display: flex;
flex-direction: column;
`

