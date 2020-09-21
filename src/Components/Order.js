import React from 'react'

export default function Order({ information }) {
    const deliveryTime = Math.floor(Math.random()*10)+30
    if (!information) {
        return <h3>Trying to start your order</h3>
    }
    return (
        <div>
            <h2>Here's your Order {information.name}</h2>
            <p>Email:{information.email}</p>
            <p>Address:{information.address}</p>
            <p>size:{information.size}</p>
            {
                !!information.toppings && !!information.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {information.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
            <p>Your Order is Arriving in {deliveryTime} minutes</p>
        <p>This is What you asked for {information.special}</p>
        </div>
    )
}