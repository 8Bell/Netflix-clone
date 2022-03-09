import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import requests from './api/requests';
import Row from './components/Row';

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
      title = 'ACTION MOVIES'
      id = 'AM'
      fetchURL = {requests.fetchActionMovies}
    
      />
       <Row
      title = 'COMEDY MOVIES'
      id = 'CM'
      fetchURL = {requests.fetchComedyMovies}
    
      />

    </div>
  );
}

export default App;
 