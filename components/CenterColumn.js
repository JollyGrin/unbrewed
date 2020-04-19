import React, { Component, Fragment } from 'react'

export default class CenterColumn extends Component {
  render () {
    return (
      <Fragment>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>{this.props.children}</div>
        </div>
      </Fragment>
    )
  }
}
