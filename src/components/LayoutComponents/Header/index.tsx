import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks';
import { setMessage } from '../../../redux/action-creators/GeneralActionCreators';
import Cart from '../../Icons/Cart';
import Contact from '../../Icons/Contact';
import Heart from '../../Icons/Heart';
import Logo from '../../Icons/Logo';
import { Facebook, Twitter, Instagram, YouTube } from '../../Icons/Social';
import User from '../../Icons/User';

const Header = () => {
	const geoLocationAPI = navigator.geolocation;
	const dispatch = useAppDispatch();

	const cart = localStorage.getItem('cart')
		? localStorage.getItem('cart')?.split(',')
		: [];
	const wishlist = localStorage.getItem('wishlist')
		? localStorage.getItem('wishlist')?.split(',')
		: [];

	const handleGetUserCoordinates = () => {
		if (!geoLocationAPI) {
			dispatch(
				setMessage({
					text: 'Geolocation API is not available in your browser!',
					level: 'danger',
				}) as any
			);
		} else {
			geoLocationAPI.getCurrentPosition(
				async (position) => {
					const { coords } = position;

					dispatch(
						setMessage({
							text: `User Location: ${coords.latitude}, ${coords.longitude}`,
							level: 'success',
						}) as any
					);
				},
				(error) => {
					console.log(error);
					dispatch(
						setMessage({
							text: 'Something went wrong getting your position!',
							level: 'danger',
						}) as any
					);
				}
			);
		}
	};

	return (
		<div className='row mt-4 mb-5 px-5'>
			<div className='col-md-12 px-5'>
				<div className='container-fluid'>
					<div className='row d-flex justify-content-between'>
						<div className='col-md-3 my-auto font-dm-sans'>
							<Contact
								width='22'
								height='22'
								viewBox='0 0 22 22'
								color='black'
							/>{' '}
							+971 52 722 0861
						</div>
						<div className='col-md-5 d-flex justify-content-center'>
							<Logo color='black' />
						</div>
						<div className='col-md-4 my-auto d-flex justify-content-end'>
							<div className='row d-flex justify-content-around'>
								<div className='col-md-2'>
									<Facebook />
								</div>
								<div className='col-md-2'>
									<Twitter />
								</div>
								<div className='col-md-2'>
									<Instagram />
								</div>
								<div className='col-md-2'>
									<YouTube />
								</div>
							</div>
						</div>
					</div>
					<nav className='row navbar navbar-expand-lg navbar-light bg-white my-4 font-dm-sans'>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>

						<div
							className='col-md-12 d-flex justify-content-between collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='col-md-7 navbar-nav mr-auto pt-3'>
								<li className='nav-item active'>
									<a className='nav-link' href='#'>
										<b>Home</b>{' '}
										<span className='sr-only'></span>
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link disabled' href='#'>
										About
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link disabled' href='#'>
										Contact Us
									</a>
								</li>
							</ul>
							<div className='col-md-2'>
								<div className='row d-flex justify-content-end'>
									<div className='col-md-4 d-flex justify-content-end position-relative pt-3'>
										<Heart
											width='28'
											height='26'
											viewBox='0 0 28 26'
											color='black'
										/>
										&nbsp;
										{wishlist && wishlist.length > 0 ? (
											<div className='position-absolute top-0 end-0 bg-primary rounded-circle text-white'>
												&nbsp;&nbsp;
												{wishlist.length}
												&nbsp;&nbsp;
											</div>
										) : null}
									</div>
									<div className='col-md-4 d-flex justify-content-end position-relative pt-3'>
										<Cart />
										&nbsp;
										{cart && cart.length > 0 ? (
											<div className='position-absolute top-0 end-0 bg-primary rounded-circle text-white'>
												&nbsp;&nbsp;
												{cart.length}
												&nbsp;&nbsp;
											</div>
										) : null}
									</div>
									<div className='col-md-4 d-flex justify-content-end position-relative pt-3 cursor-pointer'>
										<a
											href='#'
											onClick={() =>
												handleGetUserCoordinates()
											}
										>
											<User />
										</a>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div className='container-fluid'>
					<div className='row banner my-5 d-flex justify-content-end'>
						<div className='col-md-2 align-middle my-auto'>
							<h5 className='text-muted'>Home {'>'} Shop</h5>
							<h1>Shop</h1>
						</div>
						<div className='col-md-9 bg-secondary'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
