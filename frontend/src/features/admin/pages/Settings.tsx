import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function Settings() {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        bgcolor: '#f9fafb',
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
            Admin Settings
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
