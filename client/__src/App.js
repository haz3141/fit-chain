// Import Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { Links } from './components/Links';

import { Header, Footer } from './components/Layouts';
import Exercises from './components/Exercises';
import { muscles, exercises } from './store';

import { Home } from './components/Home';
import { Landing } from './components/pages/Landing';

// , Link
import { Login } from './components/pages/Login';
import { withAuth } from './components/withAuth';
// // import SignInSide from '../../pages/SignInSide';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard/index';
// import Secret from './components/Secret';
// import { Landing } from './pages/Landing';

// import { CustomPage } from './CustomPage'
// <CustomPage />

class App extends Component {
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
	};
	handleExerciseSelected = id => {
		this.setState(({ exercises }) => ({
			exercise: exercises.find((ex) => ex.id === id)
		}));
	};

	// console.log(this.getExercisesByMuscles())
	render() {
		const exercises = this.getExercisesByMuscles();
		const { category, exercise } = this.state;

		return (
			<Router>
				<div className="App">
					<div className="container">
						<React.Fragment>
							<Header />

							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/landing" component={Landing} />
								<Route path="/exercises" render={props => (
									<React.Fragment>
										<Exercises
											exercise={exercise}
											onSelect={this.handleExerciseSelected}
											category={category}
											exercises={exercises}
										/>
									</React.Fragment>
								)} />
								<Route path="/signup" component={SignUp} />
								<Route path="/login" component={Login} />
								<Route path="/dashboard" component={withAuth(Dashboard)} />
								{/* <Exercises
								exercise={exercise}
								onSelect={this.handleExerciseSelected}
								category={category}
								exercises={exercises}
								/> */}
							</Switch>


							<Footer category={category} muscles={muscles} onSelect={this.handleCategorySelected} />
						</React.Fragment>
					</div>
				</div>
			</Router>
		);
	}
}

export { App };

/* <li>
	<Link to="/secret">Secret</Link>
</li>; 
<Route path="/secret" component={withAuth(Secret)} />
*/
