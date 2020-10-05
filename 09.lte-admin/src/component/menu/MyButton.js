import React, { Component } from 'react'
import TableMenu from './TableMenu'

export default class MyButton extends TableMenu {
    render() {
        this.props.children.href = ""
        return this
    }
}
