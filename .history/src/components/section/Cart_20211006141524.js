import React, { Component} from 'react'
import { DataContext } from '../Context'
import Colors from './Colors';
import "../css/Details.scss"
import "../css/Cart.scss"
import StripeCheckout from "react-stripe-checkout";
export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();

    }

    render() {
        const onToken = (token) => {
            console.log(token);
        };
        const { cart, increase, reduction, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center", color: "white", background: "#353b48" }}>Chưa Có Sản Phẩm.</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span style={{ fontSize: "20px" }}>Số Tiền Phải Thanh Toán: ${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors} />
                                    <p>{item.description}</p>
                                    <p>{item.Content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)} style={{ backgroundColor: '#78e08f', fontSize: '15px', }}>Xóa</div>
                            </div>
                        ))
                    }
                    <div className="total">
                    {
                        cart.map(item =)
                    }
                    <StripeCheckout
                            token={onToken}
                            name="Payment"
                            amount={total*100}
                            stripeKey="pk_test_51JhSc7JMnOs2Elk8wV16r9Gtv9d2h5XshqZyVMJ9NyG8BuPn2IEijfK6F1XpTvacMJ4latVuN6h5N7lN3ASs17mu00Yfw2JxtM"
                        />   
                        <h3>Total: ${total}</h3>
                    </div>
                    
                </>
            )
        }
    }

}

export default Cart
