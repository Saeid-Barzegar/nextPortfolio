import 'bootstrap/dist/css/bootstrap.min.css'
import HeroComponent from '../components/Hero';
import NavbarComponent from '../components/Navbar';
import "../styles/index.scss";

const App = ({Component, pageProps}) => {
  console.log('Saeid', {Component, pageProps});
  return (
    <div className="portfolio-app">
      <NavbarComponent />
      {Component.name === "Home" && <HeroComponent />}
      <div className='container full-height'>
        <Component {...pageProps} />
      </div>
      <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
        <div className="text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </div>
  )
}

export default App;