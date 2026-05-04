import React from "react";
import { toast, Zoom } from "react-toastify";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FAQ = () => {
  const handleContactUs = () => {
    toast.info(
      "Thank you for reaching out ❤️! We'll get back to you shortly!",
      {
        position: "top-right",
        autoClose: 2000,
        transition: Zoom,
      },
    );
  };

  const faqs = [
    {
      q: "How can I add a food review?",
      a: "Simply log in and click on 'Add Review'. Fill in the details and share your experience.",
    },
    {
      q: "Can I edit or delete my reviews?",
      a: "Yes! Go to 'My Reviews' and you can update or remove any review you posted.",
    },
    {
      q: "How does the rating system work?",
      a: "Users can rate food from 1 to 5 stars based on their experience.",
    },
    {
      q: "What is the favorite feature?",
      a: "You can save your favorite foods by clicking the heart icon and access them later in 'My Favorites'.",
    },
  ];

  return (
    <div className="bg-green-50 py-16 px-5 rounded-lg">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
        ❓ Foodians Help & FAQ
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Everything you need to know about using Foodians
      </p>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* 🔥 Lottie Animation */}
        <div className="flex justify-center">
          <DotLottieReact
            src="/FAQ.lottie"
            loop
            autoplay
            style={{ width: "280px", height: "280px" }}
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-white shadow-sm rounded-xl border"
            >
              <input type="radio" name="faq-accordion" />

              <div className="collapse-title text-base md:text-lg font-semibold text-gray-800">
                {item.q}
              </div>

              <div className="collapse-content text-gray-600 text-sm leading-relaxed">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <div className="text-center mt-10">
        <p className="text-gray-600">Still have questions?</p>

        <button
          onClick={handleContactUs}
          className="mt-3 btn btn-success text-black shadow-none border-none hover:btn-neutral hover:text-white"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQ;
