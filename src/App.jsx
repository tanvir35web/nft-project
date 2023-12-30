import './App.css'
import Profile from './components/Profile';
import SocialMediaSlider from './components/SocialMediaSlider';
import AppLogo from './components/appLogo';
import ContactsDetails from './components/contacts/ContactsDetails';
import Footer from './components/footer/Footer';

function App() {


  return (
    <>
      <AppLogo/>
      <Profile/>
      <SocialMediaSlider/>
      <ContactsDetails/>
      <Footer/>
    </>
  );
};

export default App;
