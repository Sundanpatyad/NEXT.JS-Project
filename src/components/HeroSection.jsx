import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
    return (
        <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-slate-200/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className='p-4 relative z-10 w-full max-w-4xl text-center text-white'>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className='text-5xl md:text-7xl lg:text-8xl w-full font-semibold mb-6'>Master The Art Of Music</h1>
                <p className='text-lg md:text-xl mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint deleniti error culpa modi recusandae, veniam saepe ex alias tempora sit non provident suscipit mollitia esse aliquam, optio blanditiis sunt.</p>
                <div className='mt-4'>
                    <Link href={"/courses"}>
                        <Button borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection