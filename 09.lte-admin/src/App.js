import React, { Component } from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Menu from './component/menu/Menu'
import TableMenu from './component/menu/TableMenu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header userName="steve" click={()=>{console.log("click")}}/>
        <Menu menu={TableMenu}/>
        <Footer/>
      </div>
    )
  }
}


