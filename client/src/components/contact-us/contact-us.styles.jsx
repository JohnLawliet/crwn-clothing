import styled from 'styled-components'

export const Title = styled.h1`
    margin: 20px 0 10px;
`

export const ContactBody = styled.div`
    padding: 10px;
    width: 100%;
`

export const Textarea = styled.textarea`
    background-color: white;
    color: grey;
    font-size: 14px;
    display: block;
    width: 100%;
    height: 10vh;
    border: 1px ridge grey;
    padding: 10px 10px 10px 5px;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 800px) {
        height: 15vh;
        margin: 10px 0;
        padding: 5px;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        justify-content: space-between;
        flex-direction: unset;
    }

    @media screen and (max-width: 426px) {
        justify-content: unset;
        flex-direction: column;
    } 
`