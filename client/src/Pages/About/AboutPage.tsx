import React from 'react';

interface AboutPageProps {
  uuid?: string;
}

export function AboutPage({
  uuid,
}: AboutPageProps) {
  return (
    <h1>About</h1>
  );
}

export default AboutPage;