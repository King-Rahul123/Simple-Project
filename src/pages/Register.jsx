import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-orange-500 mb-6 text-center">Register</h2>

        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border rounded-full px-4 py-3 focus:outline-none"/>
          <input type="password" placeholder="Password" className="w-full border rounded-full px-4 py-3 focus:outline-none"/>
          <button className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600">Register</button>
          <p className="text-xs">Have an accout? <strong className="text-red-400"><u><Link to="/login">Log-in</Link></u></strong></p>
        </form>
      </div>
    </div>
  );
};

export default Register;