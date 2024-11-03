const Footer = () => {
  return (
    <div>
      <div className="place-items-center">
        <h1 className="text-3xl font-bold">Gadget Heaven</h1>
        <p className="mt-2 text-[#09080F99] text-base font-medium">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="mt-10"></hr>
      <footer className="footer place-items-center  text-[#09080F99] p-10">
        <nav className="">
          <h6 className="font-bold text-xl text-black">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl text-black">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
