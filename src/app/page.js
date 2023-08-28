import Head from 'next/head'
import Image from 'next/image'
import {AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <main className='bg-white px-10 '>
        <section className='min-h-[50vh]'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>portfolio</h1>
            <ul className='flex items-center'>
              {/* <li className='cursor-pointer text2xl'>🌙</li> */}
              <li><a className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-md ml-8' href='/Résumé.pdf' target='_blank'> 📝 Full Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-700 font-medium'>Anjelo Cahinosayan</h2>
            <h3 className='text-2xl py-2'>Student</h3>
            <p text-md py-5 leading-8 text-gray-800>
              Studying for a Diploma in Applied Artifical Intelligence at Temasek Polytechnic
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/anjelo-cahinosayan-b3a3591b7/' target='_blank'><AiFillLinkedin /></a>
            <a href='https://www.youtube.com/channel/UCoJThvGnYwA9-LnTNBwbdCw' target='_blank'><AiFillYoutube /></a>
          </div>
        </section>

        <section className='py-2'>
          <div className='max-w-3xl m-auto'>
            <h3 className='text-3xl py-2'>Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800'><span className='font-bold'>Web Development:</span> In the last few years I have familiarized myself with both frontend <span className='text-purple-600 font-bold'>(vanilla HTML/CSS/JS)</span> and backend development <span className='text-purple-600 font-bold'>(AWS serverless architecture using S3, API Gateway, Lambda, RDS)</span>. Recently I have been trying my hand at the latest frameworks such as React and Tailwind. I also have some experience in App Dev <span className='text-purple-600 font-bold'>QA Testing.</span></p>
            <p className='text-md py-2 leading-8 text-gray-800'><span className='font-bold'>Data Analysis & Modelling:</span> During my polytechnic education I was exposed to data visualization techiniques, using technologies such as <span className='text-purple-600 font-bold'>Python (Pandas, Tensorflow, Keras), KNIME and PowerBI.</span></p>
          </div>
        </section>

        <section className='py-2'>
          <div className='max-w-3xl m-auto'>
            <h3 className='text-3xl py-2'>Experience</h3>
            <p className='text-md leading-8 text-gray-800 py-2'><span className='font-bold'>Feb 2021 - April 2021: </span>Focus Digitech, Intern. Mobile Application QA Testing.</p>
            <p className='text-md leading-8 text-gray-800 py-2'><span className='font-bold'>Mar 2023: </span>Focus Digitech, Part Time Temp. Website QA Testing.</p>
          </div>
        </section>

        <section className='py-2'>
          <div className='max-w-3xl m-auto'>
            <h3 className='text-3xl py-2'>Project Portfolio</h3>
            <a href='https://github.com/alt7r/cph_dashboard' target='_blank'><p className='underline py-2'>Data Visualization Dashboard</p></a>
            <img src='/images/port3.png' className='rounded-sm'></img>
            <a href='https://alt7r.github.io' target='_blank'><p className='underline py-2'>Previous Portfolio Websites</p></a>
            <img src='/images/port1.png' className='rounded-sm'></img>
            <img src='/images/port2.png' className='rounded-sm'></img>
          </div>
        </section>

        <section className='py-2 pb-[10rem]'>
          <div className='max-w-3xl m-auto'>
            <h3 className='text-3xl py-2'>Contact Me</h3>
            <p>+65 9675 5822</p>
            <p>anjelocahinosayan@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}
