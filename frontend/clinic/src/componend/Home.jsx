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
                    <a className='tag' href="https://my.clevelandclinic.org/health/articles/naturopathy" target="_blank" rel="noopener noreferrer">🌿 Naturopathy</a>
                    <a className='tag' href="https://theyogatherapyinstitute.org/blogs/yoga-therapy-blog/what-is-yoga-therapy?srsltid=AU7gw4VVmm5M5J3b_ymwdegP02AtgcD32ASFGj1qww1ziNQXeJ1tLj47" target="_blank" rel="noopener noreferrer">🧘 Yoga & Pranayama</a>
                    <a className='tag' href="https://en.wikipedia.org/wiki/Ayurveda" target="_blank" rel="noopener noreferrer">✳️ Ayurveda</a>
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