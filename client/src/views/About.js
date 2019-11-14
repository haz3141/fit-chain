import React, { Fragment } from 'react';

import './About.css';

import { Typography, Button, Box, Link } from '@material-ui/core';
// , Paper

import blockLogo from '../images/blocklogo.png';


function About() {
	const styleObj = {
		background: '#3f51b5',
		fontSize: '1rem',
		color: '#ffffff',
		textAlign: 'center'
	};
	const logo1 = blockLogo;

	// className={classes.root}
	return (
		<Fragment>
			<header className="v-header container">
				<div className="fullscreen-video-wrap image" />

				<div className="header-overlay" />
				<Box mx="auto" className="header-content">
					{/* <div className="header-content"> */}
					{/* <Paper > */}
					<Typography variant="h3" component="h3">
						Welcome to FitChain!
					</Typography>
					<img src={logo1} alt="Block Logo" width={'9%'} height={'9%'} mode="fit" />
					<Typography component="p">Confirm your creations with FitChain. Encourage More</Typography>
					{/* </Paper> */}

					<Button href="#jumpFooterTag" style={styleObj}>
						Read More
					</Button>
					{/* </div> */}
				</Box>
			</header>

			<section className="section section-a">
				<div className="container">
					<Typography variant="h5" component="h4">
						Record your custom activities, strength, cardio, or calorie
					</Typography>
					<img src={logo1} alt="Block Logo" width={'9%'} height={'9%'} mode="fit" />
					<Typography component="p">Confirm your creations with FitChain. Encourage More</Typography>
					<Link href="/signup" variant="h6" color="primary">
						{"Don't have an account? Sign Up"}
					</Link>
				</div>
			</section>

			<section id="jumpFooterTag" className="section section-b">
				<div className="container">
					<Typography variant="h4" component="h4">
						Post to community
					</Typography>
					<img src={logo1} alt="Block Logo" width={'9%'} height={'9%'} mode="fit" />
					<Typography component="p">Confirm your creations with FitChain. Encourage More</Typography>
				</div>
			</section>
		</Fragment>
	);
}

export default About;
