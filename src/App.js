import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import RowBlur from './components/RowBlur';
import { useEffect, useState } from 'react';
import AuthPage from './pages/AuthPage/Auth';
import { authService } from 'fbase';

const Layout = ({ isLogIn, setIsLogIn, newAccount, setNewAccount }) => {
	return (
		<div>
			<Nav
				isLogIn={isLogIn}
				setIsLogIn={setIsLogIn}
				newAccount={newAccount}
				setNewAccount={setNewAccount}
			/>
			<Outlet />
			{!isLogIn && <RowBlur />}
			<Footer isLogIn={isLogIn} />
		</div>
	);
};

function App() {
	const [init, setInit] = useState(false);
	const [newAccount, setNewAccount] = useState(true);

	const [isLogIn, setIsLogIn] = useState(authService.currentUser);
	console.log('authService.currentUser', authService.currentUser);
	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLogIn(true);
			} else {
				setIsLogIn(false);
			}
			setInit(true);
		});
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<Layout
							isLogIn={isLogIn}
							setIsLogIn={setIsLogIn}
							newAccount={newAccount}
							setNewAccount={setNewAccount}
						/>
					}>
					<Route index element={<MainPage isLogIn={isLogIn} />} />
					<Route path=':movieId' element={<DetailPage />} />
					<Route path='search' element={<SearchPage />} />
				</Route>
				<Route
					path='/auth'
					element={
						<>
							<AuthPage
								setIsLogIn={setIsLogIn}
								newAccount={newAccount}
								setNewAccount={setNewAccount}
							/>
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
