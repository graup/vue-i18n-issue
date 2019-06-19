import { configure, addParameters, addDecorator } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

function loadStories() {
  require('../src/stories/index');
}

addParameters({
  backgrounds: [
    { name: 'light', value: '#fafafa' },
    { name: 'dark', value: '#222222' },
  ],
});

addDecorator(() => ({
  template:
    '<div style="padding: 20px;"><story/></div>',
  }
));
addDecorator(withKnobs);
configure(loadStories, module);
