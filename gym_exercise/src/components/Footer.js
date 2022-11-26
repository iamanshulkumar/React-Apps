import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
		<Box mt="80px" bgcolor="#fff3f4">
			<Stack gap="40px" sx={{ alignItems: 'center' }} px="40px" pt="24px" flexWrap="wrap">
				<img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
				<Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} pb="40px" mt="20px" textAlign="center">
					Made with ❤️ by Anshul Kumar 
				</Typography>
			</Stack>
		</Box>
	);


export default Footer;