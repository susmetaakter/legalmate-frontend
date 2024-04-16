import Lottie from "lottie-react";
import Animation from "../../public/loader.json";
const PageLoader = () => {
    return (
        <div className='w-96 h-96 mx-auto flex items-center justify-center overflow-hidden'>
            <Lottie animationData={Animation}
                className="w-full"
            ></Lottie>
        </div>
    );
};

export default PageLoader;