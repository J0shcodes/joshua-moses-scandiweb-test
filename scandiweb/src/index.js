import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import ClothesCategory from "./pages/Clothes";
import TechCategory from "./pages/Tech";
import Cart from "./pages/Cart";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
} from "@apollo/client";

const link = from([new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clothes" element={<ClothesCategory />} />
        <Route path="/tech" element={<TechCategory />} />
        <Route path="/my_cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
  // </React.StrictMode>,
);