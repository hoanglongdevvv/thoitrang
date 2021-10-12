import React, { Component } from 'react'
im
import { DataContext } from '../Context'
import '../css/Products.scss'
export class Products extends Component {

    static contextType = DataContext;

    render() {
        const [filter, setFilter] = useState('');

        const searchText = (event) => {
            setFilter(event.target.value);
        }
        let dataSeach = Dataseach.cardData.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
        });
        const { products } = this.context;
        return (

            <div id="product">


                {

                    products.map(product => (

                        {
                            dataSeach.map((item, index) => {
                                return (
                                    <div className="col-sm-4" key={item.id}>
                                        <div className="card">
                                            <img alt="..." src={item.img} className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    ))
                }


            </div>
        )
    }
}

export default Products
