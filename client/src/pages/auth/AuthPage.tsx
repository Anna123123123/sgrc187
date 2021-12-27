import { FC, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout, signup } from '../../redux/auth/auth.action.js';
import Button from '../../components/Button/Button';

import { BsFillLockFill } from 'react-icons/bs';
import AuthField from '../../components/AuthField/AuthField';
// import SVGIcon from '../../images/845.svg';
import { FiMail } from 'react-icons/fi';
import {
  WrapperStyled,
  ColumnStyled,
  CenterStyled,
  FullHeightStyled,
  ContainerStyled,
  FormWrapperStyled,
  TextCenterStyled,
} from './styles';

interface Props {
  toggleTheme(): void;
}

export const AuthPage: FC<Props> = ({ toggleTheme }) => {
  const dispatch = useDispatch();
  //const ref = useRef<HTMLInputElement>(null);

  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // useEffect(() => {
  //   // ref.current?.focus();
  // }, []);

  // const Login = (event, mail, password) => {
  //   event.preventDefault();
  //   dispatch(login(mail, password))
  // }

  return (
    <WrapperStyled>
      <ColumnStyled>
        <FullHeightStyled>
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: 'yellow',
              borderRadius: '12px',
            }}
            onClick={toggleTheme}
          ></div>
          <CenterStyled>
            <ContainerStyled>
              <FormWrapperStyled>
                <form>
                  <AuthField
                    id='email'
                    name='email'
                    value={mail}
                    type='text'
                    autoComplete='email'
                    placeholder='Введите email'
                    onChange={(e) => setMail(e.target.value)}
                    svg={<FiMail />}
                  />

                  <AuthField
                    id='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type='password'
                    autoComplete='password'
                    placeholder='Введите пароль'
                    svg={<BsFillLockFill />}
                  />
                  <Button onClick={() => dispatch(login(mail, password))}>
                    Войти
                  </Button>

                  <Button onClick={() => dispatch(signup(mail, password))}>
                    Зарегистироваться
                  </Button>
                </form>
              </FormWrapperStyled>
            </ContainerStyled>
          </CenterStyled>
        </FullHeightStyled>
      </ColumnStyled>

      <ColumnStyled>
        <FullHeightStyled>
          <CenterStyled>
            <TextCenterStyled>
              <h1 style={{ textAlign: 'center' }}>
                SGRC система для выполнения требований ФЗ-187
              </h1>
            </TextCenterStyled>
          </CenterStyled>
        </FullHeightStyled>
      </ColumnStyled>
    </WrapperStyled>
  );
};
