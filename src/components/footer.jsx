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
                        <h3 className="text-white font-semibold mb-4">Our Company</h3>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Media</li>
                            <li>Blog</li>
                            <li>Success Stories</li>
                        </ul>
                    </div>

                    {/* CATEGORIES */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>Plywood</li>
                            <li>Flush Doors</li>
                            <li>Block Boards</li>
                            <li>Shuttering Ply</li>
                            <li>Core & Veneers</li>
                        </ul>
                    </div>

                    {/* PARTNERS */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Partners</h3>
                        <ul className="space-y-2">
                            <li>Place Order</li>
                            <li>Book Visit</li>
                            <li>Become Distributors</li>
                            <li>Sell on Woodqart</li>
                            <li>Buying Guide</li>
                        </ul>
                    </div>

                    {/* PRODUCTS */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li>Marine / BWP Plywood</li>
                            <li>Red Core Plywood</li>
                            <li>Alternate & Semi Alternate</li>
                            <li>Flush Door & Block Board</li>
                            <li>Core & Veneers</li>
                        </ul>
                    </div>

                    {/* QUICK LINK */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Link</h3>
                        <ul className="space-y-2">
                            <li>Warranty & Guarantee</li>
                            <li>Return Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Shipping & Delivery</li>
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
