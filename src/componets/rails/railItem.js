import React, {Component} from "react";
import './railItem.css';
import AddtoCart from "../cart/addToCart";

export default class RailItem extends Component{
    constructor(props) {
        super(props);
        this.state= {
            stockQuantity: 0,
            // cartQuantity:0
        }
    }

    addToCart=(n, stockValue)=>{
        this.setState({stockQuantity: stockValue}, ()=>{
            console.log('stockValue', stockValue)
        });

        if( this.state.stockQuantity!== 0) {
            this.setState({
                // cartQuantity:this.state.cartQuantity+1,
                stockQuantity: this.state.stockQuantity - 1
            })
            console.log("stock--->",this.state.stockQuantity);
        }
    }

  render() {
        const { currentValue} = this.props;
      // console.log( "in cart--->",this.state.cartQuantity);
        return <div className="rail-item-box">
            {
                currentValue.item.map((object,index)=>(
                    <div key={index} className="rail-img-container">
                        <img className="rail-img"
                             src={object.railImg}
                        />
                      <AddtoCart inStock={object.inStock} addToCart={this.addToCart}/>
                    </div>
                ))
            }
              </div>
    }
}