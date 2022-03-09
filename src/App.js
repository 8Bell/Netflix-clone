import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import requests from './api/requests';
import Row from './components/Row';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      
      <Nav/>
      <Banner/>
      <Row
      title = 'NETFILX ORIGINALS'
      id = 'NO'
      fetchURL = {requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row
      title = 'TRENDING NOW'
      id = 'TN'
      fetchURL = {requests.fetchTrending}
      />
      <Row
      title = 'TOP RATED'
      id = 'TR'
      fetchURL = {requests.fetchTopRated}
      />
      <Row
      title = 'Action Movies'
      id = 'AM'
      fetchURL = {requests.fetchActionMovies}
      />
       <Row
      title = 'Comedy Movies'
      id = 'CM'
      fetchURL = {requests.fetchComedyMovies}
      />
      {/* <Row
      title = 'Horror Movies'
      id = 'HM'
      fetchURL = {requests.fetchHorrorMovies}
      />
      <Row
      title = 'Romance Movies'
      id = 'RM'
      fetchURL = {requests.fetchRomanceMovies}
      />
      <Row
      title = 'Documentaries'
      id = 'DO'
      fetchURL = {requests.fetchDocumentaries}
      /> */}

      <Footer/>

    </div>
  );
}

export default App;
 