'use client'

import React from 'react'
import { HeroParallax } from './ui/hero-scroll';

const AboutSection = () => {
  return (
    <>
      <h1>About Section</h1>
      <HeroParallax products={products}/>
    </>
  )
}

export default AboutSection;

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/1.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/2.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/3.jpg",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/4.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/6.jpg",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/1.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/2.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/3.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/4.jpg",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/5.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/6.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/7.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/1.jpg",
  },
];