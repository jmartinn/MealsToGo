import createStripe from "stripe-client";

const stripe = createStripe(
	"pk_test_51JTPKqIsqYWHmipCrV9jdwQM3u3n9Pco3tXCUkQIo5ud3HjDYsdYr77tLtR9hmHggzYtBKnDWP73Hg3Ct94PEvsQ00fQDIPGVq"
);

export const cardTokenRequest = () => {
	stripe.createToken({ card })
}
