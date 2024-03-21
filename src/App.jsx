import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-[#0D0D0D] flex flex-col  text-[#E4E4E4] justify-center items-center relative overflow-hidden">
      <div className="absolute z-10 bg-[#6C1F93] h-[700px] w-[700px] rounded-[50%] blur-[500px] opacity-50 top-0 -left-[15rem]"></div>
      <div className="absolute z-10 bg-[#360498] h-[700px] w-[700px] rounded-[50%] blur-[500px] opacity-50 top-[15rem] -right-[15rem]"></div>
      <div className="absolute z-10 bg-[#00CCFF] h-[700px] w-[700px] rounded-[50%] blur-[500px] opacity-50 bottom-[15rem] -left-[16rem]"></div>
      <div className="absolute z-10 bg-[#6C1F93] h-[700px] w-[700px] rounded-[50%] blur-[500px] opacity-50 bottom-[25rem] -right-[16rem]"></div>
      <Navbar />
      <div className="mx-[20%] my-[10%] z-20">
        <h1 className="text-[50px] font-bold text-white">About MSIT</h1>
        <p className="text-[20px] text-justify mt-[2rem]">
          This AICTE approved Institute under GGSIP University is ideally
          located in the Institutional area of Janakpuri, New Delhi. Established
          in 2001, MSIT has a campus spread over eight acres of land with
          beautiful eco-friendly surroundings. The institute has over a short
          span of time acquired and developed impressive infrastructure,
          expertise, and resources for imparting high quality engineering
          education. The institute provides Bachelor of Technology in CSE, IT,
          ECE and EEE streams.
        </p>
      </div>
      <Images />

      <div className="mx-[20%] my-[10%]">
        <h1 className="text-[50px] font-bold text-white">
          About HACKWITHINDIA
        </h1>
        <ul className="text-[20px] text-justify mt-[2rem]">
          <li>
            The primary aim of this hackathon would be to inspire young brains
            to develop their technical, and team collaboration skills, and
            encourage them to foster a heightened sense of responsibility
            towards society, instilling them to channel their creative ideas
            towards betterment of the community.
          </li>
          <li>
            There will be 2 rounds in the hackathon. On the first day, Round 1
            will begin with participants giving an abstract and presentation on
            their idea, followed by Round 2 of the mentorship process. Only the
            shortlisted teams will be in round 2 which is prototyping. After the
            results of round 2 finalists will give the presentation to the
            judges on the second day and the winner of the contest will be
            declared.
          </li>
          <li>
            We are expected to gather more than 800 participants from all over
            other universities. We would also be providing them with food and
            basic amenities from the sponsors fund. Additionally, we'd be
            contacting a number of well-known figures in industry and education.
          </li>
        </ul>
      </div>

      <div className="bg-[#FF5A05] flex items-center justify-center -ml-[50%] h-[60px] w-[175px] font-bold text-[20px] rounded-[4px] mb-40">Know More</div>
      <Images />
      <div className="mx-[20%] my-[10%] z-20">
        <h1 className="text-[50px] font-bold text-white">
          About INAUGRAL EDITION
        </h1>
        <p className="text-[20px] text-justify mt-[2rem]">
          The picturesque Valley of Dehradun is the winter capital along with
          being the largest, as well as, the most populated city in Uttarakhand.
          It is the administrative headquarters of the eponymous district and is
          governed by the Dehradun Municipal Corporation. The city’s
          cosmopolitan aura amalgamated seamlessly with it's unparalleled
          natural beauty. As per the legends, the great guru Drona of
          Mahabharata, lived here with his wife Kripi. Traditionally part of the
          Garhwal region, Dehradun lies along National Highway 7 at a distance
          of 248 km (154 mi) north of India's capital New Delhi and is
          well-connected through road, rail and air with rest of the country.
          With numerous premier schools and centers of higher education,
          Dehradun has emerged out as one of the prominent education hubs in
          India. Haridwar, the “Gateway to Gods” and Rishikesh, the "Yoga
          Capital of the World" are just an hour’s drive from Dehradun.
          Moreover, it is among the number of cities selected by Government of
          India, as part of its smart city project. It is the third largest city
          in the Himalayas after Kathmandu and Srinagar. Know more about
          Uttarakhand & Dehradun.
        </p>
      </div>
      <Images />
    </div>
  );
}

function Images() {
  return (
    <div className="flex z-20">
      <img src="Rectangle 13.svg" className="w-[calc(100vw/3)]" alt="" srcset="" />
      <img src="UPES Image.svg" alt="" srcset=""className="w-[calc(100vw/3)]" />
      <img src="Dehradun Image.svg" alt="" className="w-[calc(100vw/3)]" />
    </div>
  );
}

function gradient(){
  return(
    <div></div>
  )
}
function Navbar() {
  return (
    <nav className="bg-[#E4E4E4] flex text-[#000000] w-[100%] z-20 h-[100px] items-center ">
      <div className="flex justify-between mx-[10rem] w-[100%]">
        <img src="Logo.svg" alt="" />
        <div className="flex">
          <h4>About</h4>
          <h4>Gallery</h4>
          <h4>Contact</h4>
          <div className="bg-[#FF5A05]">
            <h4>Join Us</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
