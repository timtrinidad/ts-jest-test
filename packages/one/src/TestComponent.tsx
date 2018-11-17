import * as React from 'react'
import { Component } from 'react'
import { AnyChild } from 'src/types'

interface Props {
  children: AnyChild
}

export default class TestComponent extends Component<Props> {


  render() {
    const { children } = this.props;
    return (
        <div>
            {children}
        </div>
    )
  }
}
