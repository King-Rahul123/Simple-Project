import { useState } from "react";

const ReadMoreSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-16 px-6 text-gray-600 text-sm leading-relaxed">

      <h2 className="uppercase font-semibold text-gray-700 mb-4">
        Buy High Quality Plywood & Veneers at the Best Prices from WoodQart
      </h2>

      <p>
        Plywood is one of the most used materials in home construction. They are
        used to make doors, partitions, false ceilings, cabinets, shelves,
        sheathing, etc. Here at WoodQart, you can find all types and grades of
        plywood from Red Core to Alternate to MR Grade to Commercial Plywood.
      </p>

      {/* EXTRA CONTENT */}
      {expanded && (
        <>
          <p className="mt-4">
            Now there is no need to make Google searches for the best plywood
            manufacturer near you. WoodQart helps retailers, dealers, and
            distributors to sell WoodQart brands and also helps them establish
            their own brands of plywood.
          </p>

          <p className="mt-4">
            You can explore our collection and order plywood online at the best
            prices. We offer plywood from all major woods and faces including
            Gurjan, Okuma, Eucalyptus, Poplar, Kadam, Lamboo, Arra, Kokaad, and
            many more.
          </p>

          <h3 className="font-semibold mt-6 text-gray-700">
            A Guide to Choosing the Best Plywood and Face for Your Home
          </h3>

          <p className="mt-4">
            Gone are the days when plywood used to be among the most rarely used
            materials. In the last few years, they have grown in demand and are
            currently among the most sought-after building materials.
          </p>
        </>
      )}

      {/* READ MORE BUTTON */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 text-orange-500 font-semibold underline underline-offset-4 hover:text-orange-600"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>

    </div>
  );
};

export default ReadMoreSection;
