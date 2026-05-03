import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, Zoom } from "react-toastify";

const Registration = () => {
  const {
    createUser,
    updateUserProfile,
    // emailVerification,
    // signOutUser,
    signInWithGoogle,
    // signInWithGithub,
  } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  //   User Registration
  const handleRegistration = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;
    const isChecked = e.target.terms.checked;

    // Name without spacing
    const cleanName = displayName.trim().replace(/\s+/g, " ");
    if (!cleanName) {
      setErrorMessage(
        <>
          <p>
            "Must be a meaningful{" "}
            <span className="text-info font-semibold">Name</span> !
          </p>
        </>,
      );
      return;
    }

    // Password types
    // for all
    // const passwordPattern =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

    // uppercase + lowercase + minimum 6 characters
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/;
    if (!passwordPattern.test(password)) {
      //   setErrorMessage(
      //     "Password should be 1 Uppercase, 1 lowercase, 1 digit, 1 special character and minimum 6 characters.",
      //   );
      return toast.error(
        "Password must have at least 1 uppercase, 1 lowercase, and be 6+ characters long.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        },
      );
    }

    // Confirm Password
    if(password !== confirmPassword) {
        return setErrorMessage("Please make sure both passwords match!");
    }

    // Terms tick
    if (!isChecked) {
      return setErrorMessage("Accept Terms & Conditions!");
    }

    setErrorMessage("");

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // update profile
        updateUserProfile(displayName, photoURL).then().catch();

        // email verification
        // emailVerification().then(() => {
        //   if (!result.user.emailVerified) {
        //     toast.success("আপনার ই-মেইলটি ভেরিফাই করুন।", {
        //       position: "top-right",
        //       autoClose: 2000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: false,
        //       draggable: true,
        //       progress: undefined,
        //       theme: "light",
        //       transition: Zoom,
        //     });
        //   }
        // });

        // sign out user
        // signOutUser()
        //   .then(() => {
        // })
        // .catch();
        navigate("/");

        e.target.reset();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          return toast.error("এই ই-মেইলটি আগে ব্যবহার করা হয়েছে!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }
      });
  };

  //   Google Sign In
  const handleGoogleSignIn = () => {
    setErrorMessage("");
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // toast(`স্বাগতম - ${user.displayName}!`, {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: false,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   transition: Zoom,
        // });
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  // Github Sign In
  //   const handleGithubSignIn = () => {
  //     setErrorMessage("");
  //     signInWithGithub()
  //       .then((result) => {
  //         const user = result.user;
  //         toast(`স্বাগতম - ${user.displayName}!`, {
  //           position: "top-right",
  //           autoClose: 2000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: false,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //           transition: Zoom,
  //         });
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.code);
  //       });
  //   };
  return (
    <div className="bg-blue-100 mx-auto rounded-box md:w-2xl px-20 py-10 my-12 min-h-[50vh]">
      <form onSubmit={handleRegistration} className="fieldset ">
        <h1 className="font-bold text-xl md:text-3xl text-center">
          Register Your Account
        </h1>
        <hr className="text-info my-5" />
        {/* Name */}
        <label className="label font-semibold text-sm">Name</label>
        <input
          type="name"
          name="name"
          className="input w-full bg-base-200 border-info outline-none md:py-6 focus:shadow-none"
          placeholder="Enter Your Name"
          required
        />
        {/* Email */}
        <label className="label font-semibold text-sm mt-3">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full bg-base-200 border-info outline-none md:py-6 focus:shadow-none"
          placeholder="Enter Your Email"
          required
        />
        {/* Photo URL */}
        <label className="label font-semibold text-sm mt-3">Photo URL</label>
        <input
          type="url"
          name="photo"
          className="input w-full bg-base-200 border-info outline-none md:py-6 focus:shadow-none"
          placeholder="Enter Your Photo URL"
          required
        />
        {/* Password */}
        <label className="label font-semibold text-sm mt-3">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input w-full bg-base-200 border-info outline-none md:py-6 focus:shadow-none"
            placeholder="Enter Your Password"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-4 right-3 text-base cursor-pointer"
          >
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        </div>
        {/* Confirm Password */}
        <label className="label font-semibold text-sm mt-3">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirm_password"
            className="input w-full bg-base-200 border-info outline-none md:py-6 focus:shadow-none"
            placeholder="Confirm Your Password"
            required
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-4 right-3 text-base cursor-pointer"
          >
            {showConfirmPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        </div>
        {/* T & C */}
        <label className="label mt-2">
          <input
            name="terms"
            onClick={() => setTerms(!terms)}
            type="checkbox"
            className="checkbox checkbox-xs rounded-sm text-info border-info"
          />
          Accept Our Terms & Conditions.
        </label>
        {/* Message */}
        <div className="my-3">
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
        </div>
        {/* Button */}
        <button
          disabled={!terms}
          type="submit"
          className="btn btn-sm md:btn-md btn-neutral hover:shadow-none hover:bg-success hover:border-none hover:text-black"
        >
          Registration
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an Account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
      <p className="text-center">or</p>
      {/* Login with Social */}
      <div className="flex flex-row justify-center items-center gap-3 mt-3">
        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-sm md:btn-md w-fit bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        {/* GitHub */}
        {/* <button
          onClick={handleGithubSignIn}
          className="btn btn-sm md:btn-md w-fit bg-black text-white border-black"
        >
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
        </button> */}
      </div>
    </div>
  );
};

export default Registration;
