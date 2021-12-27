import styled from 'styled-components'

/* padding-bottom: calc(.5em - 1px);
    padding-left: calc(.75em - 1px);
    padding-right: calc(.75em - 1px);
    padding-top: calc(.5em - 1px); */

export const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
`

export const Field = styled.div`
    margin-bottom: .75rem;
`

export const Input = styled.input`
    height: 38px;
    padding-left: 38px;
    width: 100%;
    max-width: 100%;
    transition: all .3s;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 4px;
    box-shadow: none;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    position: relative;
    vertical-align: top;

    &:focus {
        outline: 0;
        outline-offset: 0;
        box-shadow: none;
    }
    `

export const Icon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 38px;
    width: 38px;
    color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;


`

export const Svg = styled.svg`
    height: 18px;
    width: 18px;
    color: red;
    transition: all .3s;
`
