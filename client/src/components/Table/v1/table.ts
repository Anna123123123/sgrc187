import styled from 'styled-components'


export const TableWrapperSC = styled.div`

`

/* Top Table*/

export const TableTopSC = styled.div`
    margin-bottom: 1.5rem;
    padding: 8px 10px;
`

/* Container Table*/

export const TableContainerSC = styled.div`
  border: red
`

export const TableDataSC = styled.table`
    border: 1px solid ${(props) => props.theme.colors.text};;
    border-collapse: collapse;
    border-radius: .75rem;
    max-width: 100%;
    width: 100%;
    border-spacing: 0px;
`

export const TableDataTheadSC = styled.thead`
`

export const TableDataTbodySC = styled.tbody`
`

/* Bottom Table*/
export const TableBottomSC = styled.div`
`
