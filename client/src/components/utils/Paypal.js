import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            
            console.log("The payment was succeeded!", payment);
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
            this.props.onSuccess(payment);
        
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close paypal closeup..
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.toPay; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: 'AelMA7rUdxce2INjEX1y9KQ47L4J8Idv7rIROe3if2vnMqsIkIz5FFUvA5g-cZiRCnRl3X2EAZljDxWw',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
       
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/


        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{ 
                    size:'large',
                    color:'blue',
                    shape: 'rect',
                    label: 'checkout'
                }}
                 />
        );
    }
}