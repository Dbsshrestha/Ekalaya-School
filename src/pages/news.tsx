'use client';
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Modal from 'react-modal';
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
    <h1 className="text-3xl font-bold mb-4 text-white">News & Update </h1>
    <p className="mb-4 text-white">
        Get updated with all the latest news and updates regarding the school administration and public affairs.
        </p>
  </div>
</main>

<div className="grid grid-cols-3 gap-3">
  <div className="bg-blue-500 text-white p-4">
    <Image src="/vacency.jpg" alt="Image description" width={400} height={400} />
    <h2 className="font-bold text-xl mb-2">We Are Hiring</h2>
    <p>“Join our dynamic team as a [Subject] Teacher and inspire young minds to explore the fascinating world of [X Subject]. We’re seeking a passionate educator who can bring creativity, expertise, and enthusiasm to our [X grade/level].”</p>
    <p>Location: Your Street, City, State, ZIP Code, Country</p>
  </div>
  <div className="bg-orange-500 text-white p-4">
    <Image src="/vacency.jpg" alt="Image description" width={400} height={400} />
    <h2 className="font-bold text-xl mb-2">2021 Admission Open Now</h2>
    <p>Exciting News: Pre-Primary Admissions Now Open! Enroll your little ones in a nurturing environment where they’ll embark on a journey of discovery, imagination, and early learning. Secure their spot today for a vibrant start to their…</p>
  </div>
  <div className="bg-gray-500 text-white p-4">
    <Image src="/vacency.jpg" alt="Image description" width={400} height={400} />
    <h2 className="font-bold text-xl mb-2">Basanta Panchami</h2>
    <p>Basanta Panchami, also known as Vasant Panchami marks the arrival of spring and is celebrated with great fervor in many parts of India and Nepal...</p>
  </div>
  <div className="bg-gray-500 text-white p-4">
    <Image src="/vacency.jpg" alt="Image description" width={400} height={400} />
    <h2 className="font-bold text-xl mb-2">X Event</h2>
    <p>“At our school, events are more than just gatherings; they’re opportunities for our community to come together; celebrate; and create lasting memories. From annual traditions like sports days and cultural festivals to special oc…”</p>
  </div>
</div>

      <br/>

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
  )
}
