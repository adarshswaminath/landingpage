const FooterLinks = [
  {
    id: 1,
    title: "IGORAZA SparksLabs",
    firstValue: "Career",
    secondValue: "T&C",
    firstLink: "#",
    secondLink: "#",
  },
  {
    id: 2,
    title: "Community",
    firstValue: "Partners",
    secondValue: "Help Center",
    firstLink: "#",
    secondLink: "#",
  },
  {
    id: 3,
    title: "Contact",
    firstValue: "+917736886026",
    secondValue: "teamigoraza@gmail.com",
    firstLink: "#",
    secondLink: "#",
  },
];

function FooterContent() {
  return (
    <div className="mt-8 grid lg:flex items-center justify-between text-gray-700">
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="https://igorazaa.vercel.app/assets/bg.5fbbb9e0.png"
          className="w-[272px] h-[77px] object-contain"
          alt="Logo"
        />
        <p className="mt-2">Start with something simple and small, then expand over time</p>
      </div>
      <div className="grid gap-4 lg:flex lg:space-x-8 justify-between items-center">
        {FooterLinks.map((value) => (
          <div className="grid gap-2" key={value.id}>
            <h2 className="font-extrabold">{value.title}</h2>
            <a href={value.firstLink}>{value.firstValue}</a>
            <a href={value.secondLink}>{value.secondValue}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterContent;
