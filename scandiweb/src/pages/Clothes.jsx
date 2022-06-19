import { Component } from "react";
import Layout from "../shared/Layout";
import { LOAD_CLOTHES_CATEGORY } from "../Graphql/queries/productsQueries";
import Products from "../shared/Products";

class ClothesCategory extends Component {
  render() {
    return (
      <Layout>
        <Products query={LOAD_CLOTHES_CATEGORY} category="Clothes" />
      </Layout>
    );
  }
}

export default ClothesCategory;
