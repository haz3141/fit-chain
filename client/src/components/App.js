// Import Dependencies
import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
	state = {
		exercises
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
	handleCategorySelected = category => {
		this.setState({
			category
		})
	}

	// console.log(this.getExercisesByMuscles())
	render() {
		const exercises = this.getExercisesByMuscles();
		const { category } = this.state

		return (
			<div>
				<Fragment>
					<Header />

					<Exercises category={category} exercises={exercises} />

					<Footer category={category} muscles={muscles} onSelect={this.handleCategorySelected}/>
				</Fragment>
			</div>
		);
	}
}

export { App };

/* <li>
	<Link to="/secret">Secret</Link>
</li>; 
<Route path="/secret" component={withAuth(Secret)} />
*/
