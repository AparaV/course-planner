/**Copyright (c) 2017 Aparajithan Venkateswaran (ssapar@gmail.com)
 *
 * This software is released under AGPLv3. For details see LICENSE
 * that came with this software
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
