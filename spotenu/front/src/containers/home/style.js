import styled from 'styled-components'
import { Paper, TextField, Typography } from '@material-ui/core'

export const PageWrapper = styled.div`
    min-height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FE7E02;
    justify-content: space-between;
`
export const ContentWrapper = styled(Paper)`
    box-sizing: border-box;
    width: 30%;
    padding: 15px;
    margin: 50px 0;
    @media only screen and (max-width: 1100px){
        width: 40%;
    }
    @media only screen and (max-width: 767px){
        width: 50%;
    }
    @media only screen and (max-width: 480px){
        width: 60%;
    }
`
export const ImgWrapper = styled.img`
    width: 300px;
    height: 100px;
    display: block;
    @media only screen and (max-width: 767px){
        display: none;
    }
`
export const StyledList = styled.ul`
    list-style: none;
`
export const StyledTextField = styled(TextField)`
    width: 300px;
`
export const FormWrapper = styled.form`
    display: flex;
    justify-content: space-around;
`
export const StyledLogo = styled.img`
    width: 400px;
    height: 133px
`
export const ClickedTypog = styled(Typography)`
    &:hover {
    color: #0063a5;
    cursor: pointer
        }
`
export const AnotherFormWrapper = styled.form`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`