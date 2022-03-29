import React, { Component } from "react";
import Habits from "./components/habits";
import "./app.css";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits : [
      {id: 1, name: "reading", count: 0},
      {id: 2, name: "reading2", count: 0},
      {id: 3, name: "reading3", count: 0}
    ]
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }
      } else {
        return item;
      }
    })
    this.setState({ habits });
  }

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }
      } else {
        return item;
      }
    })
    this.setState({ habits });
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 }
      } else {
        return habit;
      }
    })
    this.setState({ habits });
  }

  render() {
    return (
      <>
      <Navbar 
        count={this.state.habits.filter(item => item.count > 0).length}
      />
      <Habits 
        habits={this.state.habits} 
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleDelete={this.handleDelete}
        handleAdd={this.handleAdd}
        handleReset={this.handleReset}
      />
      </>
    );
  }
}

export default App;
