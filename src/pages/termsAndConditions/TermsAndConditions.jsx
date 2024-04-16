import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const TermsAndConditions = () => {
    return (
        <div>
             <Helmet>
                <title>Terms and Conditions - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Terms and Conditions" />
 
            <div className='container py-20'>
                <div className='max-w-5xl mx-auto'>
                    <h2 className='mb-5 text-xl text-center'> Please read these Terms and Conditions carefully before using our website.</h2>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>1. Use of the Platform:</h4>
                    <p className='mb-1'>a. LegalMate provides an online platform to connect clients with lawyers. Users must use the platform for lawful purposes only.</p>
                    <p className='mb-5'>b. Users are responsible for maintaining the confidentiality of their account information.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>2. User Responsibilities:</h4>
                    <p className='mb-1'>a. Users must provide accurate and up-to-date information when creating an account.</p>
                    <p className='mb-1'>b. Users are responsible for their interactions with lawyers on the platform.</p>
                    <p className='mb-5'>c. Users must not engage in any activity that could harm, disable, or overburden LegalMate.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>3. Lawyer Responsibilities:</h4>
                    <p className='mb-1'>a. Lawyers must provide accurate information about their expertise and qualifications.</p>
                    <p className='mb-5'>b. Lawyers are responsible for the services they offer and must adhere to professional standards.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>4. Payment and Billing:</h4>
                    <p className='mb-1'>a. LegalMate may charge fees for certain services. Users agree to pay all applicable fees.</p>
                    <p className='mb-5'>b. Fees are non-refundable unless otherwise stated.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>5. Privacy:</h4>
                    <p className='mb-5'>a. LegalMate takes user privacy seriously. Please refer to our Privacy Policy for details on how we collect, use, and disclose information.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>6. Content and Intellectual Property:</h4>
                    <p className='mb-1'>a. Users retain ownership of their content but grant LegalMate a license to use, display, and distribute it on the platform.</p>
                    <p className='mb-5'>b. LegalMate's content, logo, and trademarks are the property of LegalMate and may not be used without permission.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>7. Termination:</h4>
                    <p className='mb-5'>a. LegalMate reserves the right to suspend or terminate user accounts that violate these terms.</p>

                    <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>8. Changes to Terms:</h4>
                    <p>a. LegalMate may update these Terms and Conditions. Users will be notified of significant changes.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;