import React, { Component } from 'react'

export default class TableMenu extends Component {
    
    constructor(props){
        super(props)
        this.href = "abcd"
    }
    
    render() {

        const href = "/"

        return (
            <li className="treeview" onClick={this.props.click}>
                <a href={href}>
                    <i className="fa fa-table" />
                    <span>Tables</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right" />
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li>
                        <a href="pages/tables/simple.html">
                            <i className="fa fa-circle-o" /> Simple tables
                    </a>
                    </li>
                    <li>
                        <a href="pages/tables/data.html">
                            <i className="fa fa-circle-o" /> Data tables
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
}
