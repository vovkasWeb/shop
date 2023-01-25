import React, { Component } from 'react'

export class Order extends Component {
  render() {
	 return (
			<div className="item">
			<img src={this.props.item.img} alt="" />
				<h2 className="">{this.props.item.title}</h2>
				<b className="">{this.props.item.price}$</b>
				</div>
	 )
  }
}

export default Order