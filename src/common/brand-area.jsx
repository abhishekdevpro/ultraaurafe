// import React from "react";
// import Slider from "react-slick";
// import brands_data from "../data/brands-data";

// // slider setting
// const setting = {
//   dots: false,
//   infinite: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };
// const BrandArea = ({ style_2, style_3, style_1, style_about }) => {
//   return (
//     <>
//       <section
//         className={`brand-area ${style_1 ? "pb-110" : ""} ${ style_2 ? "pt-110" : "" }  ${style_3 ? "pt-110 " : ""} ${style_about ? "pb-115" : ""} wow fadeInUp`}
//         data-wow-duration="1s"
//         data-wow-delay=".4s"
//       >
//         <div className="container">
//           {style_about ? (
//             ""
//           ) : (
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="section-title mb-65 text-center">
//                   <h2 className="tp-section-title mb-20">Our Key Supporters</h2>
//                 </div>
//               </div>
//             </div>
//           )}
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="brand-area tp-brand-active">
//                 <Slider {...setting}>
//                   {brands_data.map((item, i) => (
//                     <div key={i} className="brand-item">
//                       <a href="#">
//                         <img src={item.img} alt="brand-logo" 
//                          />
//                       </a>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BrandArea;


import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import brands_data from "../data/brands-data";

// Slider settings
const setting = {
  dots: false,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Styled Components
const BrandSection = styled.section`
  position: relative;
  padding-top: ${({ style_2, style_3 }) => (style_2 || style_3 ? "110px" : "0")};
  padding-bottom: ${({ style_1, style_about }) =>
    style_1 || style_about ? "110px" : "0"};
  background: #f9f9f9;
  animation: fadeInUp 1s ${({ "data-wow-delay": delay }) => delay};

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 65px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }
`;

const BrandItem = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandImage = styled.img`
  max-height: 100px; /* Set the height you want for all images */
  width: auto;
  object-fit: contain;
`;

const BrandArea = ({ style_1, style_2, style_3, style_about }) => {
  return (
    <BrandSection
      style_1={style_1}
      style_2={style_2}
      style_3={style_3}
      style_about={style_about}
      className="wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".4s"
    >
      <div className="container">
        {!style_about && (
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle>
                <h2>Our Key Supporters</h2>
              </SectionTitle>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            <Slider {...setting}>
              {brands_data.map((item, i) => (
                <BrandItem key={i}>
                  <a href="#">
                    <BrandImage src={item.img} alt="brand-logo" />
                  </a>
                </BrandItem>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </BrandSection>
  );
};

export default BrandArea;
