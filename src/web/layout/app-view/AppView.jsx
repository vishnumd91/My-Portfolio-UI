import React from 'react'
import { Navigation } from '../navigation';
import { About } from '../../components/about';
import { Experience } from '../../components/experience';
import { Education } from '../../components/education';
import { Skills } from '../../components/skills';

export const AppView = () => {
  return (
    <div>
      <Navigation />
      <About />
      <Experience />
      <Education />
      <Skills />
    </div>
  )
}

export default AppView