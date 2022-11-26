import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
			<Typography variant="h3" mb={5} fontWeight={700} color="#000">
				Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
			</Typography>
			<Stack direction="row" sx={{ p: '2', position: 'relative' }}>
				{targetMuscleExercises.length  !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} />	: <Loader />}
			</Stack>
			<Typography variant="h3" mb={5} mt={10} fontWeight={700}>
				Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
			</Typography>
			<Stack direction="row" sx={{ p: '2', position: 'relative' }}>
				{equipmentExercises.length  !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;