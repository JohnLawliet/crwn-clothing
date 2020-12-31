import styled from 'styled-components'

const SignInSignUp = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0 auto;
    } 
`

export default SignInSignUp