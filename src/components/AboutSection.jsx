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
    thumbnail: "/home.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/home.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/home.jpg",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/home.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/home.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/home.jpg",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/home.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/home.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/home.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/home.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/home.jpg",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/home.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/home.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/home.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/home.jpg",
  },
];