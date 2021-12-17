import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
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

    const PizzaForm = Styled.form`
        display: flex;

    `
    const TextInput = Styled.input`
    
    `
    const CheckList = Styled.input`
    
    `
    const SubmitButton = Styled.button`
    
    `
    const ErrorDiv = Styled.div`
    
    `
    const SizeSelect = Styled.select`
    
    `
    const PizzaHeader = Styled.header`
    
    `
    return(
        <div className='pizza-holder'>
        <PizzaHeader>
            <h2>Welcome to Pizza Build Order</h2>
        </PizzaHeader>
        <PizzaForm id='pizza-form' onSubmit={onSubmit}>
            <div className='pizza-form submit'>
                <h2>Build Your Pizza Order Here!!!</h2>

                <SubmitButton id='order-button' disabled={disabled}>Add to Order</SubmitButton>

                <div className='errors'>
                    <ErrorDiv></ErrorDiv>
                    <ErrorDiv></ErrorDiv>
                    <ErrorDiv></ErrorDiv>
                    <ErrorDiv></ErrorDiv>
                    <ErrorDiv></ErrorDiv>
                    <ErrorDiv></ErrorDiv>
                </div>
            </div>
            <div className='form-group inputs'>
                <h3>Required Inputs</h3>
                    <label>Your Name:{"  "}
                        <TextInput
                        key={uuidv4()}
                        id='name-input'
                        value={values['name-input']}
                        onChange={onChange}
                        name='name-input'
                        type='text'
                        />
                    </label>

                    <label>Special Instructions:{"  "}
                        <TextInput
                        key={uuidv4()}
                        id='special-text' 
                        value={values['special-text']}
                        onChange={onChange}
                        name='special-text'
                        type='text'
                        />
                    </label>

                    <label> Size: {" "}
                        <select 
                            name='size-dropdown' 
                            onChange={onChange} 
                            value={values['size-dropdrown']}
                            id='size-dropdown'
                        > 
                            <option value={null}>- Select a Size -</option>
                            <option value='small'> Small </option>
                            <option value='medium'> Medium </option>
                            <option value='large'> Large </option>
                        </select>
                    </label>
                <div>
                <h3>Toppings Desired</h3>
                <label> Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label> Anchovies
                    <input
                        type='checkbox'
                        name='anchovies'
                        checked={values.anchovies}
                        onChange={onChange}
                    />
                </label>
                <label> Feta Cheese
                    <input
                        type='checkbox'
                        name='fetaCheese'
                        checked={values.fetaCheese}
                        onChange={onChange}
                    />
                </label>
                <label> Black Olives
                    <input
                        type='checkbox'
                        name='blackOlives'
                        checked={values.blackOlives}
                        onChange={onChange}
                    />
                </label>
                </div>
            </div>
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
        </div>
    )
}

