import { Component } from "react";
import Layout from "../shared/Layout";
import { LOAD_TECH_CATEGORY } from "../Graphql/queries/productsQueries";
import Products from "../shared/Products";

class TechCategory extends Component {
  render() {
    return (
      <Layout>
        <Products query={LOAD_TECH_CATEGORY} category="Tech" />
      </Layout>
    );
  }
}

export default TechCategory;
