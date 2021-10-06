import StripeCheckout from "react-stripe-checkout";

function Thanhtoan() {
    const onToken = (token) => {
            console.log(token);
    };
    return(
        <div>
            <StripeCheckout
                token={onToken}
                name="Techical Add note"
                currency="Inr"
                amount=
            />
        </div>
    )
};