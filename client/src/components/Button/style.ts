import styled from 'styled-components'

//

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