import styledComponents from "styled-components";
import { PlaylistAddons } from "./PlaylistAddons";

export const Card = {}

Card.Body = styledComponents.div`

position: relative;
margin: 10px;
width:  ${props => props.width};
height: ${props => props.height};
display:flex;
flex-direction:column;
align-items: center;
border: 0.2px solid gray;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
&:hover ${PlaylistAddons} {
   display: flex;
  }
`;


Card.Image = styledComponents.img`
   
width:  ${props => props.width};
height: ${props => props.height};
`;

Card.Title = styledComponents.h3`
   
 margin-left: 7px;
 margin-right 7px;
`;


