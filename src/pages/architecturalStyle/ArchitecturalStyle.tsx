import React from 'react';

import { ArchitecturalStyle } from '../../data/architecturalStyles';

import './architecturalStyle.scss';

type Props = ArchitecturalStyle;

export default function ArchitecturalStyle({ fontFamily, id, info, lineColor, pageColor, title }: Props) {
  return (
    <section
      className="architectural-style-page"
      id={id}
      style={{ backgroundColor: pageColor, fontFamily }}
    >
      <h2 className="title">{title}</h2>
      <p>{info}</p>
      <div className="center-line" style={{ backgroundColor: lineColor }} />
    </section>
  )
}