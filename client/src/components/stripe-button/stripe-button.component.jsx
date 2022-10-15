import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // converting dollars to cents
  const publishableKey =
    "pk_test_51Jc3s8KMoWLv2iylhiScZFPTTNaC8M9I1qlOorKN7dqIzJwAMPKeYY2mLZeZX2II27W1WATh7IN44rJHyvNSH8by00mLp9F82Z";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Huzend Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
