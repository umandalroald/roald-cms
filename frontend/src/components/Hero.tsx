import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
//         backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         backgroundRepeat: "no-repeat",
        bgcolor: '#f9fafb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Blog
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is a modern, full-stack blog built with FastAPI and React. Explore articles, share your thoughts, and enjoy the clean user experience.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
