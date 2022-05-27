import { Footer } from './index';

export default {
  title: 'Components/Footer',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Footer({
        children: '2022 © Hyper - Coderthemes.com',
        style: 'background-color: pink',
      })}
    </div>
    <br />
    <div>
      ${Footer({ children: '2022 © Hyper - Coderthemes.com' })}
    </div>
  </div>
`;
