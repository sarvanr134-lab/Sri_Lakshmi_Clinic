import React from 'react'
import '../styles/Home.css'
import banner_img from '../assets/clinic_banner.jpeg'

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="home-content">
            <div className="home-text">
                <div className="home-badge">
                    <span className="badge-icon">🌿</span> Holistic Healing Since 2008
                </div>

                <h1>Heal Naturally, <span>Live Vibrantly</span></h1>

                <p>
                    Discover the power of naturopathy and yoga — ancient wisdom
                    meets modern wellness science. Our expert practitioners guide
                    you toward lasting health, balance, and inner peace.
                </p>

                <div className='tag_row'>
                    <span className='tag'>🌿 Naturopathy</span>
                    <span className='tag'>🧘 Yoga & Pranayama</span>
                    <span className='tag'>✳️ Ayurveda</span>
                </div>

                <div className='Btn_row'>
                    <button className='btn-primary'>Book a Session</button>
                    <button className='btn-secondary'>Explore Programs</button>
                </div>
            </div>

            <div className="home-image">
                <img src={banner_img} alt="Banner" />
            </div>
        </div>
    </div>
  );
}

export default Home