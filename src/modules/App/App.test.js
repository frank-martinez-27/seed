import React from 'react';
import { mountWithIntl } from '../../common/helpers/testHelpers/intl-enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<Application />', () => {
  it('renders without crashing', () => {
    mountWithIntl(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
