const LandingPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center p-8 animate-fadeIn'>
            <div className='max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300'>
                <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-center mb-4'>
                    Welcome to Vite-Tailwind PWA! ✨
                </h1>
                <p className='text-lg text-gray-600 text-center mb-6'>
                    Your awesome project starts here 🚀
                </p>
                <div className='flex justify-center gap-4'>
                    <button className='px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-pink-200'>
                        Get Started
                    </button>
                    <button className='px-6 py-3 bg-white text-gray-700 rounded-full font-medium border-2 border-purple-200 hover:border-purple-400 transition-colors shadow-lg hover:shadow-purple-100'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;