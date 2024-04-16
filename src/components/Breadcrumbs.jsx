import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
    return (
        <div className='bg-[url("https://img.freepik.com/premium-photo/law-concept-judge-gavel-books_218381-8923.jpg?size=626&ext=jpg&ga=GA1.1.1692601398.1697860583&semt=ais")] bg-right-top bg-no-repeat bg-cover xl:bg-center'>
            <div className='bg-primary/20 pt-20 md:pt-[160px] pb-8 pb-[60px]'>
                <h1 className='text-center font-semibold text-white text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px] uppercase drop-shadow-lg'>{title}</h1>
                <div className='text-white font-medium text-sm uppercase flex items-center justify-center gap-2 '>
                    <Link to='/'>Home</Link>
                    <span className='text-primary'>/</span>
                    <span className='text-dark-gray'>{title}</span>
                </div>

            </div>
        </div>
    );
};

export default Breadcrumbs;