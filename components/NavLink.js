import styledComponents from "styled-components";

export const NavLink = styledComponents.a`
   
text-decoration: none;
color: ${props => props.color};
padding: 1rem;
cursor: pointer;
&:hover {
    background-color: black;
    color: white;
   }
`;


