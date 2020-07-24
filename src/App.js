import React, { useState, useEffect } from "react";
import Home from './Components/Home'
import Form from './Components/Form'
import Order from './Components/Order'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './Validation/formSchema'
import { Route, Switch } from 'react-router-dom'



//initial states

const initialFormValues = {
  name: '',
  address: '',
  size: '',
  email: '',
  special: '',
  toppings: {
    pineapple: false,
    bacon: false,
    Cheese: false,
    peppers: false
  }
}

const initialFormErrors = {
  name: '',
  size: '',
  address: '',
  email: '',
}

const initialOrders = []
const initialDisabled = true

const App = () => {

  //SLICE OF PIZZA STATE ROFL
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //API STUFF

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        setOrders([res.data, ...orders])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  //FIX DAT FORM YO
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      address: formValues.address.trim(),
      size: formValues.size.trim(),
      email: formValues.email.trim(),
      special: formValues.special.trim(),
      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top])
    }
    postNewOrder(newOrder)
  }

  //effects

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])






  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/pizza'>
          <Form
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>


      {orders.map(order => {
        return (
          <Order key={order.id} information={order} />
        )
      })}

    </>
  );
};
export default App;
