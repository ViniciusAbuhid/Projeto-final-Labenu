import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const ComponentWrapper = styled.div`
    width: 100%;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    background-color: #0063a5;
    @media only screen and (max-width: 480px){
        justify-content: center;
    }
`
export const ImgWrapper = styled.img`
    width: 150px;
    height: 50px;
    @media only screen and (max-width: 767px){
        width: 50%;
        height: 80px;
    };
    @media only screen and (max-width: 480px){
        width: 70%;
        height: 80px;
    }
`
export const Logout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        display: none;
    }
`
export const BarWrapper = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InvisibleSpan = styled.span`
    display: none; 
    @media only screen and (max-width: 767px){
        display: inline
    }
    @media only screen and (max-width: 480px){
        display: none;
    }
`

export const StyledTextField = styled(TextField)`
    width: 300px;
    @media only screen and (max-width: 767px){
        width: 235px;
    };
`