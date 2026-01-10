import { useState } from "react";

const ReadMoreSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-16 px-6 text-gray-600 text-sm leading-relaxed">
      <h2 className="uppercase font-semibold text-gray-700 mb-4">BUY HIGH QUALITY PLYWOOD & VENEERS AT THE BEST PRICES FROM WOODQART</h2>
      <p>Plywood is of the most used materials in home construction. They are used to make doors, partitions, false ceilings, cabinets, shelves, sheathing, etc. Here at WoodQart, you can find all types and grade of plywood from Red Core to Alternate to MR Grade to Commercial Plywood. Now there is no need to make Google searches for the best plywood manufacturer near. WoodQart helps retails, dealers, distributors to sell WoodQart brands and also help them to established their own brands of plywood.</p>
      <p className="mt-2">You can explore our collection and order plywood online at the best prices. We offer plywood from all the major woods and face, including Gurjan, Okuma, Eucalyptus, Poplar, Kadam, Lamboo, Arra, Kokaat, and many many more.</p><br />
      <h2 className="uppercase font-semibold text-gray-700 mb-4">A Guide to Choosing the Best Plywood and Face for Your Home</h2>
      <p>Gone are the days when plywood are used to be among the most rarely used materials. In the last few years, they have grown in demand and are currently among the most sought-after building materials. As a result, there are a plethora of options available in the market for plywood. The type of plywood and face you use in your house has the potential to improve the longevity of the entire</p>

      {/* EXTRA CONTENT */}
      {expanded && (
        <>
          <p>space, so it is important to be careful while taking your pick. After all, with so many options available to choose from, selecting the best one can be quite a task.</p>
          
          <h3 className="font-semibold mt-6 text-gray-700">Plywood:</h3>
          <p className="mt-2">Whether you plan to buy plywood online or are searching for plywood hardware shop near me, it is important to keep a few factors in mind. The plywood grade is undoubtedly the most important of them. It refers to the quality of the plywood and also determines where that particular type of plywood can be used.</p>
          <p className="mt-2">There are four different grades of plywood that are used in home construction. Some of the most common ones are:</p>
          <ul className="list-disc list-inside mt-2">
            <p className="mt-2"><strong>MR Grade</strong> - MR or Moisture Resistant grade plywood, as the name suggests, is resistant to humidity and moisture. This is made using urea-formaldehyde resin to keep the plies glued to each other. However, contrary to popular belief, this is not water-resistant and cannot be used on surfaces that come into regular contact with water. This means the MR-grade plywood is suitable for indoor use. Also known as commercial plywood, this can be used for wall-mounted cabinets, kitchen shelves, partitions, cupboards, etc. The thickness can vary depending on the place where it is being used. Generally, there are many options available, such as 6mm, 9mm, 12mm, 16mm, 18mm, 21mm, and 25mm.</p>
            <p className="mt-2"><strong>BWR Grade</strong> - BWR or Boling Water Resistant Plywood is water-resistant and can be used in areas that occasionally come into contact with water. Phenol formaldehyde adhesive, a type of synthetic plastic resin, is used to glue the plies together and make this plywood. This also works as the main component that makes this plywood resistant to water. However, it is not suitable for areas that come into direct contact with water. When it comes to the thickness of BWR plywood, the commonly available options are 6mm, 9mm, 12mm, 16mm, 19mm, and 25mm.</p>
            <p className="mt-2"><strong>BWP Grade</strong> - Also known as marine-grade plywood, BWP, or Boiling Water Proof plywood is of the highest quality. It is made using a single type of hardwood and undiluted phenol formaldehyde adhesive. This type of plywood can easily withstand prolonged exposure to water and is commonly used in ships and boats. The common thickness options of BWP plywood are 6mm, 9mm, 12mm, 16mm, 19mm, etc.</p>
            <p className="mt-2"><strong>FR Grade</strong> - FR or fire-retardant grade, plywood is one of the most commonly used types of plywood. Generally, it is used in areas that have a high chance of coming into contact with heat or fire. The surface of this plywood is treated with fire-retardant chemicals to make it resistant to heat and fire. It is suitable to be used in shopping complexes, public theatres, kitchens, etc.</p>
          </ul>

          <h3 className="font-semibold mt-6 text-gray-700">Face:</h3>
          <p className="mt-2">Face is one used for surfacing plywood. Gurjan & Okuma face are most popular used face across India. It can help to enhance the aesthetic appeal of all types of surfaces, including walls and furniture. Here are a few things that you should keep in mind, whether you are looking for Gurjan or Okuma face:</p>
          <ul className="list-disc list-inside mt-2">
            <p className="mt-2"><strong>Type</strong> - There are several different types of plywood, such as decorative, industrial, compact, high-pressure, low-pressure, etc. Each of them has its advantages that make them suitable for different purposes. So, it is best to determine the suitable type of laminate for the surface it will be used on.</p>
            <p className="mt-2"><strong>Thickness</strong> - Similar to plywood, you get several thickness options in laminates as well. Generally, the thickness ranges from 6mm to 12mm. It is best to choose the one that suits your specific requirements.</p>
            <p className="mt-2"><strong>Colour & Pattern</strong> - In today’s time, there are so many different options for colours, patterns, and designs of laminates to choose from. While making a choice, it is important to pick the colour and design that complements the overall vibe of a space. It should go well with the rest of the interior of the house.</p>
            <p className="mt-2"><strong>Budget</strong> - This is undoubtedly one of the most important aspects of choosing any building material. With so many options available in the market, you are more likely to go overboard with the budget you’ve already set. So, it is best to choose the laminates or any other products that are within your budget.</p>
          </ul>

          <h3 className="font-semibold mt-6 text-gray-700">Top Plywood</h3>
          <p className="mt-2"><strong>Plywood</strong> - Plywood is a versatile building material that is formed by binding multiple layers of wood veneer with a strong adhesive. It can be used for several different purposes, including making partitions, flooring, ceilings, sheathing, etc. There are various types of plywood depending on the adhesive used to make them and the number of plies used.</p>
          <p className="mt-2"><strong>Block Board</strong> - A Block Board is a type of artificial board that is somewhat similar to plywood. The main distinction between the two is that the Block Board has a centre layer made of softwood strips. Plywood, on the other hand, is entirely made by using plies. A Block Board is considered suitable for elongated elements such as furniture, shelves, and desks.</p>
          <p className="mt-2"><strong>Engineered Board</strong> - Engineered board is a composite material that is formed by binding small strands, particles, or thin wood boards together with strong adhesives. This is a widely used building material that is mainly used to make furniture items. Known for its strength and durability, engineered board also increases the aesthetic appeal of particular furniture items.</p>
          <p className="mt-2">If you are planning a home improvement project anytime soon, there is no need to make searches like ‘board shop near me’. You can either visit our partners store or www.woodqart.com to find premium-quality products from all the best brands or buy products like MDF board online at the best prices.</p>
          <p className="mt-2"><strong>Laminates</strong> - Laminates are one of the most versatile building materials that are used as a protective layer for surfaces. From furniture items to walls and floors, laminates can be used everywhere. There are several different types of laminates, such as:</p>
          <p className="mt-2">Based on Manufacturing Process</p>
          <ul className="list-disc list-inside mt-2">
            <p className="mt-2">- High-pressure</p>
            <p className="mt-2">- Low-pressure Based on Thickness</p>
            <p className="mt-2">- Regular</p>
            <p className="mt-2">- Compact Based on Usage</p>
            <p className="mt-2">- Decorative</p>
            <p className="mt-2">- Industrial</p>
          </ul>
          <p className="mt-2">If you need high-quality laminates for your next home improvement project, there is no need to make searches like ‘laminates shop near me’. At WoodQart, you can either buy laminates online or visit the physical store.</p>
          <p className="mt-2"><strong>Edge band</strong> - Edge banding can be defined as the process of covering the raw edges of wood panels or plywood with a thin strip with adhesive on one side. This strip is known as a edge band and helps to give a finished look to the furniture. It not only protects the wooden panels from moisture, atmospheric humidity, or any other kind of damage but also increases the strength and durability of the furniture. Generally, edge bands are made of materials like wood, PVC, etc.</p>
          <p className="mt-2">At WoodQart, you can find high-quality edge bands at the best prices.</p>
          
          <h3 className="font-semibold mt-6 text-gray-700">Welcome To Your One-Stop for All Home Improvement Needs in India</h3>
          <p className="mt-2">When it comes to decorate your home with finish products or plywood where you can find everything under one website. We offer a wide range of home, office and commercial furniture and plywood products from all the best brands. WoodQart is an omnichannel, multi-category, and multi-brand format where consumers, retailers and contractors can purchase from our partner stores based around the country and/or from our online store, which offers wide range of products related to plywood and wooden material. All these products are guaranteed to be 100% original, come with comprehensive product information, and are available at wholesale prices.</p>
          <h3 className="font-semibold mt-6 text-gray-700">Make Home Improvement Simple with WoodQart</h3>
          <p className="mt-2"><strong>Convenience of Home Delivery</strong> - At WoodQart, customers can avail of the convenience of home delivery and get the products right at their doorstep within 24 hours to 7 days of placing the order.</p>
        </>
      )}

      {/* READ MORE BUTTON */}
      <button onClick={() => setExpanded(!expanded)} className="mt-8 text-black font-semibold underline underline-offset-2 hover:text-gray-500 decoration-orange-500 decoration-2 hover:decoration-orange-300">
        {expanded ? "Read Less" : "Read More"}
      </button>

    </div>
  );
};

export default ReadMoreSection;
