import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import RowBlur from './components/RowBlur';
import { useState } from 'react';
import AuthPage from './pages/AuthPage/Auth';

const Layout = ({ isLogIn, setIsLogIn }) => {
	return (
		<div>
			<Nav isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
			<Outlet />
			{!isLogIn && <RowBlur />}
			<Footer isLogIn={isLogIn} />
		</div>
	);
};

function App() {
	const [isLogIn, setIsLogIn] = useState(false);
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout isLogIn={isLogIn} setIsLogIn={setIsLogIn} />}>
					<Route index element={<MainPage isLogIn={isLogIn} />} />
					<Route path=':movieId' element={<DetailPage />} />
					<Route path='search' element={<SearchPage />} />
				</Route>
				<Route
					path='/auth'
					element={
						<>
							<AuthPage />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
