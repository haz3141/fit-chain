import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';

// Hit Our api route to get activty from DB
import API from '../utils/API';

const styles = (theme) => ({
	formControl: {
		minWidth: 500
	},
	selectEmpty: {
		marginTop: 2
	}
});

class DialogBox extends Component {
	state = {
		open: false,
		activity: {
			action: '',
			description: '',
			count: '',
			timestamp: Date.now()
		}
	};

	componentDidMount() {
		// API.getActivity =====((console.log(response in the API.js file) > returning a <pending> <resolved>? promise right now
		this.loadActivities()
			// .then((res) => this.setState({ activity: { action: res.data } }))
			// .catch((err) => console.log(err));
	}

	loadActivities = () => {
		API.getActivities()
	}


	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	};

	handleChange = (name) => ({ target: { value } }) => {
		this.setState({
			activity: {
				...this.state.activity,
				[name]: value
			}
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		fetch('/api/activity', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				if (res) {
					// this.props.history.push('/');
					// console.log("OnSubmit worked....")
					return res
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch((err) => {
				console.error(err);
				alert('Error Creating Activity. Please try again.');
			});
	};

	render() {
		const { open, activity: { action, description, count } } = this.state,
			{ classes } = this.props;
		const categories = [ 'Strength', 'Cardio', 'Calories' ];

		return (
			<Fragment>
				<Button color="inherit" onClick={this.handleToggle}>
					<AddIcon />
				</Button>
				<Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Create a New activity</DialogTitle>
					<DialogContent>
						<DialogContentText>Please build your Workout in the form below</DialogContentText>

						<form>
							<FormControl className={classes.FormControl}>
								<InputLabel htmlFor="action">Action</InputLabel>
								<Select value={action} onChange={this.handleChange('action')}>
									{categories.map((category) => (
										<MenuItem key={category} value={category}>
											{category}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<br />
							<TextField
								value={count}
								onChange={this.handleChange('count')}
								label="Count - #"
								margin="normal"
								className={classes.FormControl}
							/>
							<br />
							<TextField
								multiline
								rows="2"
								value={description}
								onChange={this.handleChange('description')}
								label="Description"
								margin="normal"
								className={classes.FormControl}
							/>
							<Button onClick={this.onSubmit} color="primary" variant="contained">
								Create Workout
							</Button>
						</form>
					</DialogContent>
					<DialogActions />
				</Dialog>
			</Fragment>
		);
	}
}

DialogBox.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogBox);
