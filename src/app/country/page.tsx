// src/app/country/page.js
import Link from 'next/link';
import React from 'react';
import countries from '../data/countries';
import Image from 'next/image';
import Button from '../component/Button';

export default function CountryList() {
    return (
        <div className='bg-gradient-to-b from-gray-800 to-gray-500"'>
            <h1 className="text-4xl font-bold text-center mb-8 text-white pt-8">Country List</h1>
            <ul className="max-w-[1170px] m-auto  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1  px-4 gap-8">
                {countries.map((country) => (
                    <li 
                        key={country.name} 
                        className="bg-white shadow-lg  rounded-lg transition-transform transform hover:scale-105 h-80  border border-gray-200 hover:shadow-xl overflow-hidden "
                    >
                        <Link className="flex flex-col items-center h-full" href={`/country/${country.name.toLowerCase()}`}>
                           
                            <div className="relative w-full h-full"> 
                                <Image 
                                    src={country.image} 
                                    alt={country.name} 
                                    layout="fill"  
                                    objectFit="cover"  
                                    className="rounded-t-lg"
                                />
                            </div>

                           
                            <div className="w-full bg-gray-100 py-4 text-center mt-auto">
                                <div className="text-blue-700 hover:underline text-xl font-bold">
                                    {country.name}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Button />
           
        </div>
    );
}
