import { FC, ReactNode } from 'react';
import { Field, Input, Wrapper, Icon, Svg } from './style';

/*
type ColumnProps = React.PropsWithChildren<{
  text: string
  }>
  type ColumnProps = {
  text: string;
  } & {
  children?: React.ReactNode;
  }
  */
type FieldProps = {
  id: string;
  name: string;
  value: string;
  type: string;
  svg?: any;
  placeholder: string;
  autoComplete: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  children?: ReactNode;
};

//class React.Component<P = {}, S = {}, SS = any>
// App: FC = ({children})
// Card = ({ text }: CardProps) => {

// const AddNewItem = (props: AddNewItemProps) => {
//const { onAdd, toggleButtonText, dark } = props;
const AuthField: FC<FieldProps> = ({
  id,
  name,
  value,
  type,
  placeholder,
  onChange,
  autoComplete,
  children,
  svg,
  ...props
}) => {
  return (
    <Wrapper>
      <Field>
        <Input
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e)}
        />
        {children}
        <Icon>{svg}</Icon>
      </Field>
    </Wrapper>
  );
};

export default AuthField;
