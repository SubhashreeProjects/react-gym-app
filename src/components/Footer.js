import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#f2f2f2" py="40px">
      <Stack alignItems="center" spacing={2}>
        
        <Typography variant="h5" fontWeight="bold" color="#FF2625">
          Fitness Club
        </Typography>

        <Typography variant="subtitle1" color="gray">
          Train, Sweat, Repeat 💪
        </Typography>

        <Typography variant="body2" color="gray" textAlign="center">
          © {new Date().getFullYear()} Fitness Club. All Rights Reserved.
        </Typography>

      </Stack>
    </Box>
  );
};

export default Footer;
