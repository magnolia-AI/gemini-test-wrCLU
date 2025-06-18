
import React from 'react';
import { Container } from '@/components/ui/container';
import { TypographyH1, TypographyP } from '@/components/ui/typography';

const AboutPage = () => {
  return (
    <Container className="py-12">
      <TypographyH1 className="text-center mb-8">About Us</TypographyH1>
      <div className="max-w-3xl mx-auto text-center">
        <TypographyP className="mb-4">
          Welcome to our website! We are dedicated to providing the best possible experience for our users.
          Our mission is to create innovative solutions that make a difference.
        </TypographyP>
        <TypographyP className="mb-4">
          Founded in [Year], we have grown from a small team to a passionate group of individuals
          committed to excellence. We believe in quality, integrity, and customer satisfaction.
        </TypographyP>
        <TypographyP>
          Thank you for visiting our About Us page. We hope you enjoy our services!
        </TypographyP>
      </div>
    </Container>
  );
};

export default AboutPage;

