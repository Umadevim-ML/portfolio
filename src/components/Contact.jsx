import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
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

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        className='flex-[0.75] glass-morphism p-8 rounded-2xl animate-slide-in-left'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] transition-all'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] transition-all'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] transition-all'
            />
          </label>

          <button
            type='submit'
            className='bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105 active:scale-95 transition-all'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center animate-slide-in-right'
      >
        <div className="relative w-full h-full flex justify-center items-center">
          {/* 3D Visual Replacement for Earth */}
          <div className="w-64 h-64 bg-gradient-to-tr from-[#915EFF] to-[#4e31aa] rounded-full animate-float shadow-[0_0_50px_rgba(145,94,255,0.5)] flex justify-center items-center">
            <div className="w-48 h-48 border-4 border-white/20 rounded-full animate-spin-slow" />
            <div className="absolute w-full h-full border-2 border-[#915EFF]/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="text-white text-6xl opacity-20 font-black">UD</span>
            </div>
          </div>

          {/* Added some floating cards for "3D" feel */}
          <div className="absolute top-10 right-10 p-4 glass-morphism rounded-xl animate-float opacity-80" style={{ animationDelay: '1s' }}>
            <p className="text-[#915EFF] font-bold">Location</p>
            <p className="text-white text-sm">India</p>
          </div>
          <div className="absolute bottom-20 left-10 p-4 glass-morphism rounded-xl animate-float opacity-80" style={{ animationDelay: '2s' }}>
            <p className="text-[#915EFF] font-bold">Email</p>
            <p className="text-white text-sm">umadevim.23ai@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

