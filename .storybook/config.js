import { configure, addDecorator } from '@storybook/react';
import withLocalization from '../src/common/storybook/decorators/withLocalization';
import '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';
import requireContext from 'require-context.macro';
import '../src/styles/index.scss';

const req = requireContext('../src/', true, /\.stories\.js$/);

function loadStories() {
  addDecorator(withLocalization);
  addDecorator((storyFn, context) => withConsole()(storyFn)(context));
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
