import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import Carousel from "../../components/home/carousel";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      page: { title, seo, uri },
			      categories,
			      categoryName,
			      postSearchData: { products, options }
		      }
	      } = props;


		  function HOME(props) {
			const {
			  hero,
			  imgLeftBanner,
			  imgRightBanner,
			  bigH1,
			  oval,
			  locallyPrepared,
			  h3Red,
			  p,
			  trustedName,
			  h3Red2,
			  p2,
			  miamiFavourite,
			  h3Red3,
			  p3,
			  img,
			  h3Red4,
			  p4,
			  h2Red,
			  pBig,
			  ovalCopy,
			  conveninet,
			  h2,
			  quisquePretiumDolo,
			  searchBox,
			  searchFoodU2026,
			  Uf002,
			  headerNavigationProps,
			  btnbigProps,
			  btnbig2Props,
			  foodMenuProps,
			  foodMenu2Props,
			  foodMenu3Props,
			  foodMenu4Props,
			  subscribeBoxProps,
			  footerProps,
			} = props;
		  
			return (
			  <div className="home">
				<div className="overlap-group-C61RwL">
				 
				  <div className="hero-4eduM0">
					<div className="hero-xwzSdG" style={{ backgroundImage: `url(${hero})` }}>
					  <img className="img-left-banner" src={imgLeftBanner} />
					  <img className="img-right-banner" src={imgRightBanner} />
					</div>
					<Btnbig {...btnbigProps} />
					<h1 className="bigh1">{bigH1}</h1>
				  </div>
				</div>
				<div className="auto-flex1-C61RwL">
				  <img className="oval" src={oval} />
				  <div className="auto-flex-uxzUmT">
					<div className="overlap-group1-c24oYb">
					  <div className="feature">
						<div className="feature-2">
						  <img className="locally-prepared" src={locallyPrepared} />
						  <div className="h3-red-ITByqZ sourcesanspro-bold-moccaccino-24px">{h3Red}</div>
						  <p className="p-ITByqZ sourcesanspro-normal-charade-16px">{p}</p>
						</div>
						<div className="feature-">
						  <img className="trusted-name" src={trustedName} />
						  <div className="h3-red-ofIVtG sourcesanspro-bold-moccaccino-24px">{h3Red2}</div>
						  <p className="p-ofIVtG sourcesanspro-normal-charade-16px">{p2}</p>
						</div>
						<div className="feature-4">
						  <img className="miami-favourite" src={miamiFavourite} />
						  <div className="h3-red-GDw0nE sourcesanspro-bold-moccaccino-24px">{h3Red3}</div>
						  <p className="p-GDw0nE sourcesanspro-normal-charade-16px">{p3}</p>
						</div>
						<div className="feature-">
						  <img className="img" src={img} />
						  <div className="h3-red-W9EdRT sourcesanspro-bold-moccaccino-24px">{h3Red4}</div>
						  <p className="p-W9EdRT sourcesanspro-normal-charade-16px">{p4}</p>
						</div>
					  </div>
					  <div className="rectangle"></div>
					  <div className="rectangle-copy"></div>
					  <div className="rectangle-copy-2"></div>
					</div>
					<div className="convenient">
					  <div className="auto-flex2-tZfGAs">
						<div className="h2-red sourcesanspro-bold-moccaccino-36px">{h2Red}</div>
						<div className="p-big sourcesanspro-normal-charade-18px">{pBig}</div>
						<Btnbig2 {...btnbig2Props} />
					  </div>
					  <div className="overlap-group2">
						<img className="oval-copy" src={ovalCopy} />
						<img className="conveninet" src={conveninet} />
					  </div>
					</div>
					<div className="search">
					  <div className="title">
						<div className="h2 sourcesanspro-bold-moccaccino-36px">{h2}</div>
						<div className="quisque-pretium-dolo-lQbthg sourcesanspro-normal-charade-18px">{quisquePretiumDolo}</div>
					  </div>
					  <div className="search-box" style={{ backgroundImage: `url(${searchBox})` }}>
						<div className="search-food-u2026 sourcesanspro-normal-charade-16px">{searchFoodU2026}</div>
						<div className="uf002">{Uf002}</div>
					  </div>
					</div>
					<div className="products">
					  <FoodMenu {...foodMenuProps} />
					  <FoodMenu2 {...foodMenu2Props} />
					  <FoodMenu3 {...foodMenu3Props} />
					  <FoodMenu4 {...foodMenu4Props} />
					</div>
				  </div>
				</div>
				<SubscribeBox {...subscribeBoxProps} />
				
			  </div>
			);
		  }
		  
		  
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
				<div className="nav-eJWwVs">
				  <div className="pane-elevation-2">
					<img className="shadow" src={shadow} />
					<img className="background" src={background} />
				  </div>
				  <Sergiologodefault {...sergiologodefaultProps} />
				  <div className="nav-SXP228 sourcesanspro-normal-black-16px">{nav}</div>
				  <div className="nav-b61XSE sourcesanspro-normal-black-16px">{nav2}</div>
				  <div className="nav-AMvxF2 sourcesanspro-normal-black-16px">{nav3}</div>
				  <Icon24outlinecart {...icon24outlinecartProps} />
				  <div className="items" style={{ backgroundImage: `url(${items})` }}>
					<div className="x1">{x1}</div>
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
			  <div className="btn-SXP228">
				<Sergiologodefault {...sergiologodefaultProps} className="buttondefaultprimary-v5g397" />
			  </div>
			);
		  }
		  
		  
		  function Btnbig(props) {
			const { BtnBig } = props;
		  
			return <div className="btn-big-xwzSdG" style={{ backgroundImage: `url(${BtnBig})` }}></div>;
		  }
		  
		  
		  function Btnbig2(props) {
			const { BtnBig } = props;
		  
			return <div className="btn-big-Xmsxxl" style={{ backgroundImage: `url(${BtnBig})` }}></div>;
		  }
		  
		  
		  function FoodMenu(props) {
			const { h4ProductTitle, p, h3Price, foodImageProps, btn2Props, btntextProps } = props;
		  
			return (
			  <div className="food-menu">
				<div className="food-menu-OxeJvC">
				  <FoodImage {...foodImageProps} />
				  <div className="h4-product-title-2DMCQB sourcesanspro-bold-cinder-20px">{h4ProductTitle}</div>
				  <p className="p-2DMCQB sourcesanspro-normal-charade-16px">{p}</p>
				  <div className="h3-price sourcesanspro-bold-moccaccino-24px">{h3Price}</div>
				  <Btn2 {...btn2Props} />
				  <Btntext {...btntextProps} />
				</div>
			  </div>
			);
		  }
		  
		  
		  function FoodImage(props) {
			const { foodImage, roundtagProps } = props;
		  
			return (
			  <div className="food-image-2DMCQB" style={{ backgroundImage: `url(${foodImage})` }}>
				<Roundtag {...roundtagProps} />
			  </div>
			);
		  }
		  
		  
		  function Roundtag(props) {
			const { RoundTag, xnew } = props;
		  
			return (
			  <div className="round-tag-m4LmyI">
				<div className="round-tag-WS6omW" style={{ backgroundImage: `url(${RoundTag})` }}>
				  <div className="new sourcesanspro-bold-white-12px">{xnew}</div>
				</div>
			  </div>
			);
		  }
		  
		  
		  function Btn2(props) {
			const { buttonDefaultPrimary } = props;
		  
			return (
			  <div className="btn-2DMCQB">
				<div className="buttondefaultprimary-toumEv" style={{ backgroundImage: `url(${buttonDefaultPrimary})` }}></div>
			  </div>
			);
		  }
		  
		  
		  function Btntext(props) {
			const { btnText } = props;
		  
			return <div className="btn-text" style={{ backgroundImage: `url(${btnText})` }}></div>;
		  }
		  
		  
		  function FoodMenu2(props) {
			const { h4ProductTitle, p, h3Price, foodImageProps, btn2Props, btntextProps } = props;
		  
			return (
			  <div className="food-menu-OxE2qG">
				<div className="food-menu-OxeJvC">
				  <FoodImage {...foodImageProps} />
				  <div className="h4-product-title-VBQ3IG sourcesanspro-bold-cinder-20px">{h4ProductTitle}</div>
				  <p className="p-VBQ3IG sourcesanspro-normal-charade-16px">{p}</p>
				  <div className="h3-price sourcesanspro-bold-moccaccino-24px">{h3Price}</div>
				  <Btn2 {...btn2Props} />
				  <Btntext {...btntextProps} />
				</div>
			  </div>
			);
		  }
		  
		  
		  function FoodMenu3(props) {
			const { h4ProductTitle, p, h3Price, foodImage2Props, btn2Props, btntextProps } = props;
		  
			return (
			  <div className="food-menu-OxE2qG">
				<div className="food-menu-OxeJvC">
				  <FoodImage2 {...foodImage2Props} />
				  <div className="h4-product-title-r5X2We sourcesanspro-bold-cinder-20px">{h4ProductTitle}</div>
				  <p className="p-r5X2We sourcesanspro-normal-charade-16px">{p}</p>
				  <div className="h3-price sourcesanspro-bold-moccaccino-24px">{h3Price}</div>
				  <Btn2 {...btn2Props} />
				  <Btntext {...btntextProps} />
				</div>
			  </div>
			);
		  }
		  
		  
		  function FoodImage2(props) {
			const { foodImage, roundtag2Props } = props;
		  
			return (
			  <div className="food-image-r5X2We" style={{ backgroundImage: `url(${foodImage})` }}>
				<Roundtag2 {...roundtag2Props} />
			  </div>
			);
		  }
		  
		  
		  function Roundtag2(props) {
			const { RoundTag, xnew } = props;
		  
			return (
			  <div className="round-tag-m4LmyI">
				<div className="round-tag" style={{ backgroundImage: `url(${RoundTag})` }}>
				  <div className="new sourcesanspro-bold-white-12px">{xnew}</div>
				</div>
			  </div>
			);
		  }
		  
		  
		  function FoodMenu4(props) {
			const { h4ProductTitle, p, h3Price, foodImage2Props, btn2Props, btntextProps } = props;
		  
			return (
			  <div className="food-menu-OxE2qG">
				<div className="food-menu-OxeJvC">
				  <FoodImage2 {...foodImage2Props} />
				  <div className="h4-product-title-TD3w2E sourcesanspro-bold-cinder-20px">{h4ProductTitle}</div>
				  <p className="p-TD3w2E sourcesanspro-normal-charade-16px">{p}</p>
				  <div className="h3-price sourcesanspro-bold-moccaccino-24px">{h3Price}</div>
				  <Btn2 {...btn2Props} />
				  <Btntext {...btntextProps} />
				</div>
			  </div>
			);
		  }
		  
		  
		  function SubscribeBox(props) {
			const { subscribeBox, subscribeToLearnM, quisquePretiumDolo, yourEmail, btn3Props } = props;
		  
			return (
			  <div className="subscribe-box-C61RwL">
				<div className="subscribe-box-s0qCLk" style={{ backgroundImage: `url(${subscribeBox})` }}>
				  <div className="subscribe-to-learn-m">{subscribeToLearnM}</div>
				  <p className="quisque-pretium-dolo-AQLtmB">{quisquePretiumDolo}</p>
				  <div className="subscribe-input">
					<div className="your-email">{yourEmail}</div>
					<Btn3 {...btn3Props} />
				  </div>
				</div>
			  </div>
			);
		  }
		  
		  
		  function Btn3(props) {
			const { buttonDefaultPrimary } = props;
		  
			return (
			  <div className="btn-Mdwavh">
				<div className="buttondefaultprimary-9cX4eF" style={{ backgroundImage: `url(${buttonDefaultPrimary})` }}></div>
			  </div>
			);
		  }
		  
		  
		  function Footer(props) {
			const {
			  logoMain2,
			  loremIpsumIsSimpl,
			  facebook,
			  instagram,
			  twitter,
			  explore,
			  Uf105Uf105Uf105Uf105Uf105,
			  homeSergioU2019SRestau,
			  contactInfo,
			  iconLocation,
			  iconPhone,
			  ourLocationCopy,
			  x12380SwStMiami,
			  phones,
			  x13055529623,
			  instagramPost,
			  instagramPost2,
			  instagramPost3,
			  instagramPost4,
			  instagramPost5,
			  instagramPost6,
			  instagramPost7,
			} = props;
		  
			return (
			  <div className="footer-C61RwL">
				<div className="footer-iPe1yZ">
				  <div className="auto-flex">
					<img className="logo-main2" src={logoMain2} />
					<div className="col-1">
					  <p className="lorem-ipsum-is-simpl sourcesanspro-normal-white-14px">{loremIpsumIsSimpl}</p>
					  <div className="auto-flex2-y1thEv">
						<img className="facebook" src={facebook} />
						<img className="instagram" src={instagram} />
						<img className="twitter" src={twitter} />
					  </div>
					</div>
				  </div>
				  <div className="col-2">
					<div className="explore sourcesanspro-bold-alizarin-crimson-20px">{explore}</div>
					<div className="auto-flex3-Wnl8ct">
					  <div className="uf105-uf10-f105-uf105">{Uf105Uf105Uf105Uf105Uf105}</div>
					  <p className="home-sergi-19s-restau">{homeSergioU2019SRestau}</p>
					</div>
				  </div>
				  <div className="col-3">
					<div className="contact-info sourcesanspro-bold-alizarin-crimson-20px">{contactInfo}</div>
					<div className="auto-flex6">
					  <div className="auto-flex5">
						<img className="icon-location" src={iconLocation} />
						<img className="icon-phone" src={iconPhone} />
					  </div>
					  <div className="auto-flex4-aufp5U">
						<div className="our-location-copy sourcesanspro-bold-alizarin-crimson-14px">{ourLocationCopy}</div>
						<p className="x12380-sw-st-miami sourcesanspro-normal-white-14px">{x12380SwStMiami}</p>
						<div className="phones sourcesanspro-bold-alizarin-crimson-14px">{phones}</div>
						<div className="x1-305-552-9623 sourcesanspro-normal-white-14px">{x13055529623}</div>
					  </div>
					</div>
				  </div>
				  <div className="col-4">
					<div className="instagram-post sourcesanspro-bold-alizarin-crimson-20px">{instagramPost}</div>
					<div className="ig-post">
					  <div className="auto-flex2-pSFWxK">
						<img className="instagram-post-JjMali" src={instagramPost2} />
						<img className="instagram-post-JjMali" src={instagramPost3} />
					  </div>
					  <div className="auto-flex3-pSFWxK">
						<img className="instagram-post-JjMali" src={instagramPost4} />
						<img className="instagram-post-JjMali" src={instagramPost5} />
					  </div>
					  <div className="auto-flex4-pSFWxK">
						<img className="instagram-post-JjMali" src={instagramPost6} />
						<img className="instagram-post-JjMali" src={instagramPost7} />
					  </div>
					</div>
				  </div>
				</div>
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
		  
		  const headerNavigationData = {
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
		  
		  const btnbigData = {
			  BtnBig: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/home-buttonbigprimary-ABA9B616-09FC-4B91-801A-BDC520D50BB0.png",
		  };
		  
		  const btnbig2Data = {
			  BtnBig: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/home-buttonbigprimary-F32EAA67-F2CF-4C04-89AF-607812114927.png",
		  };
		  
		  const roundtagData = {
			  RoundTag: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-with-option-oval-936343EE-6B98-4F51-B201-09AD332EC05F@2x.png",
			  xnew: "NEW",
		  };
		  
		  const foodImageData = {
			  foodImage: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-food-image-068A325F-9369-4167-A4E3-D416236EA948.png",
			  roundtagProps: roundtagData,
		  };
		  
		  const btn2Data = {
			  buttonDefaultPrimary: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/product-with-option-buttonbigprimary-47E4AFDB-847D-4DC7-A87E-D16AB83736C8.png",
		  };
		  
		  const btntextData = {
			  btnText: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-btn-text-74007FDC-58EA-4B7C-832C-79BE0B53074A.png",
		  };
		  
		  const foodMenuData = {
			  h4ProductTitle: "Guava Pastry - 15 Pack",
			  p: "This packge serve 15 people and include 15 Guava Pastries.",
			  h3Price: "$79.00",
			  foodImageProps: foodImageData,
			  btn2Props: btn2Data,
			  btntextProps: btntextData,
		  };
		  
		  const roundtag2Data = {
			  RoundTag: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-with-option-oval-936343EE-6B98-4F51-B201-09AD332EC05F@2x.png",
			  xnew: "NEW",
		  };
		  
		  const foodImage2Data = {
			  foodImage: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-with-option-food-image-5E312D40-7212-4445-8919-2465EDEE2A9C.png",
			  roundtagProps: roundtag2Data,
		  };
		  
		  const btn22Data = {
			  buttonDefaultPrimary: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/product-with-option-buttonbigprimary-47E4AFDB-847D-4DC7-A87E-D16AB83736C8.png",
		  };
		  
		  const btntext2Data = {
			  btnText: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-btn-text-74007FDC-58EA-4B7C-832C-79BE0B53074A.png",
		  };
		  
		  const foodMenu2Data = {
			  h4ProductTitle: "La Flaca Margarita",
			  p: "This packge serve 15 people and include 15 Guava Pastries.",
			  h3Price: "$79.00",
			  foodImageProps: foodImage2Data,
			  btn2Props: btn22Data,
			  btntextProps: btntext2Data,
		  };
		  
		  const roundtag22Data = {
			  RoundTag: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-with-option-oval-936343EE-6B98-4F51-B201-09AD332EC05F@2x.png",
			  xnew: "NEW",
		  };
		  
		  const foodImage22Data = {
			  foodImage: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-food-image-E544432D-11B9-426F-9BE7-E6A39760A415.png",
			  roundtag2Props: roundtag22Data,
		  };
		  
		  const btn23Data = {
			  buttonDefaultPrimary: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/product-with-option-buttonbigprimary-47E4AFDB-847D-4DC7-A87E-D16AB83736C8.png",
		  };
		  
		  const btntext3Data = {
			  btnText: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-btn-text-74007FDC-58EA-4B7C-832C-79BE0B53074A.png",
		  };
		  
		  const foodMenu3Data = {
			  h4ProductTitle: "La Postal",
			  p: "This packge serve 15 people and include 15 Guava Pastries.",
			  h3Price: "$79.00",
			  foodImage2Props: foodImage22Data,
			  btn2Props: btn23Data,
			  btntextProps: btntext3Data,
		  };
		  
		  const roundtag23Data = {
			  RoundTag: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-with-option-oval-936343EE-6B98-4F51-B201-09AD332EC05F@2x.png",
			  xnew: "NEW",
		  };
		  
		  const foodImage23Data = {
			  foodImage: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/home-food-image-29C7975E-BA7E-47C7-AAFE-9068212382F0.png",
			  roundtag2Props: roundtag23Data,
		  };
		  
		  const btn24Data = {
			  buttonDefaultPrimary: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/product-with-option-buttonbigprimary-47E4AFDB-847D-4DC7-A87E-D16AB83736C8.png",
		  };
		  
		  const btntext4Data = {
			  btnText: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-btn-text-74007FDC-58EA-4B7C-832C-79BE0B53074A.png",
		  };
		  
		  const foodMenu4Data = {
			  h4ProductTitle: "Frozen Strawberry Daiquiry",
			  p: "This packge serve 15 people and include 15 Guava Pastries.",
			  h3Price: "$79.00",
			  foodImage2Props: foodImage23Data,
			  btn2Props: btn24Data,
			  btntextProps: btntext4Data,
		  };
		  
		  const btn3Data = {
			  buttonDefaultPrimary: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fbd30d3223a5c9c7dffe5f9/img/home-buttonbigprimary-83789030-BC3F-4743-8216-872B06710CFB.png",
		  };
		  
		  const subscribeBoxData = {
			  subscribeBox: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/home-background-subscribe-box-E4FBD69B-C4A3-4E14-9D14-E6031CD3F34D.png",
			  subscribeToLearnM: "Subscribe  to learn more",
			  quisquePretiumDolo: "Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet. ",
			  yourEmail: "Your email ...",
			  btn3Props: btn3Data,
		  };
		  
		  const footerData = {
			  logoMain2: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/my-account-billing-logo-main2-541F61B1-1A7E-47FD-903D-9EC6AA3DD1C5.png",
			  loremIpsumIsSimpl: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
			  facebook: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/cart-facebook-A4052635-A8D0-4148-822E-648F01DEF913.png",
			  instagram: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/my-account-dashboard-instagram-AF0DADB8-3CA7-4A85-B5F2-07A1413023CD.png",
			  twitter: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/my-account-orders-twitter-DD4FA3A5-4F76-415D-876D-07D353E046B6.png",
			  explore: "Explore",
			  Uf105Uf105Uf105Uf105Uf105: <><br/><br/><br/><br/></>,
			  homeSergioU2019SRestau: <>Home<br/>Sergio’s Restaurant<br/>Sergio’s Cuban<br/>About Us <br/>Contact Us</>,
			  contactInfo: "Contact Info",
			  iconLocation: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/my-account-change-password-icon---location-D094A7B6-8F71-48E4-A50A-1AD27EF249C5.png",
			  iconPhone: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/checkout-icon-phone-2A6ED988-7192-4C8E-8BA0-0563C41B2F5D.png",
			  ourLocationCopy: "Our Location:",
			  x12380SwStMiami: "12380 SW St, Miami, FL 33186",
			  phones: "Phones:",
			  x13055529623: "+1-305-552-9623",
			  instagramPost: "Instagram post",
			  instagramPost2: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/my-account-user-account-instagram-post-3797BBEB-5C22-4B09-A0D4-6A8437B28D4C.png",
			  instagramPost3: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-with-option-instagram-post-C031F29F-8575-40FC-A2E0-053E6911D7EB.png",
			  instagramPost4: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/my-account-dashboard-instagram-post-1AFB66D2-BB3D-451A-83F4-46B2068802CE.png",
			  instagramPost5: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/home-instagram-post-D44FDBE0-3445-463D-B004-A7AC96D46316.png",
			  instagramPost6: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/product-with-option-instagram-post-B91B79E9-CACA-47FF-B6C0-1B67935C0A0A.png",
			  instagramPost7: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fac0e46af39791adfead71e/img/cart-instagram-post-0F1BE9CF-5C41-4801-99E1-A069B80C2709.png",
		  };
		  
		  const HOMEData = {
			  hero: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-bg-hero-5C4FB2F3-AFFA-45C8-8165-0C85A3E02C6A.png",
			  imgLeftBanner: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-img-left-banner-3CFBF1BA-C6FB-488E-B168-30E384CE3233.png",
			  imgRightBanner: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-img-right-banner-2917DCC0-B5C8-439F-87B7-C4C0BAAC12CE.png",
			  bigH1: "Get everything Sergio’s all in one marketplace ",
			  oval: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/product-with-option-oval-AC7B8836-2EFE-40E6-AD7D-D88F4BBB665A.png",
			  locallyPrepared: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-locally-prepared-89C04A52-3108-42B8-A5F1-757EAEA458B2.png",
			  h3Red: "Locally Prepared",
			  p: "Nullam faucibus a libero quis vesibulum proin vetibulum",
			  trustedName: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-trusted-name-C5C426EF-21EE-4D72-A5A1-079D5A99DD10.png",
			  h3Red2: "Trusted Name",
			  p2: "Nullam faucibus a libero quis vesibulum proin vetibulum",
			  miamiFavourite: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-miami-favourite-484B7D31-63ED-45E5-B21F-0AEADA5E423D.png",
			  h3Red3: "Miami Favourites",
			  p3: "Nullam faucibus a libero quis vesibulum proin vetibulum",
			  img: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-img-A915BA93-430B-4F5F-96FF-E102898BDA5B.png",
			  h3Red4: "Weekly Plans",
			  p4: "Nullam faucibus a libero quis vesibulum proin vetibulum",
			  h2Red: "Convenient and Delicious delivered to your door",
			  pBig: "Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet. Fusce sodales consequat velit eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi sit amet nisi iaculis, fringilla orci.",
			  ovalCopy: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-oval-copy-930707D6-80FF-499B-818A-69677161B02F.png",
			  conveninet: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-conveninet-DECA58EB-595D-4948-8450-18ACA7F00DB3.png",
			  h2: "Shop all products",
			  quisquePretiumDolo: "Quisque pretium dolor turpis, quis blandit turpis",
			  searchBox: "https://anima-uploads.s3.amazonaws.com/projects/5fa98f63c6eade19c4b1e0e0/releases/5fa98f6baa0320296c6e0c6f/img/home-rectangle-3644B770-E174-4EC5-8661-55FA641749D9.png",
			  searchFoodU2026: "Search food ….",
			  Uf002: "",
			  headerNavigationProps: headerNavigationData,
			  btnbigProps: btnbigData,
			  btnbig2Props: btnbig2Data,
			  foodMenuProps: foodMenuData,
			  foodMenu2Props: foodMenu2Data,
			  foodMenu3Props: foodMenu3Data,
			  foodMenu4Props: foodMenu4Data,
			  subscribeBoxProps: subscribeBoxData,
			  footerProps: footerData,
		  };
		  
		  
		  
	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
					    <HOME {...HOMEData} />
						{/*<SEO
							title={ title }
							seoData={ seo }
							uri={ uri }
							header={ { siteTitle: 'Gatsby WooCommerce Theme' } }
							openGraphImage={ getOgImage( seo ) }
						/>
						<Carousel categories={ categories }/>
						<Feature {...featureData} />

						 <Search
							products={ products }
							initialProducts={ products }
							engine={ options }
							category={ categoryName }
							categories={ categories }
						/> */}
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default FrontPage;

