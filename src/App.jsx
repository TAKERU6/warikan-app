import React, { Component } from "react";
import "./styles.css";
import Form from "./Form";
import Split from "./Split";

class App extends Component {
  state = {
    totalPrice: 0,
    totalPeoples: 0,
    splitPrices: 0
  };

  handleChange = (event) => this.setState({ totalPrice: event.target.value });

  handleChangeNumberOfPerson = (event) =>
    this.setState({ totalPeoples: event.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { totalPrice, totalPeoples } = this.state;
    const isValid = totalPrice === 0 || totalPeoples === 0;
    if (isValid) {
      const errorMessage =
        totalPrice === 0 ? "合計額を入力して下さい" : "人数を入力して下さい";
      return alert(errorMessage);
    }
    const splitPrice = Number(totalPrice) / Number(totalPeoples);
    this.setState({
      splitPrices: splitPrice,
      totalPrice: 0,
      totalPeoples: 0
    });
  };

  render() {
    const { totalPrice, totalPeoples, splitPrices } = this.state;
    return (
      <div>
        <h1>割り勘計算アプリ</h1>
        <Form
          totalPrice={totalPrice}
          totalPeoples={totalPeoples}
          splitPrices={splitPrices}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onChangeNumberOfPerson={this.handleChangeNumberOfPerson}
        />
        <Split
          splitPrices={splitPrices}
          totalPrice={totalPrice}
          totalPeoples={totalPeoples}
        />
      </div>
    );
  }
}

export default App;
