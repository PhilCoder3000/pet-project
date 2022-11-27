import React from 'react';
import { NavBar } from 'widgets/NavBar';

interface AboutPageProps {
  uuid?: string;
}

export function AboutPage({ uuid }: AboutPageProps) {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default AboutPage;
