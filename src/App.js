import "./App.css";
import React from "react";
import MappedScreen from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/JSON/products.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Basket from "./Components/Basket/Basket";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Products,
      term: "",
      basket: []
    }
  }
  PlusProduct = (id, step) => {
    this.setState(({ data, basket }) => {
      const index = basket.findIndex((item) => item.id === id)
      if (index === -1) {
        const item = { ...data.find((item) => item.id === id), ...basket[index] }
        return { basket: [...basket, { ...item, total: item.discount, count: 1 }] }
      }
      if (index !== -1) {
        const index = basket.findIndex((item) => item.id === id)
        const item = { ...basket[index] }
        item.count += step
        if (item.count <= 0) {
          return {};
        }
        item.total = item.rebate * item.count
        return { basket: [...basket.slice(0, index), item, ...basket.slice(index + 1)] }
      }
      return {};
    })
  }
  onDeleteProduct = (filter) => () => {
    this.setState(({ basket }) => {
      const index = basket.findIndex((item) => item.id === filter)
      return { basket: [...basket.slice(0, index), ...basket.slice(index + 1)] }
    })
  }
  onStepProduct = (it, col) => () => {
    this.setState(({ basket }) => {
      const index = basket.findIndex((item) => item.id === it)
      if (index !== -1) {
        const index = basket.findIndex((item) => item.id === it)
        const item = { ...basket[index] }
        item.count += col
        if (item.count <= 0) {
          return {};
        }
        item.total = item.rebate * item.count
        return { basket: [...basket.slice(0, index), item, ...basket.slice(index + 1)] }
      }
      return {};
    })
  }
  // CategoryPost = (items) => {
  //   const categ = Products.filter(elem => elem.category_id === items)
  //   this.setState({ data: categ })
  render() {
    const { data, basket } = this.state;
    return (
      <Router>
        <Navbar
          onCategorySelect={this.CategoryPost}
          onFilterSeleect={this.filterPost}
          HomePost={this.HomePost}
          OnSearchSelect={this.OnSearchSelect} />
        <MappedScreen
          basket={basket}
          PlusProduct={this.PlusProduct}
          data={data}
          term={term}
        />
        <Switch>
          <Route path='/Basket'>
            <Basket
              onStepProduct={this.onStepProduct}
              onDeleteProduct={this.onDeleteProduct}
              basket={basket}
            />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
