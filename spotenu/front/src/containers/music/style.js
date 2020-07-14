import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'

export const PageWrapper = styled.div`
    box-sizing: border-box
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #FE7E02
`
export const ContentWrapper = styled(Paper)`
    box-sizing: border-box;
    width: 40%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 50px 0
`
export const ClickedTypog = styled(Typography)`
    text-align: center;
    &:hover {
        color: #0063a5;
        cursor: pointer
        }
`
export const StyledList = styled.ul`
    list-style: none;
`