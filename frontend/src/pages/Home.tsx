import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Expertise from '../components/Expertise';
import Article from '../components/Article';

const Home: React.FC = () => {
  return (
    <Box>
      <Hero />
      <Section><About /></Section>
      <Section><Project /></Section>
      <Section><Expertise /></Section>
      <Section><Article /></Section>
    </Box>
  );
};

export default Home;

// ⬇️ Optional helper for spacing
const Section = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ mt: 4 }}>{children}</Box>
);
