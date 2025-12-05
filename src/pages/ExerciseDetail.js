import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';

      const detailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(detailData);
    };

    fetchExerciseData();
  }, [id]);

  // ⛔ prevent destructuring before data arrives
  if (!exerciseDetail) {
    return (
      <Typography variant="h5" mt={5} textAlign="center">
        Loading exercise details...
      </Typography>
    );
  }

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <Box sx={{ mt: { lg: '80px', xs: '40px' } }} p="20px">
      <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" style={{ width: '400px', borderRadius: '20px' }} />

        <Stack gap="20px">
          <Typography variant="h3" fontWeight={700} textTransform="capitalize">
            {name}
          </Typography>

          <Typography variant="h6">
            Great for targeting your <b>{target}</b>.
          </Typography>

          <Typography variant="h6"><b>Body Part:</b> {bodyPart}</Typography>
          <Typography variant="h6"><b>Target:</b> {target}</Typography>
          <Typography variant="h6"><b>Equipment:</b> {equipment}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExerciseDetail;
