import {   useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { AuthContext } from "../../components/Context/UserContext";

export const Signup = () => {
  const [error,setError] = useState(null);
 const {createUser,logOut} = useContext(AuthContext)
  const navigate = useNavigate();


  const handleSubmit =(event) =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.Password.value;
      const confirm = form.confirm.value;
      console.log(email,password,confirm)
    
      if (password.length < 6) {
          setError("Password should be 6 characters or more");
          return;
      }


      if (password !== confirm) {
          setError("Your password did not match");
          return;
      }
     else{
      setError("");
     }

     createUser(email,password)
     .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      logOut();

navigate('/login')
     })

     .catch(error => console.log(error))

  }

    return (
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Our goal is to make your Party planning experience as stress-free and enjoyable as possible.<br className="hidden md:block" />
                  
                  <span className="text-teal-accent-400">lazy dog</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Our experienced team of  planners will guide you through every step of the
                 planning process, ensuring that no detail is overlooked. We'll also handle all of the logistics,
                  so you can relax and enjoy your  day with your loved ones.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                      >
                        First name
                      </label>
                      <input
                        placeholder="Enter "
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium"
                      >
                        Last name
                      </label>
                      <input
                        placeholder="Doe"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium" 
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="Enter Your Email"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="Password"
                        className="inline-block mb-1 font-medium" 
                      >
                        Password
                      </label>
                      <input
                        placeholder="Enter Your Password"
                        required
                        type="Password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                 
                        name="Password"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="Password"
                        className="inline-block mb-1 font-medium" 
                      >
                      Confirm Password
                      </label>
                      <input
                        placeholder="Enter Your Password again"
                        required
                        type="Password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                       
                        name="confirm"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-black tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                     You have already a account <Link to='/login'>Login</Link>
                   {error}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }