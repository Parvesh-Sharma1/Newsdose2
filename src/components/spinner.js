import React, { Component } from 'react'
import book from './Book.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={book} alt="loading" />
      </div>
    )
  }
}
