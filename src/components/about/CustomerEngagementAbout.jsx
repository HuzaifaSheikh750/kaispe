import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from "@/plugins";
import A1 from "../../../public/assets/imgs/home-7/a1.jpg";
import Video from "../../../public/assets/imgs/home-7/video.jpg";
import Shape4 from "../../../public/assets/imgs/home-7/shape-4.png";
import Shape5 from "../../../public/assets/imgs/home-7/shape-5.png";
import A2 from "../../../public/assets/imgs/home-7/a2.jpg";
import A3 from "../../../public/assets/imgs/home-7/a3.jpg";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const CreativeAgencyAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
        gsap.to(".about__img-2 img", {
          scale: 1.15,
          duration: 1,
          scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area-7">
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Improve Your Sales Productivity by being an All-rounder in all
                  the Prominent Fields
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="about__left-7">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={A1}
                  alt="Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="about__mid-7 text-anim">
                <p>
                  Delays are the killer of any business in this outrageous
                  increase of digitization. Save yourself from trouble by
                  keeping a closer look at the insightful data from all your
                  departments. Benefit from automated features of D365 Customer
                  Engagement to achieve operational excellence, generate new
                  leads, and deliver a better customer experience. Other than
                  marketing, sales, project, and customer services, it also
                  helps you integrate with various Microsoft offerings.
                  Integrate with tools like Power Apps, Power Automate, and
                  Power BI to furnish a complete and adaptable solution for
                  managing customer relationships and engagement.
                </p>
                <div className="btn_wrapper">
                  <Link
                    href="/contact"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Book a Demo{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                {/* <Image
                  priority
                  width={155}
                  height={57}
                  src={Shape5}
                  alt="Shape"
                  className="signature"
                />
                <Image
                  priority
                  width={140}
                  height={160}
                  src={A2}
                  alt="Image"
                  className="image-1"
                /> */}
              </div>
            </div>
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="about__right-7">
                <Image
                  priority
                  width={220}
                  style={{ height: "auto" }}
                  src={A3}
                  alt="Image"
                  data-speed="0.7"
                />
              </div>
            </div> */}
          </div>
        </div>

        <Image
          priority
          width={76}
          height={119}
          src={Shape4}
          alt="Shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default CreativeAgencyAbout;
