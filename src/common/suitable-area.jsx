import Link from "next/link";
import React from "react";

// suitable_data
const suitable_data = [
  {
    id: 1,
    title: (
      <>
        Do you want to <span>Learn</span> at your own place?
      </>
    ),
    des: <>
    <ul className="pb-4 pt-2" style={{fontSize:"12px",fontWeight:"700"}}>
    <li> Enroll & Learn from experts recorded sessions </li>
      
    </ul>
    </>,
    img: "/assets/img/bg/suit-bg-01.png",
  },
  {
    id: 2,
    title: (
      <>
        Do you want to <span>Learn</span> with expert Trainers in live sessions?
      </>
    ),
    des: <>
    <ul className="" style={{fontSize:"12px",fontWeight:"700"}}>
    <li> Enroll & Learn from experts live sessions </li>
      
    </ul>
    </>,
    img: "/assets/img/bg/suit-bg-02.png",
  },
];

const SuitableArea = ({ style_2}) => {
  return (
    <>
      <section
        className={`suitable-area  ${
          style_2 ? "bg-bottom grey-bg pt-115" : ""
        } pb-90 wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"
        style={{
          backgroundImage: style_2
            ? `url(/assets/img/bg/shape-bg-1.png)`
            : null,
        }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-25">Join With Us</span>
                <h2 className="tp-section-title">
                  Which One is Suitable For You?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {suitable_data.map((item) => (
              <div key={item.id} className="col-xl-6">
                <div
                  className={`tp-suit mb-30 p-relative ${
                    style_2 ? "white-bg" : ""
                  }`}
                >
                  <div className="tp-suit__content">
                    <h4 className="tp-suit__title">{item.title}</h4>
                    <p>{item.des}</p>
                    <div className="tp-suit__btn pt-5">
                      <Link href="/contact" className="tp-border-btn">
                        Join Now
                      </Link>
                    </div>
                  </div>
                  <div className="tp-suit__tech">
                    <img src={item.img} alt="suitable-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuitableArea;
