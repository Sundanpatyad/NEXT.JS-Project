import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { GridBackgroundDemo } from './ui/GridBackgroundDemo'

const HeroSection = () => {
    return (
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className='p-4 relative z-10 w-full max-w-4xl text-center text-white'>
                {/* <GridBackgroundDemo/> */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className='text-8xl md:text-6xl font-bold mb-6'>Master The Art Of Music</h1>
                <p className='text-lg md:text-xl mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint deleniti error culpa modi recusandae, veniam saepe ex alias tempora sit non provident suscipit mollitia esse aliquam, optio blanditiis sunt.</p>
                <div className='mt-4'>
                    <Link href={"/courses"} className='bg-white text-black rounded-full font-semibold text-sm py-2 px-5 hover:bg-opacity-90 transition duration-300'>
                        Explore Courses
                    </Link>
                </div>
            </div>
        </div>
    
    )
}

export default HeroSection