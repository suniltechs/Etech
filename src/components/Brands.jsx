import brand1 from "/src/assets/images/brands/brand1.png";
import brand2 from "/src/assets/images/brands/brand2.png";
import brand3 from "/src/assets/images/brands/brand3.png";
import brand4 from "/src/assets/images/brands/brand4.png";
import brand5 from "/src/assets/images/brands/brand5.png";
import brand6 from "/src/assets/images/brands/brand6.png";
import brand7 from "/src/assets/images/brands/brand7.png";
import brand8 from "/src/assets/images/brands/brand8.png";

const brands = [
  { name: "Amazon image", image: brand1 },
  { name: "Magic Leap image", image: brand2 },
  { name: "Zoho image ", image: brand3 },
  { name: "Accenture image", image: brand4 },
  { name: "Infosys image", image: brand5 },
  { name: "Wipro image", image: brand6 },
  { name: "Capgemini image", image: brand7 },
  { name: "Oracle image", image: brand8 },
];

const Brands = () => {
  return (
    <section className="py-2 bg-custom-gradient ">
      <div className="container">
        <div className="w-full  ">
          <div className="flex flex-wrap items-center justify-start gap-3 sm:justify-between">
            {brands.map((brand, index) => (
              <div key={index} className="w-24 ml-1 h-max">
                <img
                  className="md:h-[100px] h-12 opacity-80 object-contain"
                  src={brand.image}
                  alt={brand.name}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
