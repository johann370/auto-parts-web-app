import React, { useState } from 'react'

const CheckoutPage = () => {
    const [displayBilling, setDisplayBilling] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [shippingState, setShippingState] = useState('');
    const [shippingZip, setShippingZip] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [billingState, setBillingState] = useState('');
    const [billingZip, setBillingZip] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');

    const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY']
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const years = ['22', '23', '23', '24', '25', '26', '27', '28', '29', '30']

    return (
        <div className='checkout-page'>
            <div id='customer-info' className=''>
                <h1>Personal Information</h1>
                <div id='customer-name' className='two-column'>
                    <div className='flex-column input-div'>
                        <label for='first-name'>First Name:</label>
                        <input id='first-name' placeholder='First Name' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div className='flex-column input-div'>
                        <label for='last-name'>Last Name:</label>
                        <input id='last-name' placeholder='Last Name' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    </div>
                </div>
                <div className='address three-column' >
                    <div id='shipping-address-div' className='flex-column input-div'>
                        <label for='shipping-address'>Street Address:</label>
                        <input id='shipping-address' placeholder='Shipping Address' type='text' value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)}></input>
                    </div>
                    <div className='flex-column input-div'>
                        <label for='shipping-state'>State:</label>
                        <input id='shipping-state' list='states' type='text' value={shippingState} onChange={(e) => setShippingState(e.target.value)}></input>
                        <datalist id='states'>
                            {states.map((state) => <option value={state}></option>)}
                        </datalist>
                    </div>
                    <div className='flex-column input-div'>
                        <label for='shipping-zip-code'>Zip Code:</label>
                        <input id='shipping-zip-code' placeholder='Zip Code' type='number' value={shippingZip} onChange={(e) => setShippingZip(e.target.value)}></input>
                    </div>
                </div>
                <div className=''>
                    <input type='checkbox' id='display-billing' defaultChecked={displayBilling} onChange={(e) => setDisplayBilling(e.target.checked)} ></input>
                    <label for='display-billing'>Billing address is different from shipping address</label>
                </div>
            </div>
            <div id='payment-info'>
                <h1>Payment Information</h1>
                {displayBilling && <div className='address three-column'>
                    <div id='billing-address-div' className='flex-column input-div'>
                        <label for='billing-address'>Street Address:</label>
                        <input id='billing-address' placeholder='Billing Address' type='text' value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)}></input>
                    </div>
                    <div className='flex-column input-div'>
                        <label for='billing-state'>State:</label>
                        <input id='billing-state' list='states' type='text' value={billingState} onChange={(e) => setBillingState(e.target.value)}></input>
                    </div>
                    <div className='flex-column input-div'>
                        <label for='billing-zip-code'>Zip Code:</label>
                        <input id='billing-zip-code' placeholder='Zip Code' type='text' value={billingZip} onChange={(e) => setBillingZip(e.target.value)}></input>
                    </div>
                </div>}
                <div id='card-info'>
                    <div id='card-name-div' className='flex-column input-div'>
                        <label for='card-holder-name'>Name:</label>
                        <input id='card-holder-name' placeholder='Name on card' type='text' value={cardName} onChange={(e) => setCardName(e.target.value)}></input>
                    </div>
                    <div id='card-number-div' className='two-column'>
                        <div className='flex-column input-div'>
                            <label for='card-number'>Card Number:</label>
                            <input id='card-number' placeholder='Card number' type='text' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} ></input>
                        </div>
                        <div className='flex-column input-div'>
                            <label for='cvc'>CVC:</label>
                            <input id='cvc' placeholder='CVC' type='number' value={cvc} onChange={(e) => setCVC(e.target.value)}></input>
                        </div>
                    </div>
                    <div id='expiration-date' className='two-column'>
                        <div className='flex-column input-div'>
                            <label for='expiration-month'>Month:</label>
                            <input id='expiration-month' type='number' list='months' value={expMonth} onChange={(e) => setExpMonth(e.target.value)} ></input>
                            <datalist id='months'>
                                {months.map((month) => <option value={month}></option>)}
                            </datalist>
                        </div>
                        <div className='flex-column input-div'>
                            <label for='expiration-year'>Year:</label>
                            <input id='expiration-year' type='number' list='years' value={expYear} onChange={(e) => setExpYear(e.target.value)}></input>
                            <datalist id='years'>
                                {years.map((year) => <option value={year}></option>)}
                            </datalist>
                        </div>
                    </div>
                </div>
            </div>
            <button>Check Out</button>
        </div>
    )
}

export default CheckoutPage