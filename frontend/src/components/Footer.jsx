import React from "react";
import { footerStyles } from "../assets/dummyStyles";
import {
  FaApplePay,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiBookmark, FiLink, FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/",
    },
  ];
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.topBorder} />
      {/* Floating shapes */}
      <div
        className={`${footerStyles.floatingShape} -top-24 -right-24 w-80 h-80 opacity-20`}
      ></div>
      <div
        className={`${footerStyles.floatingShape} -bottom-40 -left-24 w-96 h-96 opacity-15 animation-delay-2000`}
      ></div>
      <div
        className={`${footerStyles.floatingShape} top-1/4 left-1/3 w-64 h-64 bg-emerald-600 opacity-10 animate-pulse animation-delay-1000`}
      ></div>

      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          {/* Brand */}
          <div>
            <h2 className={footerStyles.brandTitle}>
              FOOD<span className={footerStyles.brandSpan}>BASKET</span>
            </h2>
            <p className={footerStyles.brandText}>
              Bringinging you the freshest organic produce since 2000. Our
              mission is to deliver farm-fresh goodness right to your doorstep.
            </p>

            <div className="space-x-3 flex">
              {socialLinks.map((social, idx) => (
                <a
                  href={social.url}
                  key={idx}
                  target="_blank"
                  aria-label={`Visit our ${social.icon.name.replace("Fa", "")} page`}
                  className={footerStyles.socialLink}
                >
                  <social.icon
                    className={footerStyles.socialIcon}
                  ></social.icon>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className={footerStyles.sectionTitle}>
              <FiLink className={footerStyles.sectionIcon} /> Quick Links
            </h3>
            <ul className={footerStyles.linkList}>
              {["Home", "Shop", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className={footerStyles.linkItem}
                  >
                    <span className={footerStyles.linkBullet}></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={footerStyles.sectionTitle}>
              <BsTelephone className={footerStyles.sectionIcon} /> Contact Us
            </h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaMapMarkerAlt className={footerStyles.contactIcon} />
                </div>
                <div>
                  <p>123 Organic valley, Green City, GC 12345</p>
                </div>
              </li>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaPhone className={footerStyles.contactIcon} />
                </div>
                <div>
                  <p>+254 2546327891</p>
                </div>
              </li>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaEnvelope className={footerStyles.contactIcon} />
                </div>
                <div>
                  <p>contact@farmbasket.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={footerStyles.sectionTitle}>
              <FiMail className={footerStyles.sectionIcon} />
              NewsLetter
            </h3>
            <p className={footerStyles.newsletterText}>
              Subscribe to our newsletter for fresh updates, exclusive offers,
              and seasonal recipes!
            </p>
            <div className={footerStyles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter Email Address"
                className={footerStyles.newsletterInput}
              />
              <button className={footerStyles.newsletterButton}>
                <BiMailSend className="mr-2 text-lg" />
                <span>Subscribe</span>
              </button>
            </div>
            <p className={footerStyles.privacyText}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className={footerStyles.paymentSection}>
          <h4 className={footerStyles.paymentTitle}>
            <FiBookmark className={footerStyles.paymentIcon} />
            We Accept All Major Payment Methods
          </h4>

          <div className={footerStyles.paymentMethods}>
            {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaApplePay].map(
              (Icon, idx) => (
                <div key={idx} className={footerStyles.paymentItem}>
                  <Icon className={footerStyles.paymentIcon} />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className={footerStyles.attribution}>
          <div className={footerStyles.attributionBadge}>
            <div className={footerStyles.josmartContainer}>
              <div className={footerStyles.josmart}></div>
              <div className={footerStyles.josmartInner}>
                <div className={footerStyles.josmartInnerShape} />
              </div>
            </div>

            <span className={footerStyles.attributionText}>
              &copy; 2026 FoodBasket | All Rights Reserved. Designed By{" "}
              <a
                href="https://josmart.co.ke"
                target="_blank"
                className={footerStyles.attributionLink}
              >
                Josmart Technologies
              </a>
            </span>
          </div>
        </div>
      </div>

      <style>{footerStyles.customCSS}</style>
    </footer>
  );
};

export default Footer;
