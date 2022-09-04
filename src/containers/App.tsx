import AppRoutes from './Routes';
import Header from '../components/LayoutComponents/Header';
import Footer from '../components/LayoutComponents/Footer';
import Message from '../components/LayoutComponents/Message';
import { useAppSelector } from '../hooks';

function App() {
	const message = useAppSelector((state) => state.generalReducer.message);

	return (
		<>
			<div className='container-fluid'>
				<Header />
				<div className='row px-5'>
					<div className='col-md-12'>
						{message && (
							<Message
								text={message.text}
								level={message.level}
							/>
						)}
					</div>
					<AppRoutes />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
