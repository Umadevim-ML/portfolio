import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Uma Devi",
          from_email: form.email,
          to_email: "umadevim.23ai@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='flex flex-col items-center gap-4 pb-10 w-full animate-slide-up'>
      {/* Section Header */}
      <div className='text-center'>
        <h2 className='text-white font-bold text-[40px]'>Contact Me</h2>
        <p className='text-secondary text-[16px] font-medium tracking-wider mt-1'>Let's keep in touch</p>
      </div>

      {/* Main Card */}
      <div className='flex flex-col md:flex-row w-full max-w-[860px] bg-[#0d1333] rounded-[18px] overflow-hidden shadow-2xl'>
        {/* LEFT — Info Panel */}
        <div className='flex-1 bg-[#0d1333] p-9 md:p-11 flex flex-col gap-7'>
          <h3 className='text-[#f97316] text-[24px] font-bold'>Get In Touch</h3>

          {/* Social Icons */}
          <div className='flex gap-5 items-center'>
            <a
              href='https://github.com/Umadevim-ML'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white text-[22px] hover:text-[#f97316] hover:-translate-y-1 transition-all'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/umadevim23/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white text-[22px] hover:text-[#f97316] hover:-translate-y-1 transition-all'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://leetcode.com/u/UmaDeviM/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white text-[22px] hover:text-[#f97316] hover:-translate-y-1 transition-all'
              aria-label='LeetCode'
            >
              <SiLeetcode />
            </a>
          </div>

          {/* Contact Details */}
          <ul className='list-none flex flex-col gap-[18px] m-0 p-0'>
            <li className='flex items-center gap-[14px] text-secondary text-[15px]'>
              <FaPhone className='text-white text-[16px] flex-shrink-0' />
              <span>+91 9362767061</span>
            </li>
            <li className='flex items-center gap-[14px] text-secondary text-[15px]'>
              <FaEnvelope className='text-white text-[16px] flex-shrink-0' />
              <span>umadevim.23ai@gmail.com</span>
            </li>
            <li className='flex items-center gap-[14px] text-secondary text-[15px]'>
              <FaMapMarkerAlt className='text-white text-[16px] flex-shrink-0' />
              <span>Erode, TamilNadu, India</span>
            </li>
          </ul>
        </div>

        {/* RIGHT — Form Panel */}
        <div className='flex-[1.2] bg-[#f1f3f8] p-10 flex items-center justify-center'>
          <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Name'
              className='w-full px-4 py-3 border border-[#dce0ec] rounded-lg bg-white text-[#1a1a2e] text-[14px] outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all'
              required
            />
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email'
              className='w-full px-4 py-3 border border-[#dce0ec] rounded-lg bg-white text-[#1a1a2e] text-[14px] outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all'
              required
            />
            <textarea
              name='message'
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder='Message'
              className='w-full px-4 py-3 border border-[#dce0ec] rounded-lg bg-white text-[#1a1a2e] text-[14px] outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all resize-none'
              required
            />
            <button
              type='submit'
              className='md:self-end self-stretch bg-[#f97316] text-white text-[15px] font-semibold py-3 px-10 rounded-lg hover:bg-[#ea6c0a] hover:-translate-y-0.5 shadow-lg shadow-[#f97316]/30 transition-all active:translate-y-0'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
