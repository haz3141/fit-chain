import React, { Component, Fragment } from 'react';

import { Typography, Grid, Box } from '@material-ui/core';

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
				<Grid container direction="row" justify="flex-start" alignItems="flex-start">
					<Box mt={5}>
						<Typography variant="h4" gutterBottom>
							Research New Activities
						</Typography>
					</Box>
				</Grid>
				<ResearchCenter
					exercise={exercise}
					onSelect={this.handleExerciseSelect}
					category={category}
					exercises={exercises}
				/>
				<ResearchFooter category={category} muscles={muscles} onSelect={this.handleCategorySelect} />
			</Fragment>
		);
	}
}

export default Research;
