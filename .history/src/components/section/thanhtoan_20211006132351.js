import StripeCheckout from "react-stripe-checkout";

function Thanhtoan() {
    const onToken = (token) => {
            console.log(token);
    };
    return(
        <div>
            <StripeCheckout
                token=Ơ
            />
        </div>
    )
};