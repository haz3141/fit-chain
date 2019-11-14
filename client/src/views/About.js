import React, { Fragment } from 'react';

import './about.css';

import { Typography, Button, Grid, Box, Link } from '@material-ui/core';
// , Paper

import blockLogo from '../images/blocklogo.png';
import reactImage from '../images/react.png';
import nodeImage from '../images/node.png';
import mongodbImage from '../images/mongodb.png';
import materialImage from '../images/material.png';
import expressImage from '../images/express.png';

function About() {
	const styleObj = {
		background: '#3f51b5',
		fontSize: '1rem',
		color: '#ffffff',
		textAlign: 'center',
		margin: 0
	};
	const logo1 = blockLogo;
	const linkStyle = {
		color: '#ffffff'
	};

	// className={classes.root}
	return (
		<Fragment>
			<header className="v-header container">
				<div className="fullscreen-video-wrap image" />

				<div className="header-overlay" />
				<Grid container className="header-content">
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={12}>
							<Box p={2}>
								<img src={logo1} alt="Block Logo" width={'9%'} height={'9%'} mode="fit" />
							</Box>
							<Typography variant="h1" component="h3">
								FitChain
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography>Building Blocks to a Healthy World</Typography>
						</Grid>
						{/* <Grid item>
							</Grid> */}
						<Button href="#aboutFitChain" style={styleObj}>
							Read More
						</Button>
					</Grid>
					{/* <Grid container direction="column"> */}
					{/* </Grid> */}
				</Grid>
			</header>

			<section className="section section-a">
				<div className="container">
					<Grid>
						<Typography color="primary" variant="h6" component="h4">
							FitChain was created to help motivate users into staying active by rewarding the user for
							posting their health related activities to the FitChain blockchain network with a digital
							token that is distributed amongst the users of the FitChain network.
						</Typography>
					</Grid>
				</div>
			</section>

			<section className="section section-b">
				<div className="container">
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={12}>
							<Box>
								<Typography gutterBottom color="primary" variant="h3">
									Start Earning with FitChain.
								</Typography>
								<Link href="/signup" variant="h6" style={linkStyle}>
									"Don't have an account? Sign Up"
								</Link>
								<br />
								<img src={logo1} alt="Block Logo" width={'11%'} height={'11%'} mode="fit" />
								<Typography color="primary" variant="h7" component="h4">
									Keep track of common everyday health related data such as exercising or eating meals
									and receive token rewards.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</div>
			</section>

			<section className="section section-a">
				<div className="container">
					<Typography color="primary" variant="h4" component="h4">
						Built With
					</Typography>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs>
							<Box>
								<img src={logo1} alt="Block Logo" width={'45%'} height={'45%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={mongodbImage} alt="MongoDb Logo" width={'85%'} height={'85%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={expressImage} alt="express-logo" width={'75%'} height={'75%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={reactImage} alt="React Logo" width={'55%'} height={'55%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={materialImage} alt="Material Logo" width={'55%'} height={'55%'} mode="fit" />
							</Box>
						</Grid>
						<Grid item xs>
							<Box>
								<img src={nodeImage} alt="Node Logo" width={'55%'} height={'55%'} mode="fit" />
							</Box>
						</Grid>
					</Grid>
				</div>
			</section>

			<section id="aboutFitChain" className="section section-b">
				<div className="container">
					<Typography color="primary" variant="h4">
						FitChain Team
					</Typography>
					<Typography color="primary" variant="subtitle" gutterBottom component="h4">
						Developers
					</Typography>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={4}>
							<Box mx="auto">
								<Typography color="primary" component="p">
									<Link href="https://haz3141.github.io/" variant="p" color="inherit">
										Hazael Dominguez
									</Link>
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={4}>
							<Box mx="auto">
								<Typography color="primary" component="p">
									<Link
										href="https://thomas-white-ucf.github.io/Portfolio"
										variant="p"
										color="inherit"
									>
										Thomas White
									</Link>
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</div>
			</section>
		</Fragment>
	);
}

export default About;
