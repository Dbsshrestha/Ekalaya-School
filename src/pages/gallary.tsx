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
import { AiOutlineClose } from "react-icons/ai";
import '../app/globals.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

function Gallery() {
    const images = [
      '/1.jpg',
      '/people.jpg',
      '/student.jpg',
      '/student2.jpg',
      '/student3.jpg',
      '/studentboard.jpg',
      '/student.jpg',
      '/studentboard.jpg',
      '/studentboard.jpg',
      // Add as many images as you want...
    ];
  
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg" onClick={() => {setIsOpen(true); setPhotoIndex(index);}}>
                <Image src={src} alt={`Gallery image ${index + 1}`} width={500} height={300} />
              </div>
            ))}
          </div>

          {isOpen && (
            <div>
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
              />
              <div className="thumbnail-container">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    className={`thumbnail ${index === photoIndex ? 'active' : ''}`}
                    onClick={() => setPhotoIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    
export default function Home() {
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

      <main>
        <Gallery />
      </main>

      <footer className="mt-8 border-t border-gray-600 flex justify-between items-center px-4 py-4">
        <p>Copyright 2024. All Rights Reserved.</p>
        <p>Designed & Developed with ❤️ by TWB Crates</p>
      </footer>
    </div>
  )
}
