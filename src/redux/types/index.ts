export interface ProductType {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
}

export interface ProductsType {
	data: Array<ProductType>;
}

export interface IsLoadingType {
	isLoading: boolean;
}

export interface MessageType {
	text: string;
	level: string;
}
