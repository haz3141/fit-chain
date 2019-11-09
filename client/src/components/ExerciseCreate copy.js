import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

// import { getEnabledCategories } from 'trace_events';
// import FormHelperText from '@material-ui/core/FormHelperText';

useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

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

	render() {
		const { open, exercise: { title, description, muscles } } = this.state,
			{ muscles: categories } = this.props;

		const classes = this.useStyles();
		return (
			<Fragment>
				<Button color="inherit" variant="fab" mini onClick={this.handleToggle}>
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
							/>
							<br />	
							<FormControl className={classes.FormControl}>
								<InputLabel htmlFor="muscles">Muscles</InputLabel>
								<Select value={muscles} onChange={this.handleChange('muscles')}>
									{categories.map((category) => <MenuItem value={category}>{category}</MenuItem>)}
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
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button color="primary" variant="contained">
							Create Workout
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

export { ExerciseCreate };
