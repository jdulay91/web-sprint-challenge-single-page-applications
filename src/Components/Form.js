import React from 'react'


export default function Form(props) {
    const { values,
        inputChange,
        checkboxChange,
        submit,
        disabled,
        errors } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onCheckboxChange = e => {
        const { name, checked } = e.target
        checkboxChange(name, checked)
    }

    const onInputChange = e => {
        const { name, value } = e.target
        inputChange(name, value)
    }

    return (
        <form onSubmit={onSubmit}>
            <button disabled={disabled}>Gimme That Pizza</button>
            <div>
                <div>{errors.name}</div>
                <div>{errors.address}</div>
                <div>{errors.email}</div>
                <div>{errors.size}</div>
            </div>
            <label htmlFor='name'>Name</label>
            <input
                name='name'
                id='name'
                type='text'
                onChange={onInputChange}
                value={values.name}
            />


            <label htmlFor='address'>Address</label>
            <input
                name='address'
                id='address'
                type='text'
                onChange={onInputChange}
                value={values.address}
            />


            <label htmlFor='email'>Email</label>
            <input
                name='email'
                id='email'
                type='email'
                onChange={onInputChange}
                value={values.email}
            />


            <label htmlFor='size'>Size</label>
            <select
                onChange={onInputChange}
                value={values.size}
                name='size'
                id='size'>
                <option value=''>Select The Size</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>

            <label>pineapple
            <input
                    type='checkbox'
                    name='pineapple'
                    checked={values.toppings.pineapple === true}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>bacon
            <input
                    type='checkbox'
                    name='bacon'
                    checked={values.toppings.bacon === true}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>cheese
            <input
                    type='checkbox'
                    name='cheese'
                    checked={values.toppings.cheese === true}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>peppers
            <input
                    type='checkbox'
                    name='peppers'
                    checked={values.toppings.peppers === true}
                    onChange={onCheckboxChange}
                />

            </label>
        </form>

    )
}