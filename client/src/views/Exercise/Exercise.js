// Import React Modules
import React, { Component, Fragment } from "react";
// import { Switch, Route } from 'react-router-dom';

// Import Layouts
import { ExerciseHeader } from "./layouts/ExerciseHeader";
import { ExerciseFooter } from "./layouts/ExerciseFooter";

// Import Local Component
import { Exercises } from "./layouts/Exercises";

// Import Store
import { muscles, exercises } from "./assets/store";

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
  
  handleCategorySelect = (category) => {
		this.setState({
			category
		});
  }
  
  handleExerciseSelect = id => {
		this.setState(({ exercises }) => ({
			exercise: exercises.find((ex) => ex.id === id)
		}));
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [ 
        ...exercises,
        exercise
      ]
    }))
  }
  
  render() {
    const exercises = this.getExercisesByMuscles();
		const { category, exercise } = this.state;

    return (
      <Fragment>
        <ExerciseHeader 
          onExerciseCreate={this.handleExerciseCreate}
          muscles={muscles}
        />
        <Exercises
          exercise={exercise}
          onSelect={this.handleExerciseSelect}
          category={category}
          exercises={exercises}
        />
        <ExerciseFooter 
          category={category} 
          muscles={muscles} 
          onSelect={this.handleCategorySelect} 
          />
      </Fragment>
    );
  }
}

export { Exercise };