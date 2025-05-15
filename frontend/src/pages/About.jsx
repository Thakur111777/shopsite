// src/pages/About.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const teamMembers = [
  {
    name: 'Prachee Kapoor',
    role: 'Team Leader',
    universityId: '2411981417',
    email: 'prachee1417.be24@chitkarauniversity.edu.in',
    imageUrl: require('./Images/2.jpeg'),
  },
  {
    name: 'Purujeet Singh Thakur',
    role: 'Team Member',
    universityId: '2411981438',
    email: 'purujeetsingh1438.be24@chitkarauniversity.edu.in',
    imageUrl: require('./Images/1.JPG'),
  },
  {
    name: 'Priya',
    role: 'Team Member',
    universityId: '2411981432',
    email: 'priya1432.be24@chitkarauniversity.edu.in',
    imageUrl: require('./Images/4.jpeg'),
  },
  {
    name: 'Rakshit Thareja',
    role: 'Team Member',
    universityId: '2411981454',
    email: 'rakshit1454.be24@chitkarauniversity.edu.in',
    imageUrl: require('./Images/3.jpeg'),
  },
];

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f4f7f6', py: 5 }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" sx={{ color: '#4d1c9c', mb: 5, fontFamily: 'Roboto, sans-serif', fontWeight: '600' }}>
          About Us
        </Typography>
        <Typography variant="body1" fontSize="1.2rem" sx={{ color: '#666', mb: 4, lineHeight: 1.6 }}>
          Welcome to Ethical Fashion — a platform built for sustainable and conscious clothing choices.
          We are committed to ethical sourcing, eco-friendly products, and transparent production practices.
        </Typography>

        <Typography variant="h4" align="center" sx={{ color: '#4d1c9c', mb: 5, fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>
          Meet Our Team
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}> {/* Adjusted the Grid item size to xs={12} sm={6} md={6} */}
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 3,
                  background: 'linear-gradient(145deg, #6a1b9a, #9c27b0)',
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '25px',  // Oval shape for the card
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  height: 'auto', // Allows the card to grow with its content
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={member.imageUrl}
                  alt={member.name}
                  sx={{
                    width: 180,
                    height: 280,
                    objectFit: 'cover', // Ensures the image fits within the oval box
                    borderRadius: '50%',  // Oval shape for the image (circle)
                    marginBottom: 3, // Space between image and text
                  }}
                />
                <CardContent sx={{ textAlign: 'center', padding: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ddd', mb: 1 }}>
                    <strong>Role:</strong> {member.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ddd', mb: 1 }}>
                    <strong>University ID:</strong> {member.universityId}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ddd', mb: 1 }}>
                    <strong>Email:</strong> {member.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
