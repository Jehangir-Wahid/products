import React from 'react';
import Contact from '../../Icons/Contact';
import Location from '../../Icons/Location';
import Logo from '../../Icons/Logo';
import Mail from '../../Icons/Mail';

const Footer = () => {
	return (
		<div className='row footer bg-primary mt-5 font-dm-sans'>
			<div className='col-md-12'>
				<div className='container text-white py-5'>
					<div className='row'>
						<div className='col-md-12 mb-4'>
							<Logo color='white' />
						</div>
						<div className='col-md-6'>
							<div className='row'>
								<div className='col-md-8'>
									<p>
										<small>
											At CX Unicorn we envision, build and
											drive your brand forward with
											creativity, science and imagination.
											We dream with you and also work with
											you to turn them into a reality. We
											are your marketing partner that
											listens, understands, and nurtures
											your vision.
										</small>
									</p>
								</div>
							</div>
							<div className='row bottom-0'>
								<div className='col-md-12'>
									<p className='bottom-0'>
										© CX UNICORN. All Rights Reserved.
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='row'>
								<div className='col-md-6'>
									<strong>Social</strong>
									<ul className='list-unstyled'>
										<li className='my-4'>Facebook</li>
										<li className='my-4'>Twitter</li>
										<li className='my-4'>Instagram</li>
										<li className='my-4'>YouTube</li>
									</ul>
								</div>
								<div className='col-md-6'>
									<strong>Contact</strong>
									<ul className='list-unstyled'>
										<li className='mt-4 mb-5'>
											<div className='row'>
												<div className='col-md-2'>
													<Location />
												</div>
												<div className='col-md-8'>
													<span>
														8819 Ohio St. South
														Gate, California 90280
													</span>
												</div>
											</div>
										</li>
										<li className='my-5'>
											<div className='row'>
												<div className='col-md-2'>
													<Mail />
												</div>
												<div className='col-md-8'>
													<span>
														magnificentknight@gmail.com
													</span>
												</div>
											</div>
										</li>
										<li className='my-5'>
											<div className='row'>
												<div className='col-md-2'>
													<Contact
														width='18'
														height='18'
														viewBox='0 0 18 22'
														color='white'
													/>
												</div>
												<div className='col-md-8'>
													<span>
														+971 52 722 0861
													</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
