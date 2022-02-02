import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app';
import HeroComponent from '../components/Hero';
import NavbarComponent from '../components/Navbar';
import "../styles/index.scss";

const PortfolioApp = ({Component, pageProps}) => {
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

PortfolioApp.getInitialProps = async (context) => {
  const initialProps = App.getInitialProps && await App.getInitialProps(context);
  return {
    pageProps: {
      ...initialProps.pageProps,
      email: 'saeidbarzegar@gmail.com', // add initial props to all page props
    }
  }
}

export default PortfolioApp;