import { Table } from '../Table';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableHead } from '../TableHead';
import { TableHeader } from '../TableHeader';
import { TableBody } from '../TableBody';

export default {
  title: 'Components/Table',
};

export const Overview = () => `
  ${Table({
    children: `
    ${TableHead({
      children: `
        ${TableRow({
          children: `
          ${TableHeader({ children: 'Persona 1' })}
          ${TableHeader({ children: 'Persona 2' })}
          ${TableHeader({ children: 'Persona 3' })}
        `,
        })}
      `,
    })}
    ${TableBody({
      children: `
      ${TableRow({
        children: `
        ${TableCell({ children: 'Mario' })}
        ${TableCell({ children: 'Mayra' })}
        ${TableCell({ children: 'Angélica' })}
      `,
      })}
      ${TableRow({
        children: `
        ${TableCell({ children: 'Angélica' })}
        ${TableCell({ children: 'Mayra' })}
        ${TableCell({ children: 'Mario' })}
      `,
      })}
      ${TableRow({
        children: `
        ${TableCell({ children: 'Mayra' })}
        ${TableCell({ children: 'Mario' })}
        ${TableCell({ children: 'Angélica' })}
      `,
      })}
    `,
    })}
  `,
  })}
`;
