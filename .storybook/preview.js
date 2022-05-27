import '../src/index.css';
import '../src/assets/libs/fontawesome-free-6.1.1-web/js/all.min';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
