import Lottie from 'lottie-react';
import animation from '../../../assets/animations/banner-Animation - 1703133385299.json'
import Button from '../../../components/Button/Button';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-purple-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='max-w-5xl'>
                    <Lottie loop={true} animationData={animation}></Lottie>
                </div>
                <div className=''>
                    <h1 className="text-5xl font-bold">Elevate Your Productivity!</h1>
                    <p className="py-6">
                        TaskSync Pro – Your Ultimate Task Management Solution! Seamlessly synchronize and organize your tasks with precision. Boost efficiency, collaboration, and achieve your goals effortlessly. Experience a new era of productivity. Try TaskSync Pro today and take control of your tasks like never before!
                    </p>
                    <Button text={"Let's Explore"}></Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;