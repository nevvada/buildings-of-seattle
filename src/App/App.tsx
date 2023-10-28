import React from 'react';

import Home from '../pages/home/Home';
import ArchitecturalStyle from '../pages/architecturalStyle/ArchitecturalStyle';

import { architecturalStyles } from '../data/architecturalStyles';

import './app.scss';

function renderArchitecturalStyles() {
  return architecturalStyles.map((styleData) => (
    <ArchitecturalStyle key={styleData.id} {...styleData} />
  ));
}

export default function App() {
  return (
    <main>
      <Home />
      {renderArchitecturalStyles()}
    </main>
  )
}
