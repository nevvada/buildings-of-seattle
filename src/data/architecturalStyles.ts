export type ArchitecturalStyle = {
  fontFamily: string;
  id: string;
  info: string;
  lineColor: string;
  pageColor: string;
  textColor: string;
  title: string;
};

export const architecturalStyles: ArchitecturalStyle[] = [
  {
    fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif',
    id: 'federalism',
    info: 'fedddddy',
    lineColor: '#FFF',
    pageColor: '#000080',
    textColor: '#FFF',
    title: 'Federalism',
  },
  {
    fontFamily: 'Times New Roman',
    id: 'brutalism',
    info: 'et tu brutus',
    lineColor: '#000',
    pageColor: '#D66100',
    textColor: '#000',
    title: 'Brutalism',
  },
];
