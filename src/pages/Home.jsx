import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import bg_image from '../assets/home_img.jpg';

function Home() {
  return (
    <section id="home">

      <img
        className="w-full h-screen object-cover scale-x-[-1] brightness-75"
        src={bg_image}
        alt="Home image"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/60 dark:bg-black/70">

        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">

          <h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-yellow-900 animate-bounce dark:text-white">
            Jonathas Oliveira
          </h1>

          <h2 className="sm:text-4xl flex text-3xl pt-4 text-yellow-900 dark:text-white">

            <TypeAnimation
              sequence={[
                'Call me Jonn!',
                1000,
                "I'm a Developer",
                1000,
                'Coder',
                1000,
                'Tech Lover',
                1000,
                'Gamer',
                1000,
                'Nature Lover',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />

          </h2>

          <div className="flex justify-evenly pt-6 max-w-[200px] w-full">

            <a target="_blank" href="https://www.linkedin.com/in/jonnoliveira/">
              <FaLinkedinIn size={30} color={'#573e04'} className="cursor-pointer dark:text-white" />
            </a>

            <a target="_blank" href="https://github.com/jonnoliveira">
              <FaGithub size={30} color={'#573e04'} className="cursor-pointer" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
