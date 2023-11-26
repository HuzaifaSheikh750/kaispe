import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Feature41 from "../../../public/assets/imgs/feature/4/1.png";
import Feature42 from "../../../public/assets/imgs/feature/4/2.png";
import Feature43 from "../../../public/assets/imgs/feature/4/3.png";
import Feature from "../../../public/assets/imgs/feature/4/feature.jpg";
import Icon1 from "../../../public/assets/imgs/feature/4/icon-1.png";
import Icon2 from "../../../public/assets/imgs/feature/4/icon-2.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyFeature = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_4", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_4");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_4", {
            scrollTrigger: {
              trigger: ".fade_bottom_4",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="feature__area-6">
        <div className="container line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
              <div className="feature__content-left">
                {/* <h2 className="sec-subtile-6">Features</h2>  */}
                <h3 className="sec-title-6 title-anim">
                  Reap Major Benefits of
                  <br /> Professional Apps with <br /> Power Platform
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
              <div className="feature__content-right">
                {/* <h4 className="feature__title-6">Creativity</h4> */}
                <p>
                  Give your company a new height of efficiency in this world of
                  Modernization and ever-changing trends.
                  {/* <span>brands and design features</span> from a hybrid
                  perspective. */}
                </p>
                {/* <p>
                  Regulatory oneven an enterprises such she and the got the did
                  attributing and pushed.
                </p> */}
                <Image
                  priority
                  width={130}
                  height={97}
                  className="feature__img-1"
                  src={Feature41}
                  alt="Icon"
                />
                <Image
                  priority
                  width={99}
                  height={131}
                  className="feature__img-2"
                  src={Feature42}
                  alt="Icon"
                />
                <Image
                  priority
                  width={38}
                  height={38}
                  className="feature__img-3"
                  src={Feature43}
                  alt="Icon"
                />
              </div>
            </div>
            {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__content">
                <Image
                  priority
                  width={630}
                  style={{ height: "auto" }}
                  src={Feature}
                  alt="Features Image"
                />
              </div>
            </div> */}
            <div
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-6"
              style={{ marginTop: "70px", paddingBottom: "0px" }}
            >
              <div className="feature__content-btm">
                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon1}
                    alt="Features Image"
                  />
                  <h5>
                    Supercharge Your Business with Microsoft Power Platform's
                    Low-Code Magic
                  </h5>
                  <p>
                    Power Platform provides a low-code environment that allows
                    users to build custom applications. Now you can automate
                    workflows without extensive coding knowledge, reducing the
                    need for expensive developer resources.
                  </p>
                </div>

                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon2}
                    alt="Features Image"
                  />
                  <h5>
                    Harness the Power of Integration and Skyrocket Your
                    Productivity
                  </h5>
                  <p>
                    Power Platform seamlessly integrates with other Microsoft
                    products. For example, Dynamics 365, SharePoint, and Teams.
                    All come together to enable businesses to leverage their
                    existing investments in Microsoft technologies.
                  </p>
                </div>

                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon2}
                    alt="Features Image"
                  />
                  <h5>Deploy Faster and Rule the Market</h5>
                  <p>
                    With Power Platform's visual development tools, businesses
                    can rapidly create and deploy custom applications and
                    workflows. It ultimately ends up reducing development time
                    and time-to-market.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-6"
              style={{ marginTop: "70px", paddingBottom: "40px" }}
            >
              <div className="feature__content-btm">
                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon1}
                    alt="Features Image"
                  />
                  <h5>
                    Unleash the Data Analytics Beast with Microsoft Power
                    Platform's Power BI
                  </h5>
                  <p>
                    Power Platform's Power BI component provides powerful data
                    analytics and visualization capabilities. Finally, enabling
                    businesses to gain insights and make data-driven decisions.
                  </p>
                </div>
                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon2}
                    alt="Features Image"
                  />
                  <h5>Automate Your Way to Success</h5>
                  <p>
                    Power Automate RPA features (Robotic Process Automation)
                    enable businesses to automate workflows. They can streamline
                    repetitive tasks, reducing manual effort and improving
                    efficiency.
                  </p>
                </div>

                <div className="feature__content-item fade_bottom_4">
                  <Image
                    priority
                    width={50}
                    height={50}
                    src={Icon2}
                    alt="Features Image"
                  />
                  <h5>Build Your Empire Your Way</h5>
                  <p>
                    Power Platform RPA offers a high degree of customization and
                    scalability. It assists businesses to tailor applications
                    and workflows to their specific needs and scale as they
                    grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyFeature;