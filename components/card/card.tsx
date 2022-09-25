import * as Styled from './card.styles';
import type { Props } from './card.types';

export const Card = ({ url, title, children }: Props) => (
  <Styled.Card href={url}>
    <Styled.CardTitle>{title} &rarr;</Styled.CardTitle>
    <Styled.CardContent>{children}</Styled.CardContent>
  </Styled.Card>
);
