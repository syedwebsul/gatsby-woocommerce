import Link from "gatsby-link";
import { normalizePath, sanitize } from "../../utils/functions";

import insta1 from "../../images/insta1.png";
import insta2 from "../../images/insta2.png";
import insta3 from "../../images/insta3.png";
import insta4 from "../../images/insta4.png";
import insta5 from "../../images/insta5.png";
import insta6 from "../../images/insta6.png";
import address from "../../images/addressicon.png";
import phone from "../../images/phoneicon.png";
import fb from "../../images/fb-icon.png";
import twitter from "../../images/twitter-icon.png";
import insta from "../../images/insta-icon.png";

import React from "react";

const Footer = ( { data } ) => {
	const {
		      wp: {
			      footer: { sidebarOne },
		      },
		      footerMenuItems,
	      } = data;





	  
	return (
		<footer className="footer">
			<div className="container">

				<div className="footer__top">


					{ sidebarOne ? (
						<div className="footer-box footer-one">
							<div
								dangerouslySetInnerHTML={ { __html: sanitize( sidebarOne ) } }
								className="footer__sidebar-one"
							/>

							<div className="social-icon">
								<ul>
									<li><a href=""><img src={fb} alt="" /></a></li>
									<li><a href=""><img src={twitter} alt="" /></a></li>
									<li><a href=""><img src={insta} alt="" /></a></li>
								</ul>
							</div>	
						</div>
					) : null }

                   { footerMenuItems.edges.length ? (
					   <div className="footer-box footer-two">
							<h2>Explore</h2>
							<ul>
								{ footerMenuItems.edges.map( ( menu ) => (
									<li key={ menu.node.databaseId }>
										<Link
											className="header-nav__menu-link"
											to={ normalizePath( menu.node.url ) }
										>
											<i class="fa fa-angle-right"></i> { menu.node.label }
										</Link>
									</li>
								) ) }
							</ul>
						</div>
					) : (
						""
					) }




					<div className="footer-box footer-three">		
					    <h2>Contact Info</h2>

						<div className="address-box">
							<img src={address} alt="" />
							<h4>Our Location:</h4>
							<p>12380 SW St, Miami, FL 33186</p>
						</div>


						<div className="address-box">
							<img src={phone} alt="" />
							<h4>Phones:</h4>
							<p>+1-305-552-9623</p>
						</div>
					
					
					</div>



					<div className="footer-box footer-four">		
						<h2>Instagram post</h2>
						
						<div className="insta-post">
							<img src={insta1} alt="" />
							<img src={insta2} alt="" />
							<img src={insta3} alt="" />
							<img src={insta4} alt="" />
							<img src={insta5} alt="" />
							<img src={insta6} alt="" />
						</div>
					</div>



					{/* { sidebarTwo ? (
						<div
							dangerouslySetInnerHTML={ { __html: sanitize( sidebarTwo ) } }
							className="footer__sidebar-two footer-widget"
						/>
					) : null } */}





					
				</div>

			
			</div>
		</footer>
		
	);
};


/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Footer };
