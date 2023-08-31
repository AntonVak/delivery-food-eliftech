import {  CardWrapper } from "./CardWrap.styled";

const CardWrap = (props) => {
    return (
        <CardWrapper>
            {props.children}
        </CardWrapper>
    )
}

export default CardWrap;