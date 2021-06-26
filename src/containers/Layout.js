import '../App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AppContainer from './AppContainer';


const  Layout = ()  => {
  
  return (
    <div className="App">
      <header className="App-header">
          <Header />
      </header>
      <div>
          <AppContainer />
      </div>
      <div>
          <Footer />
      </div>
    </div>
  );
}

export default Layout;