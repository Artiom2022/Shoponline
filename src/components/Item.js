import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-cart' onClick={()=> {this.props.onAdd(this.props.item)}}>+</div>
        <FaTrash onClick={()=> {this.props.onDelete(this.props.item.id)}} className="delete-crud"/>       
      </div>
    )
  }
}

export default Item