// import aboutImg from '../images/about.jpeg';
import aboutImg from '../images/personal/profile-pic.jpg'
import Title from './Title';
import { aboutInfo } from '../data';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='me' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Welcome!</h3>
          {aboutInfo.map((info) =>
            <p>{info}</p>
          )}
          <a href='https://www.linkedin.com/in/dave-guangyao-li/' target="_blank" rel='noreferrer' className='btn'>
            connect with me
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
