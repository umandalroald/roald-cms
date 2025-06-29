import React from 'react';
import {
    Box,
    Container,
    Paper,
    Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
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
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to OXYGEN — a modern platform built with React, MUI, and FastAPI.
            We aim to deliver high-performance, scalable applications with clean and maintainable architecture.
          </Typography>
          <Typography variant="body1" paragraph>
            This project showcases a modular, feature-based folder structure with
            responsive UI, clean code, and a backend powered by Python.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're a developer exploring best practices or a user experiencing
            the demo, we hope you find this project valuable and inspiring.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;