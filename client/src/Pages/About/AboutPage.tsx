import React from 'react';
import { NavBar } from 'widgets/NavBar';

interface AboutPageProps {
  uuid?: string;
}

export function AboutPage({ uuid }: AboutPageProps) {
  return (
    <div>
      <NavBar />
      <h1>about</h1>
    </div>
  );
}

export default AboutPage;
