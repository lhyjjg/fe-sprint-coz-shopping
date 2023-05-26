import { Icon } from './Icon';
import { iconNames } from './Icon';

export default {
  title: 'Atoms/Icons',
  component: Icon,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const All = () => (
  <div
    style={{ display: 'grid', gridTemplateColumns: '3rem 3rem 3rem 3rem', gridAutoRows: '3rem' }}
  >
    {iconNames.map((icon) => (
      <Icon icon={icon} key={icon} />
    ))}
  </div>
);

export const Item = (args) => <Icon {...args} />;
Item.argTypes = {
  icon: {
    options: iconNames,
    control: { type: 'select' },
  },
  size: {
    options: [16, 20, 32, 48],
    control: { type: 'radio' },
  },
};
Item.args = {
  icon: 'Menu',
  size: 32,
};
