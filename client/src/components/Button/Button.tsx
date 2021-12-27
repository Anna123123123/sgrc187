import { FC, ReactNode } from 'react';

import { ButtonStyled } from './style';

type Props = {
  styles?: string;
  onClick(arg?: any): void;
  children?: ReactNode;
  title?: string;
};

// interface ButtonProps {
//     size?: 'small' | 'medium' | 'large';
//     inverted?: boolean;
//     raised?: boolean;
//   }

const Button: FC<Props> = ({ styles, onClick, children, title }) => {
  return (
    <ButtonStyled className={styles} onClick={(arg) => onClick(arg)}>
      {children}
      <p>{title}</p>
    </ButtonStyled>
  );
};

export default Button;
