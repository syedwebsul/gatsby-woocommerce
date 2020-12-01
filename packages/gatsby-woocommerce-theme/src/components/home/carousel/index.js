import React from "react";
import Slider from "react-slick";
import "./style.scss";

import { isEmpty } from "lodash";
import Link from "gatsby-link";

const Carousel = ({ categories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
  };


  
  function Hero(props) {
    const { hero, imgLeftBanner, imgRightBanner, bigH1, buttonbigprimaryProps } = props;
  
    return (
      <div className="hero-">
        <div className="hero-PaUDxo" style={{ backgroundImage: `url(${hero})` }}>
          <img className="img-left-banner" src={imgLeftBanner} />
          <img className="img-right-banner" src={imgRightBanner} />
        </div>
        <Buttonbigprimary {...buttonbigprimaryProps} />
        <h1 className="bigh1 sourcesanspro-bold-moccaccino-64px">{bigH1}</h1>
      </div>
    );
  }
  
  
  function Buttonbigprimary(props) {
    const { BtnBig } = props;
  
    return <div className="btn-big" style={{ backgroundImage: `url(${BtnBig})` }}></div>;
  }
  
  const buttonbigprimaryData = {
      BtnBig: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/home-buttonbigprimary-ABA9B616-09FC-4B91-801A-BDC520D50BB0.png",
  };
  
  const HeroData = {
      hero: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-bg-hero-5C4FB2F3-AFFA-45C8-8165-0C85A3E02C6A.png",
      imgLeftBanner: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-img-left-banner-3CFBF1BA-C6FB-488E-B168-30E384CE3233.png",
      imgRightBanner: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-img-right-banner-2917DCC0-B5C8-439F-87B7-C4C0BAAC12CE.png",
      bigH1: "Get everything Sergio's all in one marketplace ",
      buttonbigprimaryProps: buttonbigprimaryData,
  };
  

  return (
    <div>
      {/* <Slider {...settings}>
        {!isEmpty(categories.nodes)
          ? categories.nodes.map((category) => {
              return (
                <div key={category.id} className="">
                  <div className="carousel-img-wrap">
                    {!isEmpty(category.image) &&
                    !isEmpty(category.image.sourceUrl) ? (
                      <img
                        src={ category.image.sourceUrl }
                        alt={
                          !isEmpty(category.image.altText)
                            ? category.image.altText
                            : category.name
                        }
                      />
                    ) : null}
                  </div>
                  <div className="carousal-info">
                    <div className="container">
                      <div className="carousal-info-inner">
                        <h2>{ category.name }</h2>
                        <p>{ category.description }</p>
                        <Link
                          to={category.uri}
                          className="btn btn-outline-dark"
                        >Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </Slider> */}

      <Hero {...HeroData} />
    </div>
  );
};

export default Carousel;
