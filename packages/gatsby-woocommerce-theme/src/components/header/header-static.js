import React from "react";
import Link from "gatsby-link";

/**
 * Internal dependencies.
 */
import Nav from "./nav";
import "./style.scss";
import defaultSiteLogoUrl from "../../images/logo.png";

const Header = ({ data }) => {
  const {
    wp: {
      header: { siteTitle, siteTagLine, siteLogoUrl },
    },
    headerMenuItems,
  } = data;
  const siteLogoURL = siteLogoUrl ? siteLogoUrl : defaultSiteLogoUrl;


  function HeaderNavigation(props) {
    const {
      shadow,
      background,
      nav,
      nav2,
      nav3,
      items,
      x1,
      sergiologodefaultProps,
      icon24outlinecartProps,
      icon24outlinecart2Props,
      icon24outlinecart3Props,
      btnProps,
    } = props;
  
    return (
      <div className="header-navigation">
        <div className="nav-x7rKVj">
          <div className="pane-elevation-2">
            <img className="shadow" src={shadow} />
            <img className="background" src={background} />
          </div>
          <Sergiologodefault {...sergiologodefaultProps} />
          <div className="nav-xt85bN sourcesanspro-normal-black-16px">{nav}</div>
          <div className="nav-y70fTZ sourcesanspro-normal-black-16px">{nav2}</div>
          <div className="nav-ozrsns sourcesanspro-normal-black-16px">{nav3}</div>
          <Icon24outlinecart {...icon24outlinecartProps} />
          <div className="items" style={{ backgroundImage: `url(${items})` }}>
            <div className="x1 helvetica-normal-white-12px">{x1}</div>
          </div>
          <Icon24outlinecart {...icon24outlinecart2Props} className="icon24outlineheart" />
          <Icon24outlinecart {...icon24outlinecart3Props} className="icon24outlineuser" />
          <Btn {...btnProps} />
        </div>
      </div>
    );
  }
  
  
  function Sergiologodefault(props) {
    const { sergioLogoDefault, className } = props;
  
    return (
      <div
        className={`sergio-logo-default ${className || ""}`}
        style={{ backgroundImage: `url(${sergioLogoDefault})` }}
      ></div>
    );
  }
  
  
  function Icon24outlinecart(props) {
    const { icon24OutlineCart, className } = props;
  
    return (
      <div
        className={`icon24outlinecart ${className || ""}`}
        style={{ backgroundImage: `url(${icon24OutlineCart})` }}
      ></div>
    );
  }
  
  
  function Btn(props) {
    const { sergiologodefaultProps } = props;
  
    return (
      <div className="btn">
        <Sergiologodefault {...sergiologodefaultProps} className="buttondefaultprimary" />
      </div>
    );
  }
  
  const sergiologodefaultData = {
      sergioLogoDefault: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-sergio-logosvg-E51CACBF-85D6-445B-8A83-9E63B1641FF3.png",
  };
  
  const icon24outlinecartData = {
      icon24OutlineCart: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-with-option-cart-CDA323A0-66F0-4440-9CFD-EF7346306DEA.png",
  };
  
  const icon24outlinecart2Data = {
      icon24OutlineCart: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/my-account-dashboard-heart-D995D026-417C-4B6D-B5B9-686C098D373F.png",
  };
  
  const icon24outlinecart3Data = {
      icon24OutlineCart: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-with-option-user-3F88A9FD-ADB9-41A3-8B79-B4F93816A01F.png",
  };
  
  const sergiologodefault2Data = {
      sergioLogoDefault: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/my-account-track-orders-buttonbigprimary-589389D7-C046-4804-B4EB-28BDDA87B6C1.png",
  };
  
  const btnData = {
      sergiologodefaultProps: sergiologodefault2Data,
  };
  
  const HeaderNavigationData = {
      shadow: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/my-account-billing-shadow-4B9D74FD-C81E-4C3E-A0F3-0260D6253677.png",
      background: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/my-account-payment-method-background-713978F9-F29D-47CC-B4AA-F34D879B5386.png",
      nav: "Meal Plans",
      nav2: "Contact",
      nav3: "Shop",
      items: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/cart-oval-3F87FC3E-B174-4E4F-ABF8-285EAB63AB1F@2x.png",
      x1: "1",
      sergiologodefaultProps: sergiologodefaultData,
      icon24outlinecartProps: icon24outlinecartData,
      icon24outlinecart2Props: icon24outlinecart2Data,
      icon24outlinecart3Props: icon24outlinecart3Data,
      btnProps: btnData,
  };

  
  return (
    // <header className="site-header-container container">
    //   <div className="site-header">
    //     <div className="site-brand">
    //       <Link to="/">
	  //         <figure>
		//           <img
		// 	          className="site-brand__logo"
		// 	          src={siteLogoURL}
		// 	          width="68"
		// 	          height="55"
		// 	          alt="header logo"
		//           />
	  //         </figure>
    //       </Link>
    //       <div className="site-brand__content">
    //         <h2 className="screen-reader-text site-brand__title">
    //           {siteTitle}
    //         </h2>
    //         <p className="site-brand__description">{siteTagLine}</p>
    //       </div>
    //     </div>

    //     <Nav headerMenuItems={headerMenuItems} />
    //   </div>
    // </header>

    <div className="main-header">
        <HeaderNavigation {...HeaderNavigationData} />
    </div>
  );
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Header };





