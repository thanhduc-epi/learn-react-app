import React, { Component } from "react";
import "./App.css";
import NavBar from "./navbar";
import Counters from "./counters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 10 },
        { id: 2, value: 20 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  totalCounters = () => {
    return this.state.counters.filter((c) => c.value > 0).length;
  };

  handleIncrement = (counter) => {
    // const counters = this.state.counters;
    // counters.forEach((element) => {
    //   if (element.id === counter.id) {
    //     element.value += 1;
    //   }
    // });
    // this.setState({ counters });c

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete(counterId) {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.totalCounters()} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
