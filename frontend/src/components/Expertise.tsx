import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Expertise = () => {
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
      {/* Right: Skills Grid */}
      <Grid size={{ xs:16, sm:12, md:6 }} sx={{ mt: 7 }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            px: 2,
          }}
          >Expertise</Typography>
         <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            px: 2,
          }}
         >Bridging the gap between technical innovation and practical leadership</Typography>
        <Grid container spacing={{ xs: 6, sm:3, md: 2 }}>
          <Grid size={{ xs:12, sm:8, md:4 }} key="maintenance">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Software Engineering
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Full-stack development with expertise in modern frameworks, microservices architecture, and scalable system design. Passionate about clean code and best practices.
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs:12, sm:8, md:4 }} key="leadership">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Technical Leadership
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Experienced in leading technical support teams, driving process improvements, and implementing strategic initiatives that enhance customer satisfaction and operational efficiency.
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs:12, sm:8, md:4 }} key="engine">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    AI & Machine Learning
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Deep expertise in AI research, model development, and practical implementation of ML solutions. Focus on natural language processing and computer vision applications.
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
        </Grid>
       </Grid>
      </Container>
    </Box>
  );
};

export default Expertise;
