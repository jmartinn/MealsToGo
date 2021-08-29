import createStripe from "stripe-client";
import { host } from "../../utils/env.js";

const stripe = createStripe(
	"pk_test_51JTPKqIsqYWHmipCrV9jdwQM3u3n9Pco3tXCUkQIo5ud3HjDYsdYr77tLtR9hmHggzYtBKnDWP73Hg3Ct94PEvsQ00fQDIPGVq"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
	return fetch(`${host}/pay`, {
		body: JSON.stringify({
			token,
			name,
			amount,
		}),
		method: "POST",
	}).then((res) => {
		if (res.status > 200) {
			return Promise.reject("something went wrong processing your payment");
		}
		return res.json();
	});
};
