import React from 'react';
import Banner from '../../components/Banner';
import requests from '../../api/requests';
import Row from '../../components/Row';

export default function MainPage({ isLogIn, userObj }) {
	console.log('isLogIn', isLogIn);
	return (
		<div>
			<Banner fetchURL={requests.fetchTrending} isLogIn={isLogIn} />

			<Row
				title='NETFILX ORIGINALS'
				id='NO'
				fetchURL={requests.fetchNetflixOriginals}
				isLogIn={isLogIn}
				isLargeRow
				userObj={userObj}
			/>
			<Row
				title='TRENDING NOW'
				id='TN'
				fetchURL={requests.fetchTrending}
				isLogIn={isLogIn}
				userObj={userObj}
			/>
			<Row
				title='TOP RATED'
				id='TR'
				fetchURL={requests.fetchTopRated}
				isLogIn={isLogIn}
				userObj={userObj}
			/>
			<Row
				title='Action Movies'
				id='AM'
				fetchURL={requests.fetchActionMovies}
				isLogIn={isLogIn}
				userObj={userObj}
			/>
			<Row
				title='Comedy Movies'
				id='CM'
				fetchURL={requests.fetchComedyMovies}
				isLogIn={isLogIn}
				userObj={userObj}
			/>
			<Row
				title='Horror Movies'
				id='HM'
				fetchURL={requests.fetchHorrorMovies}
				isLogIn={isLogIn}
				userObj={userObj}
			/>
			<Row
				title='Romance Movies'
				id='RM'
				fetchURL={requests.fetchRomanceMovies}
				isBlur
				isLogIn={isLogIn}
				userObj={userObj}
			/>
			<Row
				title='Documentaries'
				id='DO'
				fetchURL={requests.fetchDocumentaries}
				isBlur
				isLogIn={isLogIn}
				userObj={userObj}
			/>
		</div>
	);
}
