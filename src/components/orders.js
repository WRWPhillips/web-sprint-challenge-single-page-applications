import react from "react";
import Styled from 'styled-components';

export default function Orders(props){
    const { orders } = props

    if(orders.length < 0){
        return (
            <p>'Field Empty, submit an order!'</p>
            )
    }

    const OrderDiv = Styled.div`
    
    `
    const OrderP = Styled.p`
    
    `


    return (
        orders.map(order =>{
            return(
                <OrderDiv>
                    <OrderP> {order['name-input']}'s Order:</OrderP>
                    <OrderP> Size: {order['size-dropdown']}</OrderP>
                    <OrderP> Toppings: {order.toppings.length > 0 ? order.toppings.join(', ') : 'none, you weirdo'}</OrderP>
                    <OrderP> Special instructions: {order['special-text'].length > 0 ? order['special-text'] : 'None'}</OrderP>
                </OrderDiv>
            )
        })
    )
}
