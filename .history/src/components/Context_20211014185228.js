import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
   
    state = {
        products: [
          {
            "_id": "1",
            "title": "Áo khoác regular",
            "src": "https://media.canifa.com/catalog/product/cache_generated/500x/8ot20w004-sa004-3-thumb-.jpg",
            "description": "Hàng Nhập Từ Quãng Châu",
            "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
            "price": 23,
            "colors":["red","black","crimson","teal"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "Áo thun ATN250",
            "src": "https://media.canifa.com/catalog/product/cache_generated/500x/8ot20w020-sj611-2-thumb-.jpg",
            "description": "Hàng Nhập Từ Quãng Châu",
            "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
            "price": 19,
            "colors":["red","crimson","teal"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "Áo thun ATN262",
            "src": "https://media.canifa.com/catalog/product/cache_generated/500x/8ot20w007-sg098-2-thumb-.jpg",
            "description": "Hàng Nhập Từ Quãng Châu",
            "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
            "price": 50,
            "colors":["lightblue","white","crimson","teal"],
            "count": 1
        },
            {
              "_id": "1",
              "title": "Áo thun ATN260",
              "src": "https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
              "price": 23,
              "colors":["red","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "2",
              "title": "Áo thun ATN250",
              "src": "https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
              "price": 19,
              "colors":["red","crimson","teal"],
              "count": 1
          },
          {
              "_id": "3",
              "title": "Áo thun ATN262",
              "src": "https://product.hstatic.net/1000147171/product/2_c3fde67fdb504a46a3ef8c3b2627d8e2_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
              "price": 50,
              "colors":["lightblue","white","crimson","teal"],
              "count": 1
          },
          {
              "_id": "4",
              "title": "Áo thun ATN121",
              "src": "https://product.hstatic.net/1000147171/product/9_3e67b4b7046a4b97a753a6aa55c90c55_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
              "price": 15,
              "colors":["orange","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "5",
              "title": "Áo thun ATN263",
              "src": "https://product.hstatic.net/1000147171/product/3543535-recovered-recovered_afb6febfca32452a86d11a4756c1bc14_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
              "price": 10,
              "colors":["orange","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "6",
              "title": "Áo thun ATN261",
              "src": "https://product.hstatic.net/1000147171/product/3_1228cd1704ec4ae480867c1589d48443_large.png",
              "description": "Hàng Nhập Từ Quãng Châu",
              "Content": "Vải được dệt bằng 65% sợi bông tự nhiên và 35% sợi tổng hợp. Đây là loại vải kinh tế, bền, đẹp được các bạn sinh viên học sinh sử dụng nhiều nhất Màu sắc đa dạng, có thể đặt với số lượng ít với tất cả các màu.",
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


