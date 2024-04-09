import React from 'react';

const ChartValue = ({ priceVal }: { priceVal: number }) => {
    const heightVal = priceVal * 2
    return (
        <div className="flex flex-col items-center justify-end align-text-bottom">
            <div className="w-4 mx-2 bg-gray-400" style={{ height: heightVal }} />
            <h1>{priceVal}</h1>
        </div>
    );
};

export default ChartValue;
