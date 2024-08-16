import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <section className="banner-area fix p-relative align-super">
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(/assets/img/banner/hero-bg2.png)` }}
        >
          <div className="container align-super">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="hero-content">
                  <span></span>
                  <h2 className="hero-title mb-35">
                    Ultra Aura is now Live,{" "}
                    <i> with Technology Enabled Learning</i>.
                  </h2>
                  {/* <p>
                    Build Resume
                    <br/> Take Skill test <br/>Learn from Industry Experts Get
                    Certified & Land a Jobs at Job Portal NovaJobs.us
                  </p> */}
                  <p className="styled-list">
  <ul>
    <li>Build Resume</li>
    <li>Take Skill test</li>
    <li>Learn from Industry Experts</li>
    <li>Get Certified</li>
    <li>Land a Job at Job Portal <i><Link href={'https://novajobs.us/'}>Novajobs.us</Link></i></li>
  </ul>
</p>

                  <div className="tp-banner-btn"> 
                    <Link href="/course-grid" className="tp-btn">
                      Explore Courses
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="banner-info d-none">
                  <ul>
                    <li>
                      <span>235K</span>Worldwide Students
                    </li>
                    <li>
                      <span>3.5K</span>Free Pro Courses
                    </li>
                    <li>
                      <span>
                        4.7<i className="fi fi-rr-star "></i>
                      </span>
                      Worldwide Review
                    </li>
                  </ul>
                </div>
              </div>
              <div className="banner-shape d-none d-lg-block">
                <img
                  src="/assets/img/banner/banner-shape-01.png"
                  alt="banner-shape"
                  className="b-shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
