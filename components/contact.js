'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    if (!formData.privacy) newErrors.privacy = 'You must agree to the privacy policy.';
    // if (!recaptchaValue) newErrors.recaptcha = 'Please verify you are not a robot.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email: formData.email,
          subject: 'Contact Form from Nexlogicx',
          message: formData.message,
          captcha: recaptchaValue,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error('Submission failed', data);
        setErrors((prev) => ({ ...prev, submit: data?.message || 'Submission failed.' }));
        return;
      }

      console.log('Success:', data);
      setFormData({ firstName: '', lastName: '', email: '', message: '', privacy: false });
      setRecaptchaValue(null);
    } catch (err) {
      console.error('Network error', err);
      setErrors((prev) => ({ ...prev, submit: 'Network error. Please try again.' }));
    }
  };

  return (
    <section id="contact" className="w-full bg-[#FBF9F5] py-8 md:py-14 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFE5D9] rounded-tl-full"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="w-full max-w-xl">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full mb-6 bg-gradient-to-r from-[#FB432C] to-[#FF591E]">
              <span className="text-sm font-medium text-white">Get in touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#112967] mb-4 leading-tight">
              Contact <span className="font-semibold">Us</span>
            </h2>
            <p className="text-[#666666] text-base mb-8">
              We'd love to hear from you. Please fill out this form.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#344054] mb-2">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm placeholder:text-[#98A2B3]"
                  />
                  {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#344054] mb-2">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm placeholder:text-[#98A2B3]"
                  />
                  {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-[#344054] mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm placeholder:text-[#98A2B3]"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-[#344054] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a message..."
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent text-sm resize-none placeholder:text-[#98A2B3]"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="w-4 h-4 mt-0.5 accent-[#FF5722] border-[#D0D5DD] rounded cursor-pointer"
                />
                <label htmlFor="privacy" className="text-sm text-[#475467] cursor-pointer leading-tight">You agree to our friendly privacy policy.</label>
              </div>
              {errors.privacy && <span className="text-red-500 text-sm">{errors.privacy}</span>}

              <div className="mt-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "123abc"}
                  onChange={handleRecaptchaChange}
                />
                {errors.recaptcha && <span className="text-red-500 text-sm">{errors.recaptcha}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645] hover:from-[#F47230] hover:to-[#EA5C1A] text-white py-3 rounded-full font-semibold transition-all duration-200 text-base shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="relative hidden md:flex items-start justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-transparent rounded-3xl p-6 shadow-lg border border-[#FF5722]">
                <img
                  src="/contact-bg.webp"
                  alt="Contact"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
