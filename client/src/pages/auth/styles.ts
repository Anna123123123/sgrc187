import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: flex;
  height: 100%;
`

export const ColumnStyled = styled.div`
    flex: none;
    width: 50%;
    &:nth-child(1) {
        background: ${(props) => props.theme.colors.column};
  }
`

export const FullHeightStyled = styled.div`
    min-height: 100vh;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CenterStyled = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
`

export const ContainerStyled = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
`

export const FormWrapperStyled = styled.div`
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
`

export const ButtonStyled = styled.button`
    color:${(props) => props.theme.colors.text};
    margin: 10px 0;
    border-color: #41b883;
    background: #41b883;
    font-weight: 700;
    border: 1px solid transparent;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    min-height: 44px;
    padding: 8px 22px 8px 22px;
    height: 38px;
    line-height: 1.1;
    font-size: .95rem;
    font-family: Roboto,sans-serif;
    transition: all .3s;
    &:hover{
        box-shadow: 0 14px 26px -12px rgba(65,184,131,.42),0 4px 23px 0 rgba(0,0,0,.12),0 8px 10px -5px rgba(65,184,131,.2)!important;
    }
`


export const TextCenterStyled = styled.div`
width: 100%;
max-width: 100%;
margin: 0 auto;
`
