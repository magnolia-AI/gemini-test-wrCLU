
import React from 'react';
import { Container } from '@/components/ui/container';
import { TypographyH1, TypographyP } from '@/components/ui/typography';

const AboutPage = () => {
  return (
    <Container className="py-12">
      <TypographyH1 className="text-center mb-8">About Us</TypographyH1>
      <div className="space-y-6 text-lg leading-relaxed">
        <TypographyP>
          Welcome to our company! We are dedicated to providing the best service and products to our customers. Our journey began with a simple idea: to create something truly valuable and impactful.
        </TypographyP>
        <TypographyP>
          Over the years, we have grown and evolved, but our core mission remains the same: to innovate, to inspire, and to make a difference. We believe in the power of collaboration and the importance of our community.
        </TypographyP>
        <TypographyP>
          Our team is composed of passionate and talented individuals who are committed to excellence. We work tirelessly to ensure that every product and service we offer meets the highest standards of quality and reliability.
        </TypographyP>
        <TypographyP>
          Thank you for being a part of our story. We look forward to continuing to serve you and to achieving new milestones together.
        </TypographyP>
      </div>
    </Container>
  );
};

export default AboutPage;

