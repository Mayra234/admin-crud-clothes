import { useNavigate } from './utils/useNavigate';
import { mounted } from './utils/mounted';

export const App = () => {
  const { navigate } = useNavigate();

  mounted(() => {
    navigate('/clothes');
  });

  return '';
};
