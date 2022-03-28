import React, { Component } from "react"
import HabitAddForm from "./habitAddForm";
import Habit from "./habit"

class Habits extends Component {
  render() {
    const { 
      habits, 
      handleIncrement, 
      handleDecrement, 
      handleDelete,
      handleAdd,
      handleReset
    } = this.props;

    return (
      <>
      <HabitAddForm onAdd={handleAdd}/>
      <ul>
        {habits.map((habit) => (
          <Habit 
            key={habit.id} 
            habit={habit} 
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button 
        className="habits-reset"
        onClick={handleReset}
      > 
        Reset
      </button>
      </>
    )
  }
}

export default Habits;