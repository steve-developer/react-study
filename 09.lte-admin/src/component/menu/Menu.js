import React, { Component, Fragment } from 'react'
import TableMenu from './TableMenu'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <TableMenu click={()=>{console.log("click")}}/>
                    </ul>
                </section>
                {/* /.sidebar */}
                </aside>

            </div>
        )
    }
}
