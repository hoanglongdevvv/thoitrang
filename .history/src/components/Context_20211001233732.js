import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
   
    state = {
        products: [
            // {
            //   "_id": "1",
            //   "title":"Quần jean 01",
            //   "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
            //     "description": "Giảm giá 30% hôm nay",
            //     "Content":"Quần jean cao cấp, xuất xứ từ mĩ với chất liệu bền bĩ",
            //     "price":20,
            //     "colors":["red","black","green"],
            //     "count":1
            // },
            // {
            //     "_id": "2",
            //     "title":"Quần jean 02",
            //     "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
            //       "description": "Giảm giá 30% hôm nay",
            //       "Content":"Quần jean cao cấp, xuất xứ từ mĩ với chất liệu bền bĩ",
            //       "price":30,
            //       "colors":["red","black","green"],
            //       "count":1
            //   },
            //   {
            //     "_id": "3",
            //     "title":"Quần jean 03",
            //     "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
            //       "description": "Giảm giá 30% hôm nay",
            //       "Content":"Quần jean cao cấp, xuất xứ từ mĩ với chất liệu bền bĩ",
            //       "price":50,
            //       "colors":["red","black","green"],
            //       "count":1
            //   },
            //   {
            //     "_id": "4",
            //     "title":"Quần jean 04",
            //     "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
            //       "description": "Giảm giá 30% hôm nay",
            //       "Content":"Quần jean cao cấp, xuất xứ từ mĩ với chất liệu bền bĩ",
            //       "price":50,
            //       "colors":["red","black","green"],
            //       "count":1
            //   },
            //   {
            //     "_id": "5",
            //     "title":"Quần jean 05",
            //     "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
            //       "description": "Giảm giá 30% hôm nay",
            //       "Content":"Quần jean cao cấp, xuất xứ từ mĩ với chất liệu bền bĩ",
            //       "price":50,
            //       "colors":["red","black","green"],
            //       "count":1
            //   },
            //   {
            //     "_id": "6",
            //     "title":"Quần jean 06",
            //     "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
            //       "description": "Giảm giá 30% hôm nay",
            //       "Content":"Quần jean cao cấp, xuất xứ từ mĩ với chất liệu bền bĩ",
            //       "price":50,
            //       "colors":["red","black","green"],
            //       "count":1
            //   },
            {
              "_id": "1",
              "title": "Áo len nam",
              "src": "https://media.canifa.com/catalog/product/cache_generated/500x/8te20w003-so079-m-1-.jpg",
              "description": "Hàng Mới Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 23,
              "colors":["red","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "2",
              "title": "Áo len nam cổ cao kéo khoá",
              "src": "https://media.canifa.com/catalog/product/cache_generated/500x/8tc19w002-sa314-l-4.jpg",
              "description": "Hàng Mới Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 19,
              "colors":["red","crimson","teal"],
              "count": 1
          },
          {
              "_id": "3",
              "title": "Áo len nam dệt phối màu",
              "src": "https://media.canifa.com/catalog/product/cache_generated/500x/8te20w021-sb866-m-1-.jpg",
              "description": "Hàng Mới Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 50,
              "colors":["lightblue","white","crimson","teal"],
              "count": 1
          },
          {
              "_id": "4",
              "title": "Sản Phẩm 04",
              "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
              "description": "Hàng Mới Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 15,
              "colors":["orange","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "5",
              "title": "Sản Phẩm 05",
              "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
              "description": "Hàng Mới Nhập Từ Quãng Châu",
              "Content": "Giảm Giá 30% Trong Hôm Nay",
              "price": 10,
              "colors":["orange","black","crimson","teal"],
              "count": 1
          },
          {
              "_id": "6",
              "title": "Sản Phẩm 06",
              "src": "https://cdn.hoang-phuc.com/media/catalog/product/cache/911a4dad289f521f5a511212882e4276/i/f/if20-35101black-1_1.jpg",
              "description": "Hàng Mới Nhập Từ Quãng Châu",
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


