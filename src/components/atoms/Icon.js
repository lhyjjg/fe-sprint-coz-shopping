import * as Icons from 'react-feather';
import globalToken from '../../tokens/global.json';
import { styled } from 'styled-components';

const { Accent } = globalToken;

export const iconNames = [
  'Menu',
  'Star',
  'Gift',
  'X',
]

export const Icon = ( {icon, color, size, ...rest} ) => {
  const FeatherIcon = styled(Icons[icon])`
    color: ${(props) => props.color || Accent.value};
  `;
  return <FeatherIcon size={size} color={color} {...rest} />;
}