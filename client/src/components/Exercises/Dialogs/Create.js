import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import { Add } from '@material-ui/icons/Add';
import AddIcon from '@material-ui/icons/Add';

// import CreateDialog from '../Exercises/Dialogs'

// export default (props) => (
export default class extends Component {
state = {
	open: false
}

handleToggle = () => {
	this.setState({
		open: !this.state.open
	})
}

	render() {
		const { open } = this.state

		return ( <Fragment>
			<Button variant="fab" mini onClick={this.handleToggle}>
				<AddIcon />
			</Button>
			<Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">
					Create a New Exercise
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please build your Workout in the form below 
					</DialogContentText>
					<form>
					</form>
				</DialogContent>
				<DialogActions>
					<Button color="primary" variant="contained">
						Create Workout
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
		)
	}
}

// export default Create;


// <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
