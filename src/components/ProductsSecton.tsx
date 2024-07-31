'use client'

import React from 'react';
import courseData from "../data/musix_courses.json";
import { Button } from './ui/moving-border';
import { BackgroundGradient } from './ui/background-gradient';
import Link from 'next/link';

interface Course {
    id: number;
    name: string;
    category: string;
    price: number;
    brand: string;
    stock: number;
    isFeatured: boolean;
}

interface CourseData {
    courses: Course[];
}

const ProductsSection: React.FC = () => {
    const typedCourseData = courseData as CourseData;
    const featuredCourses: Course[] = typedCourseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div className='py-12 bg-black'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-6xl font-bold text-white mb-4'>Featured Courses</h1>
                <p className='text-gray-300 text-xl mb-8'>Explore our handpicked selection of top music courses</p>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4'>
                {featuredCourses.map((course: Course) => (
                    <BackgroundGradient key={course.id} className='rounded-[22px] max-w-sm mx-auto h-full'>
                        <div className='bg-white dark:bg-black rounded-[20px] overflow-hidden p-6 h-full flex flex-col'>
                            <h2 className='text-2xl font-bold mb-4 text-gray-800 dark:text-white'>{course.name}</h2>
                            <p className='text-gray-600 dark:text-gray-300 mb-4 flex-grow'>{course.category}</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg font-semibold text-gray-800 dark:text-white'>${course.price}</p>
                                <Link href={`/courses/${course.id}`}>
                                    <Button borderRadius="1.75rem" className="bg-gray-900 dark:black text-white ">
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>
            <div className='mt-20 text-center'>
                <Link href="/courses">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-gray-800"
                    >
                        View All Courses
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductsSection;