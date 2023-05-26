import { Star } from './atoms/Icon';
import globalToken from '../tokens/global.json';
import { styled } from 'styled-components';

const { Gray, Yellow } = globalToken;

export const Star = styled.svg`
  color: ${Gray[700].value};
`



export const BookmarkStar = ( {icon, color, ...rest} ) => {
  return (
  <Star {...rest}>
  </Star>
  );
}