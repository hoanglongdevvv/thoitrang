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
                amount="999"
                stripeKey="pk_test_51JhSc7JMnOs2Elk8wV16r9Gtv9d2h5XshqZyVMJ9NyG8BuPn2IEijfK6F1XpTvacMJ4latVuN6h5N7lN3ASs17mu00Yfw2JxtM"
            />
        </div>
    )
};
export default Thanhtoan;