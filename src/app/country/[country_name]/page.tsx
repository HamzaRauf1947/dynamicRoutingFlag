'use client';
import Button from '@/app/component/Button';
import countries from '@/app/data/countries';
import Link from 'next/link';

export default function CountryDetails({ params }: { params: { country_name: string } }) {
    const countryName = params.country_name;
    const country = countries.find((c) => c.name.toLowerCase() === countryName.toLowerCase());

    if (!country) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center shadow-xl bg-white">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Country Not Found</h1>
                <p className="text-lg text-gray-700 mb-4">We're sorry, but we couldn't find the country you were looking for.</p>
                <Link href="/country" className="text-blue-500 hover:underline text-lg">
                    Go back to Country List
                </Link>
            </div>
        );
    }

    return (
        <div 
            className="flex items-center justify-center h-screen" 
            style={{ backgroundImage: `url(${country.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
                <p className="text-lg mb-2">Population: <span className="font-semibold">{country.population.toLocaleString()}</span></p>
                <p className="text-lg mb-2">Capital: <span className="font-semibold">{country.capital}</span></p>
                <Link href="/country" className="text-blue-700 hover:underline text-lg">
                    Go back to Country List
                </Link>
                <Button />
            </div>
        </div>
    );
}
