import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col gap-4 justify-between md:w-3/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            inventore animi sunt modi ratione distinctio repellat libero cumque
            praesentium, nemo accusantium dolore eaque. Perspiciatis nam quis
            nihil modi, adipisci magni. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi pariatur non repellat blanditiis excepturi?
            Cupiditate libero ab temporibus ullam quis molestias labore soluta
            veritatis animi error laborum, aperiam quo reprehenderit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            aliquid quaerat nobis error cupiditate libero, voluptates aperiam?
            Aliquid alias dolores neque quos, et maxime commodi ex qui
            exercitationem consequuntur aspernatur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam asperiores sunt culpa. Unde
            nesciunt ipsum molestias cum. Quasi quae accusamus praesentium
            explicabo, eveniet asperiores necessitatibus! Quaerat officia
            necessitatibus nihil tenetur?
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam
            optio, illo tempore repudiandae quos consequatur libero voluptatibus
            iste nihil, maxime voluptatum sunt? Dolore numquam omnis optio illum
            accusantium non. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusamus beatae autem velit. Dolore tempore, aperiam id
            delectus nostrum tempora cumque, laboriosam dolorem ducimus,
            distinctio beatae error dolores corrupti veniam a?
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-bold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ,
            sequi{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVINIENCE:</b>
          <p>
            itaque deleniti quam ullam aliquam voluptatem? Eos rerum cupiditate
            animi ab
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            doloribus laboriosam optio, neque magnam incidunt, quasi vel
            voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
