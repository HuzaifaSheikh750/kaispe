import Image from "next/image";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.png";

const SolutionHero = () => {
  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Microsoft Dynamics 365{" "}
                  {/* <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="shape"
                  />{" "} */}
                  Finance{" "}
                  <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape2}
                    alt="shape"
                  />
                </h1>
                <h4>
                Create a Resilient Organization through the Optimization <br/>of Financial Operations
                </h4>
              </div>
              <div className="hero__text-7">
                <h2 className="about">solution</h2>
                <p>
                Automate and modernize your global financial operations with Microsoft Dynamics 365 Finance and take one step toward the future of Finances.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape3}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default SolutionHero;
