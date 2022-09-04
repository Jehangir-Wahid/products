import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAppDispatch } from '../../hooks';
import { setMessage } from '../../redux/action-creators/GeneralActionCreators';
import Heart from '../Icons/Heart';

const Product: React.FC<any> = ({
	data: { id, title, price, category, description, image },
}) => {
	const dispatch = useAppDispatch();

	const handleAddToCart = () => {
		var cart = localStorage.getItem('cart')
			? localStorage.getItem('cart') + ',' + id
			: id;

		localStorage.setItem('cart', cart);

		dispatch(
			setMessage({
				text: `${title} added to cart!`,
				level: 'success',
			}) as any
		);
	};

	const handleAddToWishlist = () => {
		const wishlist = localStorage.getItem('wishlist')
			? localStorage.getItem('wishlist') + ',' + id
			: id;

		const alreadyExists = localStorage
			.getItem('wishlist')
			?.split(',')
			.filter((item: any) => item == id);

		if (alreadyExists !== undefined && alreadyExists?.length > 0) {
			dispatch(
				setMessage({
					text: `${title} is already in your wishlist`,
					level: 'warning',
				}) as any
			);
		} else {
			localStorage.setItem('wishlist', wishlist);

			dispatch(
				setMessage({
					text: `${title} added to wishlist!`,
					level: 'success',
				}) as any
			);
		}
	};

	return (
		<div className='col-md-3'>
			<div className='card mb-4 border-0 p-1'>
				<a
					href='#'
					className='position-absolute end-0'
					style={{ width: '30px' }}
					onClick={() => handleAddToWishlist()}
				>
					<Heart
						width='22'
						height='20'
						viewBox='0 0 22 20'
						color='#F86338'
					/>
				</a>
				<LazyLoadImage
					className='card-img-top'
					src={image}
					width={296}
					height={296}
					alt={title}
				/>
				<div className='card-body'>
					<p className='card-text text-center text-primary font-dm-sans'>
						{category}
					</p>
					<h4 className='card-title text-center text-truncate'>
						{title}
					</h4>
					<p className='card-text mx-auto w-50 text-truncate font-dm-sans'>
						{description}
					</p>
					<h6 className='text-center text-primary'>AED {price}</h6>
					<a
						href='#'
						className='btn btn-dark w-100'
						onClick={() => handleAddToCart()}
					>
						Add to Cart
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
