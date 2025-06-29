import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" mt={10}>
        Admin Dashboard
      </Typography>
    </Container>
  );
}
