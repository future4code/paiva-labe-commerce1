import React from 'react';
import { CarrinhoContainer } from '../../styles/styled'

export default class Carrinho extends React.Component {

// <<<<<<< styledbranch
//     render() {
//         return (
//             <CarrinhoContainer>
//                 <div>
//                     <h3>Carrinho:</h3>
//                     <p>2x</p>
//                     <p>Produto</p>
//                     <button>Remover</button>
//                 </div>
//                 <div>
//                     <p>2x</p>
//                     <p>Produto</p>
//                     <button>Remover</button>
//                 </div>
//                 <p>Valor total:R$70</p>
// =======

    onChangeCarrinho = (event) => {
        this.setState({inputValue: event.target.value})
    }
    adicionaItemAoCarrinho = () =>{
        const novoItem = {
            id: Math.random(),
            name: this.state.inputValue,
            value: 10000.0,

        }
        const copiaListaDoEstado = [novoItem, ...this.state.produtos]
        this.setState({produtos: copiaListaDoEstado})

    }



    apagaItemDoCarrinho = (itemId) => {
        const copiaListaDoEstado = this.state.produtos.filter((item)=>{
         return itemId !== item.id   
                    
        })
        this.setState({produtos: copiaListaDoEstado})

    }

    render() {
        return (
            <CarrinhoContainer>
                <h3>Carrinho:</h3>
                <div>
                    {/* <p>2x</p>IRA RECEBER VALOR QUE VEM DO BOTAO ADICIONAR AO CARRINHO */}
                    <p>Produto</p>
                    {/* <button onClick={()=>this.apagaItemDoCarrinho(itemId)}> */}
                    {/* a função de cima se usa nao coloquei pq ela não esta recebendo id ainda */}
                    <button onClick={this.apagaItemDoCarrinho}>
                        Remover
                    </button>
                    {/* {this.state.produtos.map((item) =>{
                        return <Item key={item.id}
                        item={item}
                        apagaItemDoCarrinho={this.apagaItemDoCarrinho}/>
                    })} */}
                </div>
                <p>Valor total:R$70</p>
               


            </CarrinhoContainer>
        )
    }
}