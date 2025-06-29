import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Container
} from '@mui/material';

export default function Login() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f0f2f5',
      }}
    >
      <Container maxWidth="xs">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <TextField fullWidth margin="normal" label="Email" />
          <TextField fullWidth margin="normal" label="Password" type="password" />
          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign In
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
