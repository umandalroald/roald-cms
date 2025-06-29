import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Container,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

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

          <Stack spacing={2} mt={2}>
            <Button variant="contained" fullWidth>
              Sign In
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
