import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({ copyright, items, products }) => (
  (items.length && products.all.length) ?
    (
      <div>
        <CartHeader />
        <AddItems />
        <CartItems products={ products } items={ items } />
        <CartFooter copyright={ copyright } />
      </div>
    ) : (
      <div>Loading...</div>
    )
)

const mapStateToProps = state => ({
  items: state.items.all,
  products: state.products
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
