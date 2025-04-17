import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="min-vh-90 text-white ">
      <div
        className="hero text-white d-flex justify-content-center align-items-center flex-column"
        style={{ height: "55vh" }}
      >
        <Image
          src="./white1.png"
          alt="logo"
          width={450}
          className="img-fluid"
        />
      </div>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "36vh" }}
      >
        <h1 className="hero-title">COMMING SOON</h1>
      </div>
    </div>
  );
};

export default Home;
