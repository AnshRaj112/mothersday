"use client";

import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import Footer from './components/Footer';

const Index = () => {
  // Optional: Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Messages />
      </main>
      <Footer />
    </div>
  );
};

export default Index;