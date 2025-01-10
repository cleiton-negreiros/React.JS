import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import Banner from '../components/Banner/Banner'; 
import Hero from '../components/Hero/Hero';

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <p>Subtitle</p>
      <Button buttonStyle="secondary" arrow>Olá</Button>
      <div className="container">
          <Hero /> 
      </div>
      
      <Footer />
    </>
  );
}

export default Home