import ReadMoreSection from "../components/readmore";

function Home() {
  return (
    <main className="w-full overflow-x-hidden px-4 md:px-6 pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto hover:max-w-370 md:hover:shadow-lg transition-all duration-300">
        <img src="/assets/WoodQart-Plywood-Banner-2-1.png" alt="WoodQart Banner" className="rounded-lg"/>
      </div>

      {/* WoodQart Plywood - All Grade */}
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl font-bold">WoodQart Plywood - All Grade</h1>
        <p className="text-gray-500">We Are The Largest Plywood & Blockboard Manufacturer & Supplier</p>

        {/* Cards 1st row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 max-w-6xl mx-auto place-items-center">
          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 text-center" src="#">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img src="/assets/1.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">MARINE GRADE &<br />RED CORE PLY</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">IS:710 | WATER PROOF | 100% EUCALYPTUS CORE | FULL CORE | GURJAN FACE</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-5 md:p-8 text-center">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img  src="/assets/2.jpg"  alt=""  className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">ALTERNATE PLY |<br />RED & WHITE</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">IS:303 | EUCALYPTUS & POPLAR CORE | FULL CORE | GURJAN FACE</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-5 md:p-8 text-center">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img src="/assets/3.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">SEMI – ALTERNATE<br />PLYWOOD</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">IS:303 | EUCALYPTUS, POPLAR & HARDWOOD CORE | OKOMO FACE</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl p-5 md:p-8 text-center">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img src="/assets/4.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">SUPER MR |<br />COMMERCIAL MR</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">IS:303 | HARDWOOD CORE | SHORT & FULL CORE | OKOMO FACE</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>
        </div>

        {/* Cards 2nd row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 max-w-6xl mx-auto place-items-center">
          {/* CARD 5 */}
          <div className="bg-white rounded-3xl p-5 md:p-8 text-center">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img src="/assets/5.png" alt="" className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">FLUSH DOOR</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">IS:2202 I HARDWOOD I MIX WOOD I SINGLE, DOUBLE & TRIPLE CORE</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>

          {/* CARD 6 */}
          <div className="bg-white rounded-3xl p-5 md:p-8 text-center">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img  src="/assets/6.jpg"  alt=""  className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">BLOCK BOARD</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">IS:1659 I HARDWOOD & MIX WOOD I OKUMA & GURJAN FACE</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>

          {/* CARD 7 */}
          <div className="bg-white rounded-3xl p-5 md:p-8 text-center">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img src="/assets/7.webp" alt="" className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">SHUTTERING PLY</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">25 KG - 30KG I MR I MUF I PF I RED & BLACK FILM I MIRROR FINISH</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>

          {/* CARD 8 */}
          <div className="bg-white rounded-3xl p-5 md:p-8 text-center">
            <div className="w-30 h-30 mx-auto rounded-full border-2 border-orange-500 overflow-hidden mb-6">
              <img src="/assets/8.webp" alt="" className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-lg font-semibold mb-3">CORE & VENEER</h3>
            <div className="w-11 h-0.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
            <p className="mt-2 text-sm text-gray-600 mb-6 leading-relaxed">EUCALYPTUS I POPLAR I HARDWOOD I MIC WOOD CORE I SHORT CORE</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full border-2 border-gray-100 font-semibold shadow hover:bg-orange-600 transition"><a href="https://wa.me/918145322318" target="_blank" rel="noreferrer">Details & Photos</a></button>
          </div>
        </div>
      </div>

      {/* WoodQart Assurance & Promise */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-15 text-center">
        <h1 className="text-3xl font-bold">WoodQart Assurance & Promise</h1>
        <div className="relative mt-4">
          <div className="h-px bg-gray-300 w-280 ml-20"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-px h-0.5 w-115 bg-orange-400 rounded-full"></div>
        </div>

        {/* Cards 1st row */}
        <div className="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <img src="/assets/W.png" alt="" className="mx-auto mb-1 h-15 w-18"/>
              <h2 className="text-xl font-semibold mb-2">WIDE RANGE</h2>
              <p className="text-xs">WoodQart is the largest manufacturer and supplier of all grade Plywood, Block Board, Flush Doors, Shuttering Ply, Core and Veneers. All your need under same roof.</p>
            </a>
          </div>

          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <img src="/assets/X.png" alt="" className="mx-auto mb-1 h-15 w-18"/>
              <h2 className="text-xl font-semibold mb-2">X4 QUADRA PRESSED</h2>
              <p className="text-xs">All WoodQart we ensure uniform bonding and distribution of adhesive thought the panel, which involve pressing the layers of veneers in the plywood panel four times.</p>
            </a>
          </div>

          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <img src="/assets/Glue.png" alt="" className="mx-auto mb-1 h-15 w-18"/>
              <h2 className="text-xl font-semibold mb-2">GLUE LINE TESTED</h2>
              <p className="text-xs">GLT treatment enhances the bonding strength of the glue lines, making them more resistant to moisture and environmental factors. It helps to prevent delamination and ensures the longevity and durability of the plywood, especially in humid or damp conditions.</p>
            </a>
          </div>

          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <img src="/assets/Proof.png" alt="" className="mx-auto mb-1 h-15 w-18"/>
              <h2 className="text-xl font-semibold mb-2">BORER TERMITE PROOF</h2>
              <p className="text-xs">WoodQart ensures that the plywood remains protected against insect infestations, particularly borers and termites. It makes the plywood suitable for use in areas prone to insect attacks, such as tropical or humid regions.</p>
            </a>
          </div>
        </div>
        {/*Cards 2nd row */}
        <div className="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <i className="bi bi-list text-5xl text-orange-700 mb-1 inline-block"></i>
              <h2 className="text-xl font-semibold mb-2">6 STAGE QUALITY TEST</h2>
              <p className="text-xs">At WoodQart we ensure every plywood passed with different quality test team. The Core Team, Glue Team, Press Team, Sanding & MR Team, Finishing Team & Loading Team.</p>
            </a>
          </div>

          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <img src="/assets/BWP.png" alt="" className="mx-auto mb-1 h-15 w-18"/>
              <h2 className="text-xl font-semibold mb-2">BWP & BWR</h2>
              <p className="text-xs">WoodQart manufacture water Proof & Water Registant Products. From Plywood to Flush Doors all are products can be manufacture in BWP & BWR Grade.</p>
            </a>
          </div>

          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <img src="/assets/Heat.png" alt="" className="mx-auto mb-1 h-15 w-18"/>
              <h2 className="text-xl font-semibold mb-2">HEAT RESISTANT</h2>
              <p className="text-xs">Fire-related accident don't knock on your door before they occur, but we need to be prepared in the event of a fire hazard. WoodQart's fire resistant delays flame penetration through the sheet by at least 30 - 50 minutes.</p>
            </a>
          </div>

          <div className="p-6 border rounded-sm bg-white border-orange-700">
            <a href="#">
              <img src="/assets/Transport.png" alt="" className="mx-auto mb-1 h-15 w-18"/>
              <h2 className="text-xl font-semibold mb-2">On Time Delivery</h2>
              <p className="text-xs">WoodQart promises to deliver the finest quality and on time delivery anywhere in India. At woodQart we value our customer's trust and maintain a long and healthy relationship by delivery high quality and promised products. From manufacturing to delivery you can track and be updated with each and every step of your product stage.</p>
            </a>
          </div>
        </div>
      </div>

      {/* TOP SELLING WOODQART PRODUCTS */}
      <div className="max-w-7xl mx-auto mt-10 md:mt-15 text-center">
        <h1 className="text-2xl font-bold">TOP SELLING WOODQART PRODUCTS</h1>
        <div className="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">

          <div>
            <img src="/assets/WQ-RED-CORE-2.png" alt="" className="mx-auto mb-4"/>
          </div>

          <div>
            <img src="/assets/WA-Alternate-2.png" alt="" className="mx-auto mb-4"/>
          </div>
          
          <div>
            <img src="assets/WQ-Super-MR-2.png" alt="" className="mx-auto mb-4"/>
          </div>
          
          <div>
            <img src="/assets/WQ-MR-2.png" alt="" className="mx-auto mb-4"/>
          </div>
          
          <div>
            <img src="/assets/WQ-FLUSH-DOOR-2.png" alt="" className="mx-auto mb-4"/>
          </div>
        </div>
      </div>

      {/* Plywood Uses & Designs */}
      <div className="max-w-7xl mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold">Plywood Uses & Designs</h1>
        <p className="text-gray-500">WoodQart plywood can be use in your daily life explore where and how they are used.</p>
        <img src="/assets/image.png" alt="Plywood Uses & Designs" className="mx-auto mt-4 w-full h-auto rounded-lg shadow-md"/>
      </div>

      {/* Types of Woods & Uses */}
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl font-bold">Types of Woods & Uses</h1>
        <p className="text-gray-500">Discover various types woods use to manufacture plywood and uses.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 max-w-5xl mx-auto place-items-center">
          <div>
            <img src="/assets/Eucalyptus-1.png" alt="" className="mx-auto mb-4"/>
          </div>
          <div>
            <img src="/assets/poppler-woods.png" alt="" className="mx-auto mb-4"/>
          </div>
          <div>
            <img src="/assets/Kokaat.png" alt="" className="mx-auto mb-4"/>
          </div>
          <div>
            <img src="/assets/Rosewood.png" alt="" className="mx-auto mb-4"/>
          </div>
        </div>
      </div>

      {/* Wood Manufacturing & Order Process */}
      <div className="max-w-7xl mx-auto mt-20 px-6">
        <h1 className="text-3xl font-bold">Wood Manufacturing & Order Process</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT : IMAGE WITH SHAPE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[60%_40%_55%_45%/50%_60%_40%_50%]">
              <img
                src="/assets/Plywood-Factory.jpg"
                alt="Plywood Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT : CONTENT */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Manufacturing Process</h3>
            <p className="text-gray-600 leading-relaxed mb-6">The manufacture of hardwood plywood consists of nine main processes: log storage, log debarking and bucking, heating the logs, peeling the logs into veneers, drying the veneers, gluing the veneers together, pressing the veneers in a hot press, plywood cutting, and other finishing processes such as sanding.</p>
            <p className="text-gray-600 leading-relaxed mb-8">Our team ensures and checks all the necessary measures at the time of manufacturing and loading. We deliver what we promise.</p>

            <h3 className="text-xl font-semibold mb-4">Order Process</h3>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-semibold">Step 1:</span> Choose your product, select the size, and confirm. Make the token payment.</li>
              <li><span className="font-semibold">Step 2:</span> You will be updated hour by hour about your manufacturing stage.</li>
              <li><span className="font-semibold">Step 3:</span> We deliver the plywood at your shop/godown without any hassle.</li>
            </ul>
          </div>
        </div>
      </div>
      <ReadMoreSection />
    </main>
  );
}

export default Home;
