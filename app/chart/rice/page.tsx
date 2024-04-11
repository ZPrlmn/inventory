import React from 'react';
import RicePriceChart from './RicePriceChart';
import Link from 'next/link';

export default function RicePriceHome () {
    return (
        <div className="flex flex-col items-center justify-end align-text-bottom">
            <h1 className="text-xl self-start">Rice Chart Value From Grains to Rice</h1>
            <div className="bg-white dark:bg-gray-950 rounded-lg mt-5">
                <div className="flex flex-row pt-5 px-5 justify-between">
                    <RicePriceChart priceVal={32}/>
                    <RicePriceChart priceVal={28}/>
                    <RicePriceChart priceVal={31}/>
                    <RicePriceChart priceVal={34}/>
                    <RicePriceChart priceVal={33}/>
                    <RicePriceChart priceVal={29}/>
                    <RicePriceChart priceVal={32}/>
                    <RicePriceChart priceVal={34}/>
                </div>
                <div className="flex flex-row justify-between h-10 w-full px-7">
                    <h1>Jan</h1>
                    <h1>Feb</h1>
                    <h1>Mar</h1>
                    <h1>Apr</h1>
                    <h1>Now</h1>
                </div>
            </div>
        </div>
    );
};

