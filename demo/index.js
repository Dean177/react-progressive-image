import React from 'react';
import { render } from 'react-dom';
import ProgressiveImage from '../progressive-image';

render(
  <ProgressiveImage placeholderSrc="./assets/test-image-small.jpg"
                    src="./assets/test-image-large.jpg"
                    width="64em" />,
  document.getElementById('root')
);
