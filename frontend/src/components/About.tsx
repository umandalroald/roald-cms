import React from 'react';
import { Box, Typography, Container, Grid, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const About = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        px: 2,
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} column={{ xs: 3, sm: 6, md: 12 }}>
          {/* Left: About Text */}
          <Grid item xs={3} sm={6} md={12}>
            <Typography variant="h4" gutterBottom>About</Typography>
            <Typography variant="body1" color="text.secondary">
              <span>
                I'm a passionate software engineer with extensive experience in both hands-on development and technical leadership. My journey spans from writing clean, efficient code to leading technical support teams and driving innovation in AI research.

                I believe in the power of technology to solve real-world problems and am constantly exploring new frontiers, particularly in artificial intelligence and machine learning applications.

                When I'm not coding or researching, you'll find me mentoring junior developers, contributing to open-source projects, or experimenting with the latest AI tools and frameworks.
              </span>
            </Typography>
          </Grid>
          {/* Right: Skills Grid */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12} sm={6} key="pl">
                <Item>
                  <Typography gutterBottom variant="h6" component="div">Programming Languages</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Python, JavaScript, Java, Go</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} key="ml">
                <Item>
                  <Typography gutterBottom variant="h6" component="div">AI/ML Frameworks</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>PyTorch, TensorFlow, Scikit-learn</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} key="cloud">
                <Item>
                  <Typography gutterBottom variant="h6" component="div">Cloud Platforms</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>AWS, Azure, Google Cloud</Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} key="leadership">
                <Item>
                  <Typography gutterBottom variant="h6" component="div">Leadership</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Team Management, Strategy, Mentoring</Typography>
                </Item>
              </Grid>
            </Grid>
           </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
