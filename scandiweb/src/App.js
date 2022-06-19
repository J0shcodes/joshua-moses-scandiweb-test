import { Component } from "react";
import Layout from "./shared/Layout";
import { LOAD_ALL_CATEGORIES } from "./Graphql/queries/productsQueries";
import Products from "./shared/Products";


class App extends Component {
  render() {
    // const {loading, error, data} = useQuery(LOAD_ALL_CATEGORIES)
    return (
      <>
        <Layout>
          <Products query={LOAD_ALL_CATEGORIES} category="All" />
        </Layout>
      </>
    );
  }
}

export default App;
