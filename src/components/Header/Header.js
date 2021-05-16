import React from 'react'
import { HeaderContainer } from '../../styles/styled'
import logo from '../../img/icon/logo.png'
import userIcon from '../../img/icon/user.png'
import favoritos from '../../img/icon/favoritos.png'
import carrinho from '../../img/icon/carrinho.png'

export default class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <div>
                    <img className="logo" src={logo}/>
                </div>
                <div className="icones-direita">
                    <img src={favoritos}/>
                    <p>Lista de desejos</p>
                    <img src={userIcon}/>
                    <div className="input-login">
                        <input placeholder="Usuário"></input>
                        <input placeholder="Senha"></input>
                    </div>
                    
                    <img src={carrinho}/>
                </div>
            </HeaderContainer>
            
        )
    }
}