import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks';
import { resetMessage } from '../../../redux/action-creators/GeneralActionCreators';
import { MessageType } from '../../../redux/types';

const Message: React.FC<MessageType> = ({ text, level }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		setTimeout(() => dispatch(resetMessage() as any), 5000);
	}, []);

	return (
		<div className='row position-fixed top-0 w-100 opacity-75 mt-5'>
			<div className='col-md-12'>
				{text && (
					<>
						{window.scrollTo(0, 0)}
						<div className={`alert alert-${level}`} role='alert'>
							{text}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Message;
