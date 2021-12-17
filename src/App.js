import React, {useState, useEffect} from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import PizzaForm from "./components/PizzaForm";
import pizzaSchema from "./Validation/pizzaSchema";
import Orders from "./components/orders";
import Styled from 'styled-components';

  const initialForm = {
    'name-input': '',
    'size-dropdown': null,
    'pepperoni': false,
    'anchovies': false,
    'fetaCheese': false,
    'blackOlives': false,
    'special-text': '',
  }

  const initialErrors = {
    name: '',
    size: '',
  }

  const initialOrders = [];
  const initialDisable = true;

  const Header = Styled.header`
  
  `
  const HeaderH1 = Styled.h1`
  
  `
  const Headerp = Styled.p`
  
  `
  const Nav = Styled.nav`
  
  `
  const NavButton = Styled.a`
  
  `

  const FormHeader = Styled.header`
  
  `
  const FormH1 = Styled.h1`
  
  `
  const FormP = Styled.p`
  
  `
  const OrderDiv = Styled.div`
  
  `
const App = () => {
  const [formValues, setFormValues] = useState(initialForm)
  const [orders, setOrders] = useState(initialOrders)
  const [disabled, setDisabled] = useState(initialDisable)
  const [formErrors, setFormErrors] = useState(initialErrors)

  const postOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(resp => {
        setOrders([ resp.data, ...orders ]);
      }).catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialForm)
      })
  }

  const validate = (name, value) => {
    yup.reach(pizzaSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  

  const formSubmit = () => {
    const newOrder = {
      'name-input': formValues['name-input'].trim(),
      'size-dropdown': formValues['size-dropdown'],
      'special-text': formValues['special-text'],
      toppings: [
        'pepperoni', 
        'anchovies', 
        'fetaCheese', 
        'blackOlives',
      ]
      .filter(topping => !!formValues[topping]),
    }
    postOrder(newOrder);
  }

  useEffect(() => {
    pizzaSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <Route exact path='/'>
      <Header>
        <HeaderH1>Bloomer's Respectable Pizza Establishment</HeaderH1>
        <Headerp>Delivering decent, hard-working, American pizza to your door since 2 days ago.</Headerp>
        <Nav>
          <Link to={`/pizza`}>
            <NavButton id='order-pizza'>Order the Pizza Now</NavButton>
          </Link>
          <NavButton id='random-pizza'>Add Random Pizza</NavButton>
          <NavButton id='pizza-list'>List of Pre-built Pizzas</NavButton>
          <Link to={'/complaint'}>
            <NavButton id='complaint'>File a Complaint</NavButton>
          </Link>
        </Nav>
      </Header>
      {/* main body of code including current order here */}
      </Route>
      <Route path='/pizza'>
        <FormHeader>
          <FormH1>Bloomer's Respectable Pizza Establishment</FormH1>
          <FormP>Delivering decent, hard-working, American pizza to your door since 2 days ago.</FormP>
        </FormHeader>
        {<PizzaForm
          disabled={disabled} 
          change={inputChange}
          submit={formSubmit}
          values={formValues}
          errors={formErrors}
         />}
      </Route>

      <Route path='/complaint'>

      </Route>
      <OrderDiv>
        <Orders orders={orders}/>
      </OrderDiv>
    </div>
  );
};
export default App;
