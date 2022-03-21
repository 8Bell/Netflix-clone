import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import RowBlur from './components/RowBlur';
import { useState } from 'react';

const Layout = () => {
	const [isLogIn, setIsLogIn] = useState(false);
	return (
		<div>
			<Nav isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
			<Outlet />
			<RowBlur />
			<Footer isLogIn={isLogIn} />
		</div>
	);
};

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path=':movieId' element={<DetailPage />} />
					<Route path='search' element={<SearchPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
