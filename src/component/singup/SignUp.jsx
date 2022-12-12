import axios from "../../api/axios";
import Google from "../Form/Google";
import Cookies from "universal-cookie";
import Facebook from "../Form/Facebook";
import Header from "../Form/Header";
import Footer from "../Form/Footer";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const cookies = new Cookies();
  const [email, setEmail] = useState("");
  email();
  const [password, setPassword] = useState("");
  const [openP, setOpenP] = useState("false");
  const toggleP = () => {
    setOpenP(!openP);
  };
  password();

  const [confirm, setConfirm] = useState("");
  const [openC, setOpenC] = useState("false");

  const toggleC = () => {
    setOpenC(!openC);
  };
  confirm();
  const navigate = useNavigate();
  const data = {
    email: 'email',
    password: 'password',
    confirm: 'confirm',
  };

  console.log(data);
  const handleApi = async (e) => {
    e.preventDefault();

    axios
      .post("auth/user/register", data)
      .then(function (response) {
        navigate("/SignUpC");
        console.log(response.data);
        console.log(response);
        localStorage.setItem(response.data);
        cookies.set("SignUptoken", response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className=" text-md ">
      <div className="mx-12 pl-12 pr-12relative flex flex-col justify-center  min-h-screen w-full overflow-hidden	">
        <div className="  px-10  ml-4 ">
          <Header />
          <h1 className="text-s pr-12 mr-12 font-semibold text-center text-black-400	">
            SIGN UP
          </h1>
          <form className="mt-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email Address
            </label>
            <div className="flex ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block  w-3/4	 px-5 py-2 mt-2 text-orange-400 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="absolute text-md right-14 mr-14 mt-5 px-14	">
                <FaEnvelope />
              </span>
            </div>

            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="flex ">
              <input
                type={openP === false ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block  w-3/4	 px-5 py-2 mt-2 text-orange-400 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="absolute text-md right-14 mr-14 mt-5 px-12	">
                {openP === false ? (
                  <FaEye onClick={toggleP} />
                ) : (
                  <FaEyeSlash onClick={toggleP} />
                )}
              </span>
            </div> 
            <label
              for="confirm password"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <div className="flex ">
              <input
                type={openC === false ? "password" : "text"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="block  w-3/4	 px-5 py-2 mt-2 text-orange-400 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="absolute text-md right-14 mr-14 mt-5 px-12	">
                {openC === false ? (
                  <FaEye onClick={toggleC} />
                ) : (
                  <FaEyeSlash onClick={toggleC} />
                )}
              </span>
            </div>

            <div className="mt-4">
              <button
                onClick={handleApi}
                className="w-3/4	 px-5 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-400 rounded-full hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
              >
                Send Confirmation Code
              </button>
            </div>
          </form>

          <p className="mt-2  ml-2 w-3/4	 px-8 py-2 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <a
              href="/SignIn"
              className="font-medium text-orange-400 hover:underline"
            >
              Sign In
            </a>
          </p>
          <Google />
          <Facebook />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
