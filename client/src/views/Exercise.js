// Import React Modules
import React, { Component, Fragment } from "react";
// import { Switch, Route } from 'react-router-dom';

// Import Layouts
import { Header } from "../layouts/Header";
import { ExerciseFooter } from "../layouts/ExerciseFooter";

// Import Local Component
import { Exercises } from "../components/Exercises";

// Import Store
import { muscles, exercises } from "../assets/store";

// Instantiate Exercises
class Exercise extends Component {
  state = {
		exercises,
		exercise: {}
  };

  getExercisesByMuscles() {
		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
				const { muscles } = exercise;

				exercises[muscles] = exercises[muscles] ? [ ...exercises[muscles], exercise ] : [ exercise ];

				return exercises;
			}, {})
		);
	}
  
  handleCategorySelected = (category) => {
		this.setState({
			category
		});
  }
  
  handleExerciseSelected = id => {
		this.setState(({ exercises }) => ({
			exercise: exercises.find((ex) => ex.id === id)
		}));
  }
  
  render() {
    const exercises = this.getExercisesByMuscles();
		const { category, exercise } = this.state;

    return (
      <Fragment>
        <Header />
        <Exercises
          exercise={exercise}
          onSelect={this.handleExerciseSelected}
          category={category}
          exercises={exercises}
        />
        <ExerciseFooter category={category} muscles={muscles} onSelect={this.handleCategorySelected} />
      </Fragment>
    );
  }
}

export { Exercise };