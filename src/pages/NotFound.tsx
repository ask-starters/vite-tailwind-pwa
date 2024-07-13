import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='flex flex-row w-full h-screen items-center justify-center'>
            <div className='flex flex-row border border-slate-500 items-center justify-center cursor-pointer rounded-md px-10 py-6'>
                404 - Page not found. Redirecting to home page in 2 seconds...
            </div>
        </div>
    );
};

export default NotFoundPage;