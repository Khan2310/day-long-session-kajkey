import React, { Component } from "react";
import Button from "./button";
import CartItem from "./cartItem";
import styled from "styled-components";
import { GlobalContext } from "../stateProvider";

export default class Cart extends Component {
  render() {
    const contextValue = GlobalContext;

    const itemList = (
      <GlobalContext.Consumer>
        {context =>
          context.globalState.itemList.map((item, key) => {
            let itemString = `${item.name} price: ${item.price}`;
            return (
              <CartItem  keyp = {key} item ={itemString} method = {() => context.changeStateFn.deleteItem(context.globalState.countItem - 1, key)} title = "delete"/>
            );
          })
        }
      </GlobalContext.Consumer>
    );

    return (
      <div>
        <h2>Cart</h2>
        <GlobalContext.Consumer>
          {context => (
            <React.Fragment>
              <h4>
                Total Items :
                <span>
                  {console.log(context)} {context.globalState.countItem}
                </span>
              </h4>
              <div>{itemList}</div>
            </React.Fragment>
          )}
        </GlobalContext.Consumer>
      </div>
    );
  }
}
