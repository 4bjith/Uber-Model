import { useRef } from "react";
import LoginForm from "./LoginForm";
import api from "../api/axiosClient";
import { useNavigate } from "react-router-dom";
import UserStore from "../Zustand/UserStore";
import { toast } from "react-toastify";

function Login({ setIsOpen }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { addToken } = UserStore();

  const loginSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    // Step 1: Get current location
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const location = {
          type: "Point",
          coordinates: [position.coords.longitude, position.coords.latitude], // GeoJSON format: [lng,lat]
        };
        try {
          // Step 2: Send location with login request
          const response = await api.post("/login", {
            email,
            password,
            location,
          });
          addToken(response.data.token);
          console.log("Logged in:", response.data);
          toast.success("LogIn successfully !");
          navigate("/home");
        } catch (error) {
          console.error("Login error:", error);
          toast.error(error.response?.data?.message || "Login failed");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        toast.error(
          "Unable to get your location. Please enable location services."
        );
      }
    );
  };
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-[90%] h-[90%] rounded-sm bg-gray-100 md:flex md:h-[50%] md:w-[70%] ">
        {/* login input */}
        <div className="w-full h-[50%] rounded-b-4xl bg-gray-900 flex flex-col justify-center items-center relative md:rounded-r-4xl md:h-full md:rounded-bl-none">
          <h1 className="text-center text-[2rem] tracking-wider font-light text-white text-shadow-2xs text-shadow-blue-800 ">
            If You Don't Have An <br /> Account
          </h1>
          {/* <h2 className="text-[0.9rem] text-gray-200 tracking-wider mb-6">Sign up now..</h2> */}
          <button
            onClick={() => {
              setIsOpen("register");
            }}
            className="text-black backdrop-blur-lg bg-white px-8 py-3 font-semibold rounded-lg shadow-xl shadow-gray-100/50 cursor-pointer transition duration-300 hover:scale-105 "
          >
            Sign Up
          </button>
        </div>
        <div className="w-full h-[50%] md:h-full">
          <LoginForm
            emailRef={emailRef}
            loginSubmit={loginSubmit}
            passwordRef={passwordRef}
          />
        </div>
        {/* <ToastContainer/> */}
      </div>
    </div>
  );
}

export default Login;
