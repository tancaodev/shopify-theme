document.addEventListener('DOMContentLoaded', () => {
	const inputDiscount = document.querySelector('.discount-code_apply input');
	const applyDiscountBtn = document.querySelector(
		'.discount-code_apply button'
	);

	applyDiscountBtn.addEventListener('click', async (event) => {
		event.preventDefault();

		const discount = inputDiscount.value.trim();

		if (discount) {
			const stagingUrl =
				window.origin + `/discount/${discount}?redirect=/cart`;

			window.location.href = stagingUrl;
		} else {
			alert('Please enter a discount code');
		}
	});
});

// Clear discount 
// const stagingUrl = window.origin + '/discount/CLEAR?redirect=/account/logout';
// window.location.href = stagingUrl;
