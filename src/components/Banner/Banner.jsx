import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="hero bg-[#9538E2] relative rounded-b-xl">
        <div className="hero-content text-center">
          <div className="max-w-5xl text-white">
            <h1 className="text-5xl font-bold my-6">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-base font-normal">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to
            </p>
            <p className="text-base font-normal">
              the coolest accessories, we have it all!
            </p>
            <Link to={`/dashboard`}>
              <button className="my-6 bg-white rounded-2xl p-3 text-xl font-bold text-[#9538E2]">
                Shop Now
              </button>
            </Link>
            <div className="pb-36"></div>
          </div>
        </div>
      </div>

      <div
        className="w-full md:w-2/3 h-[60vh] mx-auto z-20 bg-[#9538E2] p-10 border-2 border-inherit rounded-xl"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          top: "-150px",
        }}
      >
        <div className="mx-auto"></div>
      </div>
    </div>
  );
};

export default Banner;
