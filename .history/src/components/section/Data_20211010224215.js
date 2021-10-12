import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
   
    Dataseach = {
        products: [
            {
              "_id": "1",
              "title": "Áo thun ATN260",
              "src": "https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 23,
              "colors":["red","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "2",
              "title": "Áo thun ATN250",
              "src": "https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 19,
              "colors":["red","crimson","teal"],
              "count": 1
          },
          {
              "_id": "3",
              "title": "Áo thun ATN262",
              "src": "https://product.hstatic.net/1000147171/product/2_c3fde67fdb504a46a3ef8c3b2627d8e2_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 50,
              "colors":["lightblue","white","crimson","teal"],
              "count": 1
          },
          {
              "_id": "4",
              "title": "Áo thun ATN121",
              "src": "https://product.hstatic.net/1000147171/product/9_3e67b4b7046a4b97a753a6aa55c90c55_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 15,
              "colors":["orange","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "5",
              "title": "Áo thun ATN263",
              "src": "https://product.hstatic.net/1000147171/product/3543535-recovered-recovered_afb6febfca32452a86d11a4756c1bc14_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 10,
              "colors":["orange","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "6",
              "title": "Áo thun ATN261",
              "src": "https://product.hstatic.net/1000147171/product/3_1228cd1704ec4ae480867c1589d48443_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 17,
              "colors":["orange","black","crimson","teal"],
              "count": 1
          }
              
        ],
        cart: [],
        total: 0,
    };

    addCart = (id) =>{
      const {products, cart} = this.state;
      const check = cart.every(item => {
        return item._id !== id
      })
      if(check){
        const data = products.filter(product => {
          return product._id === id
        })
        this.setState({cart: [...cart,...data]})
      }else{
        alert("Sản Phẩm Này Đã Có Trong Giỏ Hàng !")
      }
    };


    reduction = id => {
      const {cart} = this.state;
      cart.forEach(item => {
        if(item._id === id){
          item.count === 1? item.count = 1 : item.count -=1;
        }
      })
      this.setState({cart: cart});
      this.getTotal();
    };
    increase = id =>{
      const {cart} = this.state;
      cart.forEach(item => {
        if(item._id === id){
          item.count +=1;
        }
      })
      this.setState({cart: cart});
      this.getTotal();
    };

    removeProduct = id =>{
      if(window.confirm("Bạn có muốn xóa sản phẩm này không ?")){
      const {cart} = this.state;
      cart.forEach((item,index) => {
        if(item._id === id){
          cart.splice(index, 1)
        }
      }) 
      this.setState({cart: cart})
      this.getTotal();
    }
  };

  getTotal = ()=>{
    const{cart} = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
    },0)
    this.setState({total: res})
  };

    render() {
        const {products, cart, total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart,reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}












// import img1 from '../img/logologin.png';
// import img2 from '../img/logologin.png';
// import img3 from '../img/logologin.png';
// import img4 from '../img/logologin.png';
// import img5 from '../img/logologin.png';
// import img6 from '../img/logologin.png';


// const Dataseach = {
//     cardData:[
//         {
//             id:1,
//             img: img1,
//             title:'blog 1',
//             desc:'desc 1'
//         },
//         {
//             id:2,
//             img: img2,
//             title:'blog 2',
//             desc:'desc 2'
//         },
//         {
//             id:3,
//             img:img3,
//             title:'blog 3',
//             desc:'desc 3'
//         },
//         {
//             id:4,
//             img: img4,
//             title:'blog 4',
//             desc:'desc 4'
//         },
//         {
//             id:5,
//             img: img5,
//             title:'blog 5',
//             desc:'desc 5'
//         },
//         {
//             id:6,
//             img:img6,
//             title:'blog 6',
//             desc:'desc 6'
//         }
//     ]
// }
// export default Dataseach;
