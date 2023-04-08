import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:jit.avi.saha2997@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    console.log(formData);
  };
  return (
    <div className="h-screen w-full flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-36 uppercase tracking-[20px] text-black text-2xl font-semibold">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-10">
        <div className="space-y-7">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#000] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">+8801785483702</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#000] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">jit.avi.saha2997@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#000] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">Dhaka 1206, Bangladesh</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col space-y-1 md:flex-row md:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#fff] py-5 px-10 border border-[#050A30] transition-all duration-500 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
