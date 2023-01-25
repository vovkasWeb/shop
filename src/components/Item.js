import React, { Component } from 'react'

export class Item extends Component {
  render() {
	 return (
		<div className="item">
			<img src={this.props.item.img} alt="" />
				<h2 className="">{this.props.item.title}</h2>
				<p className="">{this.props.item.desc}</p>
				<b className="">{this.props.item.price}$</b>
				<div className="add-to-cart" onClick={()=>this.props.onAdd(this.props.item)}>+</div>
		</div>
	 )
  }
}

export default Item