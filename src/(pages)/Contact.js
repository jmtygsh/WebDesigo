'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha"; // Import the v2 component

// Icon Components (retained for the design)
const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MessageSquareIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const PhoneIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MapPinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [responseMessage, setResponseMessage] = useState('');


    // State to hold the reCAPTCHA token
    const [captchaToken, setCaptchaToken] = useState(null);
    // Ref to access the reCAPTCHA component
    const recaptchaRef = useRef(null);


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            // Use a regular expression to remove any characters that are not
            // letters, numbers, '@', '.', '_', or '-'
            const filteredValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');

            setFormData((prevData) => ({
                ...prevData,
                [name]: filteredValue, // Use the filtered value for the email
            }));
        } else {
            // For all other fields, update as normal
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setResponseMessage('');

        // 1. Check if the user has completed the reCAPTCHA
        if (!captchaToken) {
            setStatus('error');
            setResponseMessage('❌ Please complete the reCAPTCHA challenge.');
            return; // Stop the submission
        }

        try {
            // 2. Send the form data AND the captcha token to your API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    token: captchaToken, // Include the token
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setResponseMessage('✅ Thank you! Your message has been sent.');
                setFormData({ name: '', email: '', message: '' });
                // 3. Reset the reCAPTCHA checkbox after successful submission
                recaptchaRef.current.reset();
                setCaptchaToken(null);
            } else {
                setStatus('error');
                setResponseMessage(data.message || '❌ Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setResponseMessage('❌ An unexpected error occurred. Please try again later.');
            console.error('Submission error:', error);
        }
    };

    return (
        <div className="text-gray-300 mt-10">
            <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-2xl md:text-4xl/15 font-bold tracking-tight text-white">Contact Us</h1>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-center">
                        Ready to start your next project? Our team is here to help you succeed. Reach out and let&apos;s discuss how we can bring your ideas to life.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Contact Information */}
                    <div className="space-y-6">
                        {/* Email Block */}
                        <div className="flex items-start p-6 bg-slate-800 rounded-lg border border-slate-700">
                            <div className="flex-shrink-0">
                                <MailIcon className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-white">Email</h3>
                                <p className="text-gray-400 mt-1">Get a response within 24 hours</p>
                                <a href="mailto:thewebdesigo@gmail.com" className="mt-2 inline-block text-indigo-400 font-medium hover:text-indigo-300 transition-colors">thewebdesigo@gmail.com</a>
                            </div>
                        </div>

                        {/* Phone Block */}
                        <div className="flex items-start p-6 bg-slate-800 rounded-lg border border-slate-700">
                            <div className="flex-shrink-0">
                                <PhoneIcon className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-white">Phone</h3>
                                <p className="text-gray-400 mt-1">Mon-Fri, 9AM-6PM EST</p>
                                <a href="tel:+15551234567" className="mt-2 inline-block text-indigo-400 font-medium hover:text-indigo-300 transition-colors">+1 (555) 123-4567</a>
                            </div>
                        </div>

                        {/* Live Chat Block */}
                        <div className="flex items-start p-6 bg-slate-800 rounded-lg border border-slate-700">
                            <div className="flex-shrink-0">
                                <MessageSquareIcon className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                                <p className="text-gray-400 mt-1">Instant support available now</p>
                                <a href="#" className="mt-2 inline-block text-indigo-400 font-medium hover:text-indigo-300 transition-colors">Start chatting</a>
                            </div>
                        </div>

                    </div>


                    {/* Right Column: Contact Form */}
                    <div>
                        <h2 className="text-xl font-bold text-white">Send us a message</h2>
                        <p className="mt-2 text-slate-400 max-w-[90%] md:max-w-full ">
                            Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Doe"
                                    required value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2.5 bg-slate-800 
                                    border border-slate-600 rounded-md shadow-sm  
                                    sm:text-sm text-white placeholder-gray-500 outline-0
                                    " />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john.doe@company.com"
                                    required value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2.5 bg-slate-800 border border-slate-600 
                                rounded-md shadow-sm sm:text-sm text-white placeholder-gray-500 outline-0" />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Tell us about your project, goals, or how we can help..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2.5 bg-slate-800 border border-slate-600 rounded-md 
                                    shadow-sm sm:text-sm resize-none text-white placeholder-gray-500 outline-0">

                                </textarea>
                            </div>

                            {/* Add the reCAPTCHA Component here */}
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={(token) => setCaptchaToken(token)}
                                onExpired={() => setCaptchaToken(null)} // Reset token if it expires
                            />



                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>

                            {/* Response Message */}
                            {status !== 'idle' && (
                                <p className={`text-center text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {responseMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
