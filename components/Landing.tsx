import { useState, useEffect } from 'react';
import Image from 'next/image';

const Landing = () => {
    // State for the counter
    const [counter, setCounter] = useState(0);
    
    // State for the 5000/5000 count
    const [count, setCount] = useState(5000);

    // Function to handle tap
    const handleTap = () => {
        setCounter(prev => prev + 1);
        setCount(prev => prev > 0 ? prev - 1 : 0);
    };

    // Auto increment 5000/5000 count over time (e.g., every second)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev < 5000 ? prev + 1 : 5000);
        }, 1000); // Increment every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-between h-screen p-5 text-center">
            {/* Header with counter */}
            <header className="w-full">
                <h1 className="text-2xl font-bold">Tap Counter</h1>
                <p className="text-lg mt-2">Counter: {counter}</p>
            </header>
            
            {/* Tap button */}
            <button 
                onClick={handleTap} 
                className="p-5 bg-transparent border-none cursor-pointer"
            >
                <div className="w-28 h-28 rounded-full overflow-hidden">
                    <Image src="/images/tap.png" alt="Tap" width={120} height={120} />
                </div>
            </button>
            
            {/* 5000/5000 count */}
            <footer className="w-full">
                <p className="text-lg">{count}/5000</p>
            </footer>
        </div>
    );
}

export default Landing;
