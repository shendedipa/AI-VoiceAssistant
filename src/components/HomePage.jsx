import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faRobot,
  faMicrophone,
  faLightbulb,
  faComments,
  faEnvelope,
  faClock,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 150) {
          element.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on initial load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden font-sans">
        {/* Hero Section with Integrated Background */}

        <div className="container w-screen h-screen top-0 left-0 relative">
          <div
            className="w-screen h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/ddd.png')" }}
          >
            <div className="lg:w-1/2 max-w-xl">
              <h1 className=" pt-[100px]  ml-10 text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight  reveal">
                Experience <span className=" text-cyan-400">Next-Gen</span>{" "}
                Voice Assistant
              </h1>

              <div
                className="flex ml-10 flex-wrap gap-4 mb-12 reveal"
                style={{ animationDelay: "0.4s" }}
              >
                <button
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 pulse"
                  onClick={() => navigate("/chatbot")}
                >
                  <span>Start Conversation</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
                </button>
                <button
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
                  onClick={() =>
                    document
                      .getElementById("features")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Features
                </button>
              </div>

              <div
                className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 reveal"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 ml-10 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faMicrophone}
                      className="text-blue-600 text-lg"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Voice Enabled</p>
                    <p className="text-sm text-black-600">
                      Natural conversations
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-blue-600 text-lg"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 Available</p>
                    <p className="text-sm text-black-600">
                      Always ready to help
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex justify-center">
              <div className="relative z-10 floating">
                {/* Replace with inline SVG illustration instead of webp for better integration */}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -top-10 right-20 w-20 h-20 bg-pink-400 rounded-full filter blur-3xl opacity-10"></div>
              <div className="absolute -bottom-10 left-20 w-20 h-20 bg-purple-400 rounded-full filter blur-3xl opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        {/* <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#f9fafb"
            preserveAspectRatio="none"
          >
            <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
          </svg>
        </div> */}

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Our Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Everything You Need in a Voice Assistant
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how our advanced AI can transform your interactions
                with technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group hover:bg-blue-50 reveal">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="text-2xl text-blue-600"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  Command Recognition
                </h3>
                <p className="text-gray-600">
                  Give voice commands and our AI will execute them instantly.
                  Experience seamless control with natural language
                  instructions.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2">
                    Learn more{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                  </button>
                </div>
              </div>

              <div
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group hover:bg-blue-50 reveal"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-2xl text-blue-600"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  Information Gathering
                </h3>
                <p className="text-gray-600">
                  Ask for information on any topic, and our AI will provide
                  accurate, well-researched responses tailored to your needs.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2">
                    Learn more{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                  </button>
                </div>
              </div>

              <div
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group hover:bg-blue-50 reveal"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="text-2xl text-blue-600"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  Interactive Conversations
                </h3>
                <p className="text-gray-600">
                  Engage in meaningful and fun conversations with the AI. Learn,
                  explore, and enjoy natural dialogue experiences.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2">
                    Learn more{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works Section with Timeline */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get started with your AI assistant in three simple steps
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline connector for desktop */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-blue-200"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center reveal">
                  <div className="relative">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 z-10 relative shadow-lg">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    Activate
                  </h3>
                  <p className="text-gray-600">
                    Click the button to launch the voice assistant interface and
                    prepare for interaction.
                  </p>
                </div>

                <div
                  className="flex flex-col items-center text-center reveal"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 z-10 relative shadow-lg">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    Speak
                  </h3>
                  <p className="text-gray-600">
                    Ask your question or give a command using natural language
                    just as you would talk to a person.
                  </p>
                </div>

                <div
                  className="flex flex-col items-center text-center reveal"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 z-10 relative shadow-lg">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                    Get Results
                  </h3>
                  <p className="text-gray-600">
                    Receive instant, accurate responses and see your commands
                    executed with precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center reveal">
              <button
                className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg mx-auto"
                onClick={() => navigate("/chatbot")}
              >
                <span>Try It Now</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
              </button>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                What Users Say
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Happy Users
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear what our users have to
                say
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 reveal">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">John Doe</h4>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "This voice assistant has completely changed how I interact
                  with my computer. The natural language processing is
                  incredibly accurate and responsive."
                </p>
                <div className="flex mt-4 text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <div
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 reveal"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                    <p className="text-sm text-gray-500">Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As an educator, I find this tool incredibly useful for quick
                  information gathering during lessons. My students are also
                  fascinated by the technology."
                </p>
                <div className="flex mt-4 text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <div
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 reveal"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">RJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Robert Johnson
                    </h4>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The efficiency this brings to my daily workflow is
                  outstanding. I can multitask while giving voice commands,
                  saving me precious time throughout the day."
                </p>
                <div className="flex mt-4 text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden reveal">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-12 text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-blue-100 mb-8">
                      Have questions or want to know more about our Voice
                      Assistant? Reach out to us and we'll be happy to assist
                      you.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faRobot} className="text-xl" />
                        <span>AI-powered support available 24/7</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-xl"
                        />
                        <span>Receive a response within 24 hours</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FontAwesomeIcon
                          icon={faShieldAlt}
                          className="text-xl"
                        />
                        <span>
                          Your data is secure with end-to-end encryption
                        </span>
                      </div>
                      <div className="bg-blue-700 p-6 rounded-lg mt-8">
                        <p className="font-medium text-lg mb-3">
                          Looking for immediate assistance?
                        </p>
                        <button
                          className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                          onClick={() => navigate("/chatbot")}
                        >
                          Try our chatbot now
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 sm:p-12">
                    <form className="space-y-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-1"
                          htmlFor="name"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-1"
                          htmlFor="email"
                        >
                          Your Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-1"
                          htmlFor="subject"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="How can we help you?"
                          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 mb-1"
                          htmlFor="message"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="Tell us what you need..."
                          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          rows="4"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of users who have already transformed how they
                interact with technology
              </p>
              <button
                className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                onClick={() => navigate("/chatbot")}
              >
                Get Started Now
              </button>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold">AI Voice Assistant</h3>
                <p className="text-gray-400 mt-2">
                  The future of human-computer interaction
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} AI Voice Assistant. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faRobot,
//   faMicrophone,
//   faLightbulb,
//   faComments,
//   faEnvelope,
//   faClock,
//   faShieldAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// import "./HomePage.css";

// const HomePage = () => {
//   const navigate = useNavigate();

//   // Add scroll reveal effect
//   useEffect(() => {
//     const revealElements = document.querySelectorAll(".reveal");

//     const revealOnScroll = () => {
//       revealElements.forEach((element) => {
//         const elementTop = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;

//         if (elementTop < windowHeight - 150) {
//           element.classList.add("revealed");
//         }
//       });
//     };

//     window.addEventListener("scroll", revealOnScroll);
//     revealOnScroll(); // Trigger on initial load

//     return () => window.removeEventListener("scroll", revealOnScroll);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="overflow-x-hidden font-sans">
//         {/* Hero Section with Integrated Background */}

//         <div className="container w-screen h-screen top-0 left-0 relative">
//           <div
//             className="w-screen h-screen bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: "url('/AI.png')" }}
//           >
//             <div className="lg:w-1/2 max-w-xl">
//               <h1 className=" pt-[100px]  ml-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight  reveal">
//                 Experience <span className=" text-cyan-400">Next-Gen</span>{" "}
//                 Voice Assistant
//               </h1>
//               <p
//                 className="text-lg ml-3 sm:text-xl text-blck-600 mb-8 reveal"
//                 style={{ animationDelay: "0.2s" }}
//               >
//                 Control your digital world with just your voice. Our AI
//                 assistant learns from each interaction to provide smarter, more
//                 personalized responses.
//               </p>
//               <div
//                 className="flex ml-3 flex-wrap gap-4 mb-12 reveal"
//                 style={{ animationDelay: "0.4s" }}
//               >
//                 <button
//                   className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 pulse"
//                   onClick={() => navigate("/chatbot")}
//                 >
//                   <span>Start Conversation</span>
//                   <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
//                 </button>
//                 <button
//                   className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
//                   onClick={() =>
//                     document
//                       .getElementById("features")
//                       .scrollIntoView({ behavior: "smooth" })
//                   }
//                 >
//                   Explore Features
//                 </button>
//               </div>

//               <div
//                 className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 reveal"
//                 style={{ animationDelay: "0.6s" }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 ml-3 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <FontAwesomeIcon
//                       icon={faMicrophone}
//                       className="text-blue-600 text-lg"
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">Voice Enabled</p>
//                     <p className="text-sm text-black-600">
//                       Natural conversations
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <FontAwesomeIcon
//                       icon={faClock}
//                       className="text-blue-600 text-lg"
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">24/7 Available</p>
//                     <p className="text-sm text-black-600">
//                       Always ready to help
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
