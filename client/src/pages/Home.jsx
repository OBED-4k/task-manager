import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";

export default function Home() {
  return (
    <section id="home" className="relative">
      <div className="w-full h-130">
        <div className="flex absolute top-15 left-35 gap-20 w-230 ">
          <div className="flex flex-col gap-7.5 ">
            <h1 className="font-main font-medium w-130 text-xxxl leading-15 tracking-normal">
              Manage your Tasks on <br />
              <span className="text-magenta">TaskDuty</span>
            </h1>
            <p className="font-main font-normal text-hero-x text-dim-gray leading-7 tracking-normal w-140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at
              platea tempus duis non eget. Hendrerit tortor fermentum bibendum
              mi nisl <br /> semper porttitor. Nec accumsan.
            </p>
            <Link to="/Tasks">
              <button className="bg-magenta font-medium text-xl leading-none tracking-normal text-nowrap font-main text-white w-45 h-12.5 px-8 py-5 rounded-lg">
                Go to My Tasks
              </button>
            </Link>
          </div>
          <img className="w-97 h-95" src={HeroImage} alt="HeroImage" />
        </div>
      </div>
    </section>
  );
}
