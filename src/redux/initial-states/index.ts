export const productInitialState = {
	data: {
		id: null,
		title: '',
		price: '',
		category: '',
		description: '',
		image: '',
	},
};

export const productsInitialState = { data: [productInitialState.data].flat() };
