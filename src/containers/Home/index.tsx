import React, { useState, useEffect } from 'react';
import { setIsLoading } from '../../redux/action-creators/GeneralActionCreators';
import { getAllProducts } from '../../redux/action-creators/ProductActionCreators';
import { ProductsType, ProductType } from '../../redux/types';
import Spinner from '../../components/LayoutComponents/Spinner';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Product from '../../components/Product';
import NoRecods from '../../components/LayoutComponents/NoRecords';
import qs from 'qs';
import { createBrowserHistory } from 'history';

function Products() {
	const [category, setCategory] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(8);

	const stateProducts: ProductsType = useAppSelector(
		(state) => state.productReducer
	);

	const isLoading = useAppSelector((state) => state.generalReducer.isLoading);

	const indexOfLastCustomer = currentPage * productsPerPage;
	const indexOfFirstCustomer = indexOfLastCustomer - productsPerPage;
	const categories = stateProducts.data.map((product) => product.category);
	const history = createBrowserHistory();
	const dispatch = useAppDispatch();

	useEffect(() => {
		(() => {
			if (stateProducts.data.length <= 1) {
				dispatch(setIsLoading(true) as any);
				dispatch(getAllProducts() as any);
			}

			const filterParams = history.location.search.substring(1);
			const filtersFromParams = qs.parse(filterParams);

			if (filtersFromParams.page) {
				setCurrentPage(Number(filtersFromParams.page));
			} else if (filtersFromParams.category) {
				setCategory(filtersFromParams.category as any);
			}
		})();
	}, []);

	const onClickPagination = (event: any) => {
		setCurrentPage(Number(event.target.id));
	};

	useEffect(() => {
		if (category != '') {
			history.push(`?category=${category}`);
		} else {
			history.push('');
		}
	}, [category]);

	useEffect(() => {
		history.push(`?page=${currentPage}`);
	}, [currentPage]);

	var products: Array<any> = [];
	var pageNumbers: Array<any> = [];
	var filteredProducts: any = [];

	if (stateProducts) {
		if (category !== '') {
			filteredProducts = stateProducts.data.filter(
				(product) => product.category == category
			);
		} else {
			filteredProducts = stateProducts.data;
		}

		if (filteredProducts.length >= productsPerPage) {
			products = filteredProducts.slice(
				indexOfFirstCustomer,
				indexOfLastCustomer
			);

			pageNumbers = Array.from(
				{
					length: Math.ceil(
						stateProducts.data.length / productsPerPage
					),
				},
				(_, page) => ({ page: page + 1 })
			);
		} else {
			products = filteredProducts;
		}
	}

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='col-md-12 mt-5 px-5'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='row d-flex justify-content-center mb-5'>
									<div className='col-md-12 px-0 mb-5'>
										<div className='row'>
											<div className='col-md-12'>
												<ul className='d-flex justify-content-between text-muted'>
													<li className='d-inline'>
														<a
															onClick={() =>
																setCategory('')
															}
														>
															All
														</a>
													</li>
													{Array.from(
														new Set(categories)
													).map((category, index) => (
														<li
															className='d-inline'
															key={index}
														>
															<a
																onClick={() =>
																	setCategory(
																		category
																	)
																}
															>
																<small>
																	{category}
																</small>
															</a>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
									{products.length > 1 ? (
										<>
											{products.map((product, index) => (
												<Product
													key={index}
													data={product}
												/>
											))}
										</>
									) : (
										!isLoading && <NoRecods />
									)}

									{filteredProducts.length >=
									productsPerPage ? (
										<nav aria-label='Page navigation mx-auto '>
											<ul className='pagination d-flex justify-content-center'>
												{pageNumbers.map(({ page }) => (
													<li
														key={page}
														className='rounded-circle mx-2'
													>
														<a
															className='rounded-circle page-link'
															href='#'
															id={page}
															onClick={(page) =>
																onClickPagination(
																	page
																)
															}
														>
															{page}
														</a>
													</li>
												))}
											</ul>
										</nav>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Products;
