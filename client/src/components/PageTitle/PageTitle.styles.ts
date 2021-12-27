import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsX } from 'react-icons/bs'

export const MenuToggleEqually = styled(AiOutlineMenu)`
  height: 25px;
  width: 25px;
  color: ${(props) => props.theme.colors.text};
  stroke-width: 1.6px;
  transition: all 0.3s;
  vertical-align: -0.125em;
  transform: rotate(360deg);
`
export const MenuToggleCross = styled(BsX)`
  height: 25px;
  width: 25px;
  color: ${(props) => props.theme.colors.text};
  stroke-width: 1.6px;
  transition: all 0.3s;
  vertical-align: -0.125em;
  transform: rotate(360deg);
`
