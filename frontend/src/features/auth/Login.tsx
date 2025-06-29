import { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Container,
  Stack,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {

      const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { access_token } = res.data;
      localStorage.setItem('access_token', access_token);

      //redirect
      window.location.href = '/admin';
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.detail || 'Login failed');
    }
  };

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
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField fullWidth margin="normal" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <Stack spacing={2} mt={2}>
              <Button type="submit" variant="contained" fullWidth>
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
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
