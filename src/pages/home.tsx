'use client';
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { FaMessage } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef, useEffect } from 'react';
import '../app/globals.css';

export default function Home() {
 const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
    const handleImageClick = (level: string) => {
        setSelectedLevel(level);
      };      

  


  return (
    <div className="font-sans text-gray-900 antialiased">
      <Head>
        <title>Eklavya School</title>
      </Head>

      <header className="flex flex-col">
  <div className="flex justify-between items-center mb-4 bg-gray-300 text-black p-6">
    <div className="flex items-center space-x-2">
      <CiLocationOn />
      <span>Street Address, City, State, Country | Post Code</span>
    </div>
    <div className="flex space-x-4">
      <a href="tel:1234567890">
        <MdAddCall />
      </a>
      <a href="mailto:info@example.com">
        <FaMessage />
      </a>
    </div>
  </div>
  <div className="flex justify-between items-center bg-white text-black p-6">
    <Image
      src="/1.jpg" // Path to your image
      alt="Ekalavya School" // Description of the image
      width={60} // Width of the image
      height={60} // Height of the image
      className="rounded-full"
    />
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-red-600">Home</a></li>
        <li><a href="#" className="hover:text-red-600">News & Updates</a></li>
        <li><a href="#" className="hover:text-red-600">Events</a></li>
        <li><a href="#" className="hover:text-red-600">Gallery</a></li>
        <li><a href="#" className="hover:text-red-600">Contact Us</a></li>
      </ul>
    </nav>
  </div>
</header>


      <main className="relative h-96 w-full mb-4">
  <Image
    src="/1.jpg"
    alt="Students of Eklavya School"
    layout="fill"
    objectFit="cover"
    className="rounded-lg"
  />
  <div className="absolute bottom-0 left-0 p-6">
    <h1 className="text-3xl font-bold mb-4 text-white">Eklavya School</h1>
    <p className="mb-4 text-white">
      With a commitment to excellence, we strive to empower the minds of young students who walk through our doors. Fostering an environment where they can grow, learn and thrive while simultaneously inspiring them to reach beyond boundaries of traditional learning towards limitless possibilities of tomorrow thereby shaping brighter futures for themselves and world around them.
    </p>
  </div>
</main>

<div className="bg-green-600 text-white p-10 rounded-lg -mt-66 max-w-3xl mx-auto flex items-center justify-between">
  <div className="flex items-center">
    <FaUsers size={30}/> 
    <div className="ml-5">
      <h2 className="text-2xl font-bold">600+</h2>
      <p>Students</p>
    </div>
  </div>
  <div className="flex items-center">
   <IoBookSharp size={30}/> 
    <div className="ml-5">
      <h2 className="text-2xl font-bold">32</h2>
      <p>Qualified Staffs</p>
    </div>
  </div>
  <div className="flex items-center">
  <HiMiniArrowTrendingUp size={30}/> 
    <div className="ml-5">
      <h2 className="text-2xl font-bold">100%</h2>
      <p>Graduation Rate</p>
    </div>
  </div>
</div>

<div className="grid grid-cols-4 gap-4">
  <div className="col-span-2 pl-48 pr-2 py-4">
    <h2 className="text-lg font-bold mb-2 text-yellow-600">About Us</h2>
    <h3 className="text-xl mb-4 font-bold">Welcome to Eklavya</h3>
  <p className="mb-4">
  At our School, we are more than just an educational institution; we are a vibrant community dedicated to nurturing the potential of every student. Founded on the principles of academic excellence, character development, and holistic growth; Our School has been a cornerstone of educational innovation and empowerment for [X years/decades].
</p>

<p className="mb-4">
  Driven by a passionate faculty and staff, we provide a nurturing environment where students are encouraged to explore their passions, expand their horizons, and discover their unique talents. Our commitment to personalized education ensures that each student receives the support needed to excel academically, socially, and emotionally.
</p>

<p className="mb-4">
  Beyond academics, we believe in fostering a culture of inclusivity respect,and integrity. Through a wide array of extracurricular activities community service initiatives,and leadership opportunities we empower our students to become responsible citizens capable together we create positive impact on world
</p>

<p className="mb-4">
  At our School diversity is strength fosters collaborative environment where everyone feels valued supported inspired achieve full potential
  Join us at Our School embark on journey discovery growth endless possibilities Together will shape future leaders champions innovators heroes tomorrow
</p>

  </div>
  <div className="col-span-2 flex justify-center items-center ml-30">
  <div style={{ position: 'relative', paddingLeft: '10px' , paddingBottom: '10px'}}>
    <Image
      src="/people.jpg"
      alt="People standing against a colorful mural"
      layout="fixed"
      width={400} // Set the width of the image to 400
      height={400} // Set the height of the image to 400
    />
    <div style={{
      position: 'absolute',
      top: '50px', // Adjust this to change the gap size
      bottom: '0',
      left: '0',
      borderLeft: '10px solid green'
    }} />
    <div style={{
      position: 'absolute',
      left: '0',
      right: '50px',
      bottom: '0',
      borderBottom: '10px solid green'
    }} />
  </div>
</div>
</div>
{/* this is another section */}
  <div className="col-span-2 pl-48 pr-2 py-4 w-full">
    <h2 className="text-lg font-bold mb-2 text-yellow-600">We Offer</h2>
    <h3 className="text-xl mb-4 font-bold">Extraordinary teaching.</h3>
    <p className='mb-4'>
      With X years of dedicated service, we boast a wealth of experience in shaping young minds and empowering students to achieve their fullest potential. Our journey is marked by countless success stories, each testament to our commitment to excellence in education and holistic student development.
    </p>
  </div>

{/* this is another section */}
            <div className="col-span-2">
            <div className="overflow-auto flex space-x-4 mt-4 col-span-2 pl-48 pr-2 py-4 w-full">
            <div onClick={() => handleImageClick('pre-level')} className="flex">
                <Image
                src="/pre-school.jpg" // Path to your image
                alt="Pre-Level School" // Description of the image
                width={300} // Adjust the width as needed
                height={300} // Adjust the height as needed
                className="rounded-lg object-cover"
                />
                {selectedLevel === 'pre-level' && 
                <div className="ml-4 w-1/2">
                    <p className="mt-2 text-left font-bold">Pre-Level School</p>
                    <p>This is the beginning of the educational journey where children are introduced to basic learning concepts in a fun and engaging environment.</p>
                </div>
                }
                </div>
                <div onClick={() => handleImageClick('primary')} className="flex">
                <Image
                    src="/primary-level.jpg"
                    alt="Primary Level students"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                />
                {selectedLevel === 'primary' && 
                    <div className="ml-4 w-1/2">
                    <p className="mt-2 text-left font-bold">Primary School</p>
                    <p>At this level, students start to explore more complex subjects and enhance their learning skills.</p>
                    </div>
                }
                </div>

                <div onClick={() => handleImageClick('secondary')} className="flex">
                <Image
                    src="/secondary-level.jpg"
                    alt="Secondary Level students"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                />
                {selectedLevel === 'secondary' && 
                    <div className="ml-4 w-1/2">
                    <p className="mt-2 text-left font-bold">Secondary School</p>
                    <p>This is the final stage of school education where students prepare for higher education and future careers.</p>
                    </div>
                }
                </div>
        </div>

        {/* this is another section */}
        <div className="pl-48 pr-2 py-4 w-full bg-black text-white flex">
        <div style={{ position: 'relative', paddingRight: '10px' , paddingBottom: '10px'}}>
            <Image
            src="/pe-teacher-with-students.jpg" // Path to your image
            alt="PE teacher with students" // Description of the image
            width={500} // Adjust the width as needed
            height={500} // Adjust the height as needed
            />
            <div style={{
            position: 'absolute',
            top: '50px',
            bottom: '0', // Adjust this to change the gap size
            right: '0',
            borderRight: '10px solid green'
            }} />
            <div style={{
            position: 'absolute',
            right: '0',
            left: '50px',
            bottom: '0',
            borderBottom: '10px solid green'
            }} />
        </div>
        <div className="pl-16 relative">
            <h2 className="text-lg font-bold mb-2">Upcoming Events</h2>
            <h3 className="text-xl mb-4 font-bold">Get Updated With Our Upcoming Events</h3>
            <ul className='mb-4'>
            <li style={{ position: 'relative' }}>
                <strong>Sports Week 2024:</strong>
                <div style={{ position: 'absolute', left: '-20px', top: '0', bottom: '50%', width: '4px', height: '50px', backgroundColor: 'green' }}></div>
                <p>November 14 - November 21</p>
            </li>
            <li style={{ position: 'relative' }}>
                <strong>Quiz Contest Junior:</strong>
                <div style={{ position: 'absolute', left: '-20px', top: '0', bottom: '0', width: '4px', height: '150px', backgroundColor: 'white' }}></div>
                <p>November 24</p>
            </li>
            <li><strong>Quiz Contest Senior:</strong><p>November 26</p></li>
            <li><strong>Christmas Celebration:</strong><p>December 24</p></li>
            </ul>
        </div>
        </div>

        {/* this is another section */}
        <div className="pl-48 pr-2 py-4 w-full bg-white text-black grid grid-cols-2">
  <div >
    <h2 className="text-lg font-bold mb-2 text-yellow-600">Why Us</h2>
    <h3 className="text-xl mb-4 font-bold">Discover the Irresistible Reasons to Choose Us</h3>
    <ul className='mb-4'>
      <li style={{ position: 'relative', marginBottom: '20px' }}>
      <div style={{ 
            backgroundColor: 'green', // This will make the entire box green
            color: 'white', // This will make the text color white
            padding: '10px', 
            marginRight: '10px', 
            display: 'inline-block', 
            width: '30px', 
            textAlign: 'center' 
          }}>1</div>
        <strong>Academic Excellence:</strong>
        <p style={{ marginLeft: '40px', marginRight: '200px' }}>Our school is renowned for its rigorous curriculum and dedicated faculty who ensure every student receives a top-tier education, setting them up for success in higher education and beyond.</p>
      </li>
      <li style={{ position: 'relative', marginBottom: '20px' }}>
      <div style={{ 
            backgroundColor: 'green', // This will make the entire box green
            color: 'white', // This will make the text color white
            padding: '10px', 
            marginRight: '10px', 
            display: 'inline-block', 
            width: '30px', 
            textAlign: 'center' 
          }}>2</div>
        <strong>Holistic Development:</strong>
        <p style={{ marginLeft: '40px', marginRight: '200px' }}>Beyond academics, we prioritize the holistic growth of our students providing a nurturing environment where they can explore their passions, develop crucial life skills, and cultivate a strong sense of character and integrity.</p>
      </li>
      <li style={{ position: 'relative', marginBottom: '20px' }}>
      <div style={{ 
            backgroundColor: 'green', // This will make the entire box green
            color: 'white', // This will make the text color white
            padding: '10px', 
            marginRight: '10px', 
            display: 'inline-block', 
            width: '30px', 
            textAlign: 'center' 
          }}>3</div>
        <strong>Vibrant Community:</strong>
        <p style={{ marginLeft: '40px', marginRight: '200px' }}>Joining our school means becoming part of a vibrant, inclusive community where students are encouraged to collaborate, celebrate diversity, and support one another, fostering lifelong friendships and a sense of belonging.</p>
      </li>
    </ul>
    
  </div>
  <div className="flex justify-center items-center ml-30">
  <div style={{ position: 'relative', paddingLeft: '10px' , paddingBottom: '10px'}}>
    <Image
      src="/School-scene.jpg"
      alt="People standing against a colorful mural"
      layout="fixed"
      width={600} // Set the width of the image to 400
      height={600} // Set the height of the image to 400
    />
    <div style={{
      position: 'absolute',
      top: '50px', // Adjust this to change the gap size
      bottom: '0',
      left: '0',
      borderLeft: '10px solid green'
    }} />
    <div style={{
      position: 'absolute',
      left: '0',
      right: '50px',
      bottom: '0',
      borderBottom: '10px solid green'
    }} />
  </div>
</div>
</div>

 {/* this is another section */}

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', backgroundColor: 'black', overflow: 'hidden' }}>
  <div style={{ display: 'flex', animation: 'scroll 60s linear infinite', marginLeft: '-200px' }}>
    {/* Original images */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', color: 'white' }}>
      <Image
        src="/student.jpg"
        width={200}
        height={200}
        alt="Student 1"
      />
      <p>Tenzing Lama<br/>3.9 GPA</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', color: 'white' }}>
      <Image
        src="/student2.jpg"
        width={200}
        height={200}
        alt="Student 2"
      />
      <p>Sushiana Rai<br/>4.0 GPA</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', color: 'white' }}>
      <Image
        src="/student3.jpg"
        width={200}
        height={200}
        alt="Student 3"
      />
      <p>Bhawana Adhikari<br/>3.8 GPA</p>
    </div>
    {/* Duplicate all images and details */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', color: 'white' }}>
      <Image
        src="/student.jpg"
        width={200}
        height={200}
        alt="Student 1"
      />
      <p>Tenzing Lama<br/>3.9 GPA</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', color: 'white' }}>
      <Image
        src="/student2.jpg"
        width={200}
        height={200}
        alt="Student 2"
      />
      <p>Sushiana Rai<br/>4.0 GPA</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', color: 'white' }}>
      <Image
        src="/student3.jpg"
        width={200}
        height={200}
        alt="Student 3"
      />
      <p>Bhawana Adhikari<br/>3.8 GPA</p>
    </div>
  </div>
  <div style={{ position: 'absolute', left: '1290px', color: 'white', textAlign: 'left' }}>
    <h2 style={{ color: 'yellow', fontWeight: 'bold' }}>Spotlight on Success</h2>
    <strong><p>Meet Our Top Achievers</p></strong>
    <p>Batch 2020</p>
  </div>
</div>

<style jsx>{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`}</style>

 {/* this is another section */}
 <div className="container mx-auto px-4 py-8 flex">
      <div className="w-1/2 pr-4">
      <h2 className="text-lg font-bold mb-2 text-yellow-600">Contact Us</h2>
      <strong><h2 className="text-3xl mb-4">Unlock Your Children’s Future</h2></strong>
        <p className="mb-4">Enroll your child in a community dedicated to fostering curiosity, cultivating character, and championing academic excellence. Together, let’s embark on a journey of growth, discovery, and endless possibilities. Provide your email address and we will contact you when admission opens.</p>
        <div className="flex mb-4">
          <input type="text" className="border border-gray-300 rounded w-full py-2 px-4 mr-4" placeholder="Email Address" />
          <button className="bg-green-500 text-white rounded py-2 px-4">Queue for Admission</button>
        </div>
        <p>Or if you have any queries or just want to say hello. <a href="#" className="text-blue-500 underline">Click here</a> so we can either schedule an appointment or have a quick discussion.</p>
      </div>
      <div className="w-1/2 flex justify-center items-center ml-30">
        <div style={{ position: 'relative', paddingLeft: '10px' , paddingBottom: '10px'}}>
          <Image
            src="/studentboard.jpg"
            alt="People standing against a colorful mural"
            layout="fixed"
            width={600}
            height={600}
          />
          <div style={{
            position: 'absolute',
            top: '50px',
            bottom: '0',
            left: '0',
            borderLeft: '10px solid green'
          }} />
          <div style={{
            position: 'absolute',
            left: '0',
            right: '50px',
            bottom: '0',
            borderBottom: '10px solid green'
          }} />
        </div>
      </div>
    </div>


 {/* this is another section */}
 <div className="w-full bg-black text-white">
  <div className="container mx-auto px-4 py-8 flex">
    <div className="w-1/2 pr-4">
      <Image
        src="/1.jpg"
        alt="Ekalaya School Logo"
        width={80}
        height={80}
      />
      <h2 className="text-2xl font-bold">Ekalaya School</h2>
      <p>We strive to empower the minds of every student who walks through our doors; fostering an environment where they can grow, learn, and thrive; while simultaneously inspiring them to reach beyond the boundaries of today and embrace the limitless possibilities of tomorrow, thereby shaping brighter futures for themselves and the world around them.</p>
    </div>
    <div className="w-1/2 pl-4 flex flex-row space-x-4">
      <div>
        <h2 className="text-2xl font-bold">Quick Links</h2>
        <ul className="list-disc pl-5">
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="ml-auto">
        <h2 className="text-2xl font-bold">Socials</h2>
        <div className="flex flex-row space-x-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><ImFacebook2 /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
          <a href="https://www.viber.com" target="_blank" rel="noopener noreferrer"><FaViber /></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-8 border-t border-gray-600 flex justify-between items-center px-4 py-4">
    <p>Copyright 2024. All Rights Reserved.</p>
    <p>Designed & Developed with ❤️ by TWB Crates</p>
  </div>
</div>


      </div>
    </div>
  )
}