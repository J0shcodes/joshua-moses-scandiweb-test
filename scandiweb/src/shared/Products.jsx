import { Component } from "react";
import { ProductPage } from "../styles/productStyles";
import { Query } from "@apollo/client/react/components";

class Products extends Component {
  render() {
    return (
      <ProductPage>
        <h1>{this.props.category}</h1>
        <Query query={this.props.query}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Something went wrong</div>;
            const productsData = data.category.products;
            console.log(productsData);

            // const prices = productsData.map(({prices}) => {
            //   return prices[0];
            // })

            // const priceByCurrency = prices.find(price => price.currency.symbol === "$");

            // console.log(priceByCurrency);

            return (
              <div>
                <div className="products">
                  {productsData.map((productData) => (
                    <div className="product" key={productData.id}>
                      <img
                        src={productData.gallery[0]}
                        alt={productData.name}
                      />
                      <div className="summary">
                        <p className="name">{productData.name}</p>
                        {productData.prices.map((price) => {
                          if (price.currency.symbol === "$") {
                            return (
                              <small key={price.amount}>
                                <span>{price.currency.symbol}</span>
                                {price.amount}
                              </small>
                            );
                          }
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }}
        </Query>
      </ProductPage>
    );
  }
}

export default Products;
