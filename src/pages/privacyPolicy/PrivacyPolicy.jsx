import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/Breadcrumbs';

const PrivacyPolicy = () => {
    return (
        <div>
        <Helmet>
           <title>Privacy Policy - Legalmate</title>
       </Helmet>

       <Breadcrumbs title="Privacy Policy" />

        <div className='container py-20'>
            <div className='max-w-5xl mx-auto'>
                <h2 className='mb-5 text-xl text-center'> Please read these Privacy Policies carefully before using our website.</h2>

                <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>1. How We Use Your Information:</h4>
                <p className='mb-1'>a. We use your information to facilitate connections between clients and lawyers.</p>
                <p className='mb-1'>b.  Personalized content and recommendations may be provided based on your preferences and usage patterns.</p>
                <p className='mb-5'>c. We may use your information to improve our platform and services.</p>

                <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>2. Information Sharing:</h4>
                <p className='mb-1'>a. We do not sell, rent, or trade your personal information to third parties.</p>
                <p className='mb-1'>b. Your information may be shared with lawyers on our platform to facilitate connections.</p>
                <p className='mb-5'>c. We may disclose information if required by law or to protect our rights.</p>

                <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>3. Security:</h4>
                <p className='mb-1'>a. We employ industry-standard security measures to protect your information.</p>
                <p className='mb-5'>b. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

                <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>4. Cookies and Similar Technologies:</h4>
                <p className='mb-1'>a. We use cookies and similar technologies to enhance your experience on our platform.</p>
                <p className='mb-5'>b. You can manage your cookie preferences through your browser settings.</p>

                <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>5. Children's Privacy:</h4>
                <p className='mb-1'>a. LegalMate is not intended for individuals under the age of 13. We do not knowingly collect personal information from children.</p>
                <p className='mb-5'>b. LegalMate's content, logo, and trademarks are the property of LegalMate and may not be used without permission.</p>

                <h4 className='text-lg lg:text-xl font-semibold mb-2 text-primary'>6. Changes to the Privacy Policy:</h4>
                <p>a. We may update this Privacy Policy to reflect changes in our practices. Users will be notified of significant updates.</p>
            </div>
        </div>
   </div>
    );
};

export default PrivacyPolicy;