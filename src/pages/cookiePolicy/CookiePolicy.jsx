import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const CookiePolicy = () => {
    return (
        <div>
             <Helmet>
                <title>Cookie Policy - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Cookie Policy" />

            <div className='container py-20'>
                <div className='max-w-5xl mx-auto'>
                    <h2 className='mb-5 text-xl text-center'> Please read these Cookie Policies carefully before using our website.</h2>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>1. What Are Cookies?</h4>
                    <p className='mb-1'>a. Cookies are small text files that are stored on your device when you visit a website.</p>
                    <p className='mb-5'>b. They help us enhance your user experience by remembering your preferences and actions.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>2. How We Use Cookies:</h4>
                    <p className='mb-1'>a. We use cookies to provide you with a personalized experience and improve our services.</p>
                    <p className='mb-1'>b. Cookies help us understand how you use our website, allowing us to make necessary adjustments.</p>
                    <p className='mb-5'>c. Users must not engage in any activity that could harm, disable, or overburden LegalMate.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>3. Managing Your Cookie Preferences:</h4>
                    <p className='mb-5'>a. You can manage your cookie preferences through your browser settings.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>4. Third-Party Cookies:</h4>
                    <p className='mb-1'>a. LegalMate may use third-party services that use cookies. These third parties have their own privacy policies.</p>
                    <p className='mb-5'>b. Fees are non-refundable unless otherwise stated.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>5. Changes to the Cookie Policy:</h4>
                    <p>va. We may update this Cookie Policy to reflect changes in our practices. Users will be notified of significant updates.</p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;