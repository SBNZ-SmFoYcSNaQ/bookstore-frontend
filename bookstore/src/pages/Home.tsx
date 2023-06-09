import { useIsAuthenticated } from "react-auth-kit";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/navbar";
import BannerBackground from "../images/banner-background.png";

const Home = () => {
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated()
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-containter">
            <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Your Favourite Bookstore On The Market
                </h1>
                {!isAuthenticated() ? (<div className="home-text-section"><p className="primary-text">
                    Register now and start using our bookstore system for free.
                </p>
                <button className="secondary-button" onClick={() => navigate('/registration')}>
                    Register now <FiArrowRight />
                </button></div>) : null}
            </div>
        </div>
    </div>
  );
};

export default Home;