import { Input } from './index';

export default {
  title: 'Components/Input',
};

export const NumberInput = () => Input({ label: 'Edad', type: 'number' });

export const TextInput = () => Input({ label: 'Nombre', type: 'text' });
