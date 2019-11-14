import React, { Component, Fragment } from 'react';

// Import Local Component / layouts that exchange info
import { ResearchFooter } from './ResearchFooter';
import { ResearchCenter } from './ResearchCenter';

// Import Store
import { muscles, exercises } from '../assets/store';

class Research extends Component {
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
	};

	handleExerciseSelect = (id) => {
		this.setState(({ exercises }) => ({
			exercise: exercises.find((ex) => ex.id === id)
		}));
	};

	render() {
		const exercises = this.getExercisesByMuscles();
		const { category, exercise } = this.state;

        // console.log("Research render >  category = ", category)
		return (
			<Fragment>
				<ResearchCenter
					exercise={exercise}
					onSelect={this.handleExerciseSelect}
					category={category}
					exercises={exercises}
				/>
                <ResearchFooter 
                category={category} 
                muscles={muscles} 
                onSelect={this.handleCategorySelect} />
			</Fragment>
		);
	}
}

export default Research ;
