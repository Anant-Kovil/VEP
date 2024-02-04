'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export function YesNoButton() {
  const [isYesFlashing, setIsYesFlashing] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isStarted) {
      interval = setInterval(() => {
        setIsYesFlashing((prev) => !prev);
      }, 66.67);

      setTimeout(() => {
        clearInterval(interval);
      }, 5000);

      fetch('your_api_url')
        .then((response) => response.json())
        .then((data) => {
          // Handle your API response here
        })
        .catch((error) => console.error('Error:', error));
    }
    return () => clearInterval(interval);
  }, [isStarted]);

  return (
    <div className="h-screen w-screen flex flex-col">
      {!isStarted ? (
        <button
          onClick={() => setIsStarted(true)}
          className="flex-1 flex items-center justify-center text-4xl font-bold"
        >
          Start
        </button>
      ) : (
        <>
          <Link
            style={{
              backgroundColor: isYesFlashing ? 'black' : 'white',
              color: isYesFlashing ? 'white' : 'black',
            }}
            className="flex-1 flex items-center justify-center text-4xl font-bold transition-colors"
            href="#"
          >
            Yes
          </Link>
          <Link
            className="flex-1 flex items-center justify-center text-4xl font-bold"
            href="#"
          >
            No
          </Link>
        </>
      )}
    </div>
  );
}