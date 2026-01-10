import {Link} from "react-router-dom";

const Footer = () => {
  return (

    <footer className="bg-black text-gray-300 mt-16">

        {/* MAIN FOOTER */}
        <div className="max-w-340 mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[80%_20%] gap-16 ">

            {/* LEFT */}
            <div>
                <h1 className="text-5xl text-orange-300 mb-10">woodqart</h1>

                {/* LINKS GRID (5 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {/* OUR COMPANY */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our Company</h3>
                        <ul className="text-gray-400 space-y-3">
                            <li><Link className="hover:text-white" to="/about">About Us</Link></li>
                            <li><Link className="hover:text-white" to="/contact-us">Contact Us</Link></li>
                            <li><Link className="hover:text-white" to="#">Media</Link></li>
                            <li><Link className="hover:text-white" to="#">Blog</Link></li>
                            <li><Link className="hover:text-white" to="#">Success Stories</Link></li>
                        </ul>
                    </div>

                    {/* CATEGORIES */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Categories</h3>
                        <ul className="text-gray-400 space-y-3">
                            <li className="hover:text-white"><a href="#">Plywood</a></li>
                            <li className="hover:text-white"><a href="#">Marine Plywood</a></li>
                            <li className="hover:text-white"><a href="#">BWP Plywood</a></li>
                            <li className="hover:text-white"><a href="#">Flush Doors</a></li>
                            <li className="hover:text-white"><a href="#">Block Boards</a></li>
                            <li className="hover:text-white"><a href="#">Shuttering Ply</a></li>
                            <li className="hover:text-white"><a href="#">Core & Veneers</a></li>
                        </ul>
                    </div>

                    {/* PARTNERS */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Partners</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white"><a href="#">Place Order</a></li>
                            <li className="hover:text-white"><a href="#">Book Visit</a></li>
                            <li className="hover:text-white"><a href="#">Become Distributors</a></li>
                            <li className="hover:text-white"><a href="#">Sell on Woodqart</a></li>
                            <li className="hover:text-white"><a href="#">Buying Guide</a></li>
                        </ul>
                    </div>

                    {/* PRODUCTS */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Products</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white"><a href="#">Marine / BWP Plywood</a></li>
                            <li className="hover:text-white"><a href="#">Red Core Plywood</a></li>
                            <li className="hover:text-white"><a href="#">Alternate & Semi Alternate</a></li>
                            <li className="hover:text-white"><a href="#">Flush Door & Block Board</a></li>
                            <li className="hover:text-white"><a href="#">Core & Veneers</a></li>
                        </ul>
                    </div>

                    {/* QUICK LINK */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Link</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white"><a href="#">Warranty & Guarantee</a></li>
                            <li className="hover:text-white"><a href="#">Return Policy</a></li>
                            <li className="hover:text-white"><a href="#">Terms & Conditions</a></li>
                            <li className="hover:text-white"><a href="#">Privacy Policy</a></li>
                            <li className="hover:text-white"><a href="#">Shipping & Delivery</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="text-white space-y-8">
                {/* CONNECT US */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Connect Us:</h3>
                    <div className="flex gap-4 text-xl">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-youtube"></i>
                        <i className="bi bi-whatsapp"></i>
                    </div>
                </div>

                {/* APP DOWNLOAD */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Download WoodQart App & Place Your Order:</h3>
                    <p className="text-gray-400 mb-4">Assured Discount On Your First Order</p>
                    <div className="flex gap-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10"/>
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10"/>
                    </div>
                </div>
            </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-800 py-4 px-6">
            <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
                <span>© 2026 WoodQart. All rights reserved</span>
                <span>MADE IN INDIA | STARTUP INDIA | MSME | ISO CERTIFIED COMPANY</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
