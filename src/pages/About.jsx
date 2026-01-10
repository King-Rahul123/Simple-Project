import {Link} from "react-router-dom";

function About() {
  return (
    <main className="w-full pt-16 md:pt-20">
        <div className="relative h-[260px] w-full bg-gray-100 flex items-center">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">About us</h1>
                <p className="text-xs tracking-widest font-bold"><Link to="/">Home</Link> &nbsp; / &nbsp; About Us</p>
            </div>
        </div>

        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-15 items-start">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src="/assets/WQ-RED-CORE-2.png" alt="WoodQart Plywood" className="rounded-2xl"/>
                    <img src="/assets/WA-Alternate-2.png" alt="WoodQart Marine Ply" className="rounded-2xl"/>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">About WoodQart</h2>
                    <p className="text-gray-600 leading-relaxed mb-5">Started in 2015, WoodQart. has grown over the years to establish itself as a leading Plywood manufacturer all over India. With our sales office at Nawab City of India - Lucknow, the company has the location advantage of an efficient raw material and manpower supply along with organized transport facilities connecting every nook and corner of the country.</p>
                    <p className="text-gray-600 leading-relaxed mb-5">We have modern and updated machinery along with a professional team of committed, hardworking individuals.</p>
                    <p className="text-gray-600 leading-relaxed">The company has clear, transparent, and explicit policies for acquiring the best available raw materials for plywood. The Plywood on offer is made of specially handpicked timber, and the in-house Resin plant coupled with a state-of-the-art testing laboratory gives us a technical edge. Our commitment to customers is to provide plywood with unparalleled quality at an unbeatable price.</p>
                </div>
            </div>
        </div>
        <div className="px-40">
            <h3 className="text-3xl font-bold mt-6">Our Mission</h3>
            <p>Our mission is to make products in a safe, responsible, reliable, and environmentally sound manner.</p>
            <ul className="list-disc list-inside mt-2">
                <li>To create value for our diverse stakeholders, supply top quality plywood to our buyers.</li>
                <li>To be a top leader in the plywood industry, and achieve 100% Customer Satisfaction.</li>
                <li>To produce all-grade plywood and deliver at the best rate in Pan India.</li>
            </ul>
            <h3 className="text-2xl font-bold mt-6">Our Vision</h3>
            <p>To be the company that best understands and satisfies the product, service, and fulfillment needs of customers. To be recognized in the market as an organization with top-quality plywood at the best possible prices. Our vision is to be :</p>
            <ul className="list-disc list-inside mt-2">
                <li>A company with trustworthy, leading brands for our consumers.</li>
                <li>Our customers' preferred supplier.</li>
                <li>A strong and sound company for our stakeholders.</li>
                <li>A forward-looking company.</li>
                <li>An extraordinary place to work.</li>
            </ul>
        </div>
    </main>
  );
}

export default About;