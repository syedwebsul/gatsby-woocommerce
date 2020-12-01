import Link from "gatsby-link";
import { normalizePath, sanitize } from "../../utils/functions";
import FacebookIcon from "../icons/facebook-icon";
import TwitterIcon from "../icons/twitter-icon";
import InstagramIcon from "../icons/instagram-icon";
import YouTubeIcon from "../icons/youtube-icon";
import PropTypes from "prop-types";
import React from "react";

const Footer = ( { data } ) => {
	const {
		      wp: {
			      footer: { copyrightText, socialLinks, sidebarOne, sidebarTwo },
		      },
		      footerMenuItems,
	      } = data;

	const staticSocialLink = [
		{ iconName: "facebook", iconUrl: "https://facebook.com/codeytek" },
		{ iconName: "twitter", iconUrl: "https://twitter.com/codeytek" },
		{
			iconName: "instagram",
			iconUrl: "https://www.instagram.com/codeytek_academy",
		},
		{ iconName: "youtube", iconUrl: "https://youtube.com/ImranSayedDev" },
	];

	const socialLinksData = socialLinks.length ? socialLinks : staticSocialLink;


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
		  <div className="footer-">
			<div className="footer-6Mxzrf">
			  <div className="auto-flex">
				<img className="logo-main2" src={logoMain2} />
				<div className="col-1">
				  <p className="lorem-ipsum-is-simpl sourcesanspro-normal-white-14px">{loremIpsumIsSimpl}</p>
				  <div className="auto-flex1-h69VTC">
					<img className="facebook" src={facebook} />
					<img className="instagram" src={instagram} />
					<img className="twitter" src={twitter} />
				  </div>
				</div>
			  </div>
			  <div className="col-2">
				<div className="explore sourcesanspro-bold-alizarin-crimson-20px">{explore}</div>
				<div className="auto-flex2-PaQA8p">
				  <div className="uf105-uf10-f105-uf105 fontawesome-normal-alizarin-crimson-14px">
					{Uf105Uf105Uf105Uf105Uf105}
				  </div>
				  <p className="home-sergi-19s-restau sourcesanspro-bold-white-14px">{homeSergioU2019SRestau}</p>
				</div>
			  </div>
			  <div className="col-3">
				<div className="contact-info sourcesanspro-bold-alizarin-crimson-20px">{contactInfo}</div>
				<div className="auto-flex5">
				  <div className="auto-flex4">
					<img className="icon-location" src={iconLocation} />
					<img className="icon-phone" src={iconPhone} />
				  </div>
				  <div className="auto-flex3-CSs2lL">
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
				  <div className="auto-flex1-xR7Xno">
					<img className="instagram-post-J73xvC" src={instagramPost2} />
					<img className="instagram-post-J73xvC" src={instagramPost3} />
				  </div>
				  <div className="auto-flex2-xR7Xno">
					<img className="instagram-post-J73xvC" src={instagramPost4} />
					<img className="instagram-post-J73xvC" src={instagramPost5} />
				  </div>
				  <div className="auto-flex3-xR7Xno">
					<img className="instagram-post-J73xvC" src={instagramPost6} />
					<img className="instagram-post-J73xvC" src={instagramPost7} />
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		);
	  }
	  
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

	  
	return (
		// <footer className="footer">
		// 	<div className="container">
		// 		{/*Top section*/ }
		// 		<div className="footer__top">
		// 			{ sidebarOne ? (
		// 				<div
		// 					dangerouslySetInnerHTML={ { __html: sanitize( sidebarOne ) } }
		// 					className="footer__sidebar-one footer-widget"
		// 				/>
		// 			) : null }
		// 			{ sidebarTwo ? (
		// 				<div
		// 					dangerouslySetInnerHTML={ { __html: sanitize( sidebarTwo ) } }
		// 					className="footer__sidebar-two footer-widget"
		// 				/>
		// 			) : null }

		// 			{ footerMenuItems.edges.length ? (
		// 				<div className="footer-menu-items footer-widget">
		// 					<h2>About the site</h2>
		// 					<ul>
		// 						{ footerMenuItems.edges.map( ( menu ) => (
		// 							<li key={ menu.node.databaseId }>
		// 								<Link
		// 									className="header-nav__menu-link"
		// 									to={ normalizePath( menu.node.url ) }
		// 								>
		// 									{ menu.node.label }
		// 								</Link>
		// 							</li>
		// 						) ) }
		// 					</ul>
		// 				</div>
		// 			) : (
		// 				""
		// 			) }
		// 		</div>

		// 		{/*	Bottom section*/ }
		// 		<div className="footer__bottom">
		// 			<div className="copyright-text">
		// 				{ copyrightText ? (
		// 					<a href="https://codeytek.com" target="_blank" rel="noreferrer">{ copyrightText }</a>
		// 				) : (
		// 					<a href="https://codeytek.com" target="_blank" rel="noreferrer">Codeytek Academy 2020</a>
		// 				) }
		// 			</div>
		// 			{ socialLinksData.length ? (
		// 				<ul className="social-links">
		// 					{ socialLinksData.map( ( socialLink ) => (
		// 						<li key={ socialLink.iconName }>
		// 							<a href={ socialLink.iconUrl } target="_blank" rel="noreferrer">
		// 								{ "facebook" === socialLink.iconName ? (
		// 									<FacebookIcon/>
		// 								) : null }
		// 								{ "twitter" === socialLink.iconName ? <TwitterIcon/> : null }
		// 								{ "instagram" === socialLink.iconName ? (
		// 									<InstagramIcon/>
		// 								) : null }
		// 								{ "youtube" === socialLink.iconName ? <YouTubeIcon/> : null }
		// 							</a>
		// 						</li>
		// 					) ) }
		// 				</ul>
		// 			) : null }
		// 		</div>
		// 	</div>
		// </footer>
		<div className="main-footer">
			<Footer {...footerData} />
		</div>
	);
};

Footer.propTypes = {
	copyrightText: PropTypes.string,
};

Footer.defaultProps = {
	copyrightText: `Codeytek Academy ${ new Date().getFullYear() }`,
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Footer };
