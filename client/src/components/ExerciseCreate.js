import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
	
const styles = (theme) => ({
	formControl: {
		minWidth: 500
	},
	selectEmpty: {
		marginTop: 2
	}
});

class ExerciseCreate extends Component {
	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: ''
		}
	};

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	};

	handleChange = (name) => ({ target: { value } }) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value
			}
		});
	};

	handleSubmit = () => {
		// TODO: validation
		const { exercise } = this.state;

		this.props.onCreate({
			...exercise,
			id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
		});

		this.setState({
			open: false,
			exercise: {
				title: '',
				description: '',
				muscles: ''
			}
		});
	};

	render() {
		const { open, exercise: { title, description, muscles } } = this.state,
			{ classes, muscles: categories } = this.props;

		// const classes = this.props;
		return (
			<Fragment>
				<Button color="inherit" onClick={this.handleToggle}>
					<AddIcon />
				</Button>
				<Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>Please build your Workout in the form below</DialogContentText>

						<form>
							<TextField
								value={title}
								onChange={this.handleChange('title')}
								label="Title"
								margin="normal"
								className={classes.FormControl}
							/>
							<br />
							<FormControl className={classes.FormControl}>
								<InputLabel htmlFor="muscles">Muscles</InputLabel>
								<Select value={muscles} onChange={this.handleChange('muscles')}>
									{categories.map((category) => (
										<MenuItem key={category} value={category}>
											{category}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<br />
							<TextField
								multiline
								rows="4"
								value={description}
								onChange={this.handleChange('description')}
								label="Description"
								margin="normal"
								className={classes.FormControl}
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleSubmit} color="primary" variant="contained">
							Create Workout
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

ExerciseCreate.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExerciseCreate);
