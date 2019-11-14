import React, { Fragment } from 'react';

import './about.css';

import { Typography, Button, Grid, Box, Link } from '@material-ui/core';
// , Paper

import blockLogo from '../images/blocklogo.png';
import reactImage from '../images/react.png';
import nodeImage from '../images/node.png';
import mongodbImage from '../images/mongodb.png';
import materialImage from '../images/material.png';

function About() {
	const styleObj = {
		background: '#3f51b5',
		fontSize: '1rem',
		color: '#ffffff',
		textAlign: 'center',
		margin: 0
	};
	const logo1 = blockLogo;

	// className={classes.root}
	return (
		<Fragment>
			<header className="v-header container">
				<div className="fullscreen-video-wrap image" />

				<div className="header-overlay" />
				<Box mx="auto" className="header-content">
					<Typography variant="h1" component="h3">
						<img src={logo1} alt="Block Logo" width={'10%'} height={'10%'} mode="fit" />
						{'  '}
						FitChain
					</Typography>
					<Box p={1} />
					<Typography>Building Blocks to a Healthy World</Typography>

					<Button href="#jumpFooterTag" style={styleObj}>
						Read More
					</Button>
				</Box>
			</header>

			<section className="section section-a">
				<div className="container">
					<Grid>
						<Typography variant="h5" component="h4">
							Create a custom store of Exercises and Activities to share with the community
						</Typography>
						<Typography component="p">Confirm your creations with FitChain.</Typography>
						<Link href="/signup" variant="h6" color="primary">
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</div>
			</section>

			<section className="section section-b">
				<div className="container">
					<Grid container direction="row" justify="flex-end" alignItems="center">
						<Grid item xs={6}>
							<Box>
								<Typography variant="h5" component="h4">
									Record your custom activities, strength, cardio, or calorie
								</Typography>
								<img src={logo1} alt="Block Logo" width={'9%'} height={'9%'} mode="fit" />
								<Typography component="p">Confirm your creations with FitChain.</Typography>
							</Box>
						</Grid>
					</Grid>
					<Grid container direction="row" justify="flex-end" alignItems="center">
						<Grid item xs={6}>
							<Box>
								<Link href="/signup" variant="h6" color="primary">
									{"Don't have an account? Sign Up"}
								</Link>
							</Box>
						</Grid>
					</Grid>
				</div>
			</section>

			<section className="section section-a">
				<div className="container">
					<Grid container direction="row" justify="flex-start" alignItems="center">
						<Grid item xs={6}>
							<Box>
								<Typography variant="h5" component="h4">
									This app was created to help motivate users into staying active by rewarding the
									user for posting their health related activities to the
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</div>
			</section>

			<section className="section section-c">
				<div className="container">
					<Typography variant="h5" component="h4">
						Record your custom activities, strength, cardio, or calorie
					</Typography>
					{/* <img src={logo1} alt="Block Logo" width={'9%'} height={'9%'} mode="fit" /> */}
					<Typography component="p">Confirm your creations with FitChain.</Typography>
					<Link href="/signup" variant="h6" color="primary">
						{"Don't have an account? Sign Up"}
					</Link>
				</div>
			</section>

			<section className="section section-a">
				<div className="container">
					<Typography component="p">Incorporated technologies</Typography>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs>
							<Box>
								<img src={reactImage} alt="React Logo" width={'60%'} height={'60%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={materialImage} alt="Material Logo" width={'60%'} height={'60%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={logo1} alt="Block Logo" width={'40%'} height={'40%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={nodeImage} alt="Node Logo" width={'60%'} height={'60%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={mongodbImage} alt="MongoDb Logo" width={'65%'} height={'65%'} mode="fit" />
							</Box>
						</Grid>
					</Grid>
				</div>
			</section>

			<section id="jumpFooterTag" className="section section-b">
				<div className="container">
					<Typography variant="h4" component="h4">
						Post to community
					</Typography>
					<img src={logo1} alt="Block Logo" width={'4%'} height={'4%'} mode="fit" />

					<Typography gutterBottom component="p">
						Developed By:
					</Typography>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={3}>
							<Box mx="auto">
								<Typography component="p">Hazael Dominguez</Typography>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box mx="auto">
								<Typography component="p">Thomas White</Typography>
							</Box>
						</Grid>
					</Grid>
				</div>
			</section>
		</Fragment>
	);
}

export default About;
