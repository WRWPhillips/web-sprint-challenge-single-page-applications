import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

export default function PizzaForm(props) {

    const {
        values,
        submit, 
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const PizzaForm = styled.form`
        
    `

    return(
        <PizzaForm id='pizza-form'>
            {/* 
            * name text input with id name-input
            * validation for name required, that will come later, check readme
            * dropdown for pizza size with id="size-dropdown"
            * toppings checklist, at least 4 toppings, name separately
            * text input for special instructions, id="special-instructions"
            * Add-To-Order button that has an id="order-button" and submits form, returns database record of name, size, toppings, special instructions
            * 
            */}
        </PizzaForm>
    )
}

