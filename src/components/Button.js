import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
foont-size: 1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props => (props.cart ? "var(--mainGreen)" : "var(--lightBlue)")};
color: ${props => (props.cart ? "var(--mainGreen)" : "var(--lightBlue)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--mainBlue);
    background:${props => (props.cart ? "var(--mainBlue)" : "var(--lightBlue)")};
    color:(--mainWhite);
}
&:focus{
    outline:none;
}
`;