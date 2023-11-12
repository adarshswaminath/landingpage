import { AiFillStar } from "react-icons/ai";

const aboutList = [
  {
    id: 1,
    title: "Innovation",
    body: "We are always pushing the boundaries of what is possible and are committed to developing innovative products and services that are designed to meet the needs of our clients and customers",
  },
  {
    id: 2,
    title: "Flexibility",
    body: "We understand that every client and customer has unique needs, which is why we offer flexible solutions that can be customized to meet their specific requirements",
  },
  {
    id: 3,
    title: "Customer Focus",
    body: "We are committed to putting our customers first. We work closely with our clients to understand their needs and provide them with the support and resources they need to succeed.",
  },
  {
    id: 4,
    title: "Quality",
    body: "High-quality products and services that adhere to the strictest standards of excellence are what we are striving to deliver. Our team of qualified professionals is committed to making sure that our goods and services meet or exceed the expectations of our customers",
  },
];

function About() {
  return (
    <div className="grid lg:flex lg:px-12 w-full text-gray-600 ">
      <section className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold">About us</h1>
        <p className="text-xl mt-3 mb-3 tracking-wide">
          IGORAZA is a technology startup driven by passionate engineers
          dedicated to creating exceptional solutions for clients using the
          latest software and techniques. We value innovation, dedication, and
          perfection, and are committed to delivering incredible results for our
          partners
        </p>
        <button className="bg-[#eeb0bf] font-bold px-5 p-3 w-1/2 rounded-lg">
          Get Started
        </button>
      </section>
      <section>
        {aboutList.map((value) => (
          <div
            className="flex gap-2 p-4 hover:bg-gray-100 rounded-lg mt-4 transition duration-200 delay-75"
            key={value.id}
          >
            <Star />
            <div>
              <h2 className="font-bold text-2xl ">{value.title}</h2>
              <p className="text-xl w-full tracking-wide">{value.body}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;

const Star = () => {
  return (
    <div>
      <AiFillStar className="w-8 h-8 text-[#eeb0bf]" />
    </div>
  );
};
