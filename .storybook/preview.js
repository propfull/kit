import {
  addParameters,
} from '@storybook/svelte';

import '../src'
import '../styles/globals.css'

addParameters({
  docs: {
    iframeHeight: '100%',
  },
});
