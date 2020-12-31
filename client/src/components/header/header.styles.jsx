// With styled components, 
// we can stick to css writing convention i.e kebab case 
// pass on props to the component for dynamic styling
// use css`` property for components that share similar styling
// in .jsx we can make a Link function as div by doing "as ='div'". THis furthur reduces code


import styled from 'styled-components'
import {Link} from 'react-router-dom'

// import {css} is for sharing same styles to multiple different components say Link and div
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

    @media screen and (max-width:800px){
        padding: 10px;
        height: 60px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width:800px){
        padding: 0;
        width: 50px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width:800px){
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    @media screen and (max-width:400px){
        padding: 10px 8px;;
    }
`;

