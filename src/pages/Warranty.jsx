import { Link } from 'react-router-dom';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import Icon from '../Component/Icon';

const Warranty = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-20 sm:h-18 bg-black z-40 pointer-events-none" />
            <section className="w-full bg-white pt-28 sm:pt-36 pb-20 px-6 sm:px-12 lg:px-24 text-black font-sans antialiased">
                {/* items-center ensures content stays centered on all screens */}
                <div className="max-w-5xl mx-auto flex flex-col items-center">

                    {/* Main Heading Styled like Figma - Centered */}
                    <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold text-neutral-900 tracking-tight mb-12 text-center w-full">
                        Lifetime Warranty
                    </h1>

                    {/* Content Container - text-center added here */}
                    <div className="flex flex-col gap-8 text-sm sm:text-base text-neutral-700 leading-relaxed text-center font-normal w-full items-center">

                        {/* OVERVIEW SECTION */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                LIFETIME LIMITED WARRANTY
                            </h3>
                            <p>
                                This website is operated by SEE Enterprises LLC. Throughout the site, the terms "we", "us" and "our" refer to SEE Enterprises LLC. SEE Enterprises LLC offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                            </p>
                            <p>
                                By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
                            </p>
                            <p>
                                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
                            </p>
                            <p>
                                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                            </p>
                            <p>
                                Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you.
                            </p>
                        </div>

                        {/* SECTION 1 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 1 - ONLINE STORE TERMS
                            </h3>
                            <p>
                                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                            </p>
                            <p>
                                You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                            </p>
                            <p>
                                You must not transmit any worms or viruses or any code of a destructive nature.
                            </p>
                            <p>
                                A breach or violation of any of the Terms will result in an immediate termination of your Services.
                            </p>
                        </div>

                        {/* SECTION 2 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 2 - GENERAL CONDITIONS
                            </h3>
                            <p>
                                We reserve the right to refuse Service to anyone for any reason at any time.
                            </p>
                            <p>
                                You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
                            </p>
                            <p>
                                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us.
                            </p>
                            <p>
                                The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
                            </p>
                        </div>

                        {/* SECTION 3 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
                            </h3>
                            <p>
                                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
                            </p>
                            <p>
                                This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
                            </p>
                        </div>

                        {/* SECTION 4 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
                            </h3>
                            <p>
                                Prices for our products are subject to change without notice.
                            </p>
                            <p>
                                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                            </p>
                            <p>
                                We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                            </p>
                        </div>

                        {/* SECTION 5 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 5 - PRODUCTS OR SERVICES
                            </h3>
                            <p>
                                Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Refund Policy: <Link to="/refund-policy" className="underline font-semibold hover:text-neutral-500">Return Policy</Link>
                            </p>
                            <p>
                                We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. Additionally, there is a variation in our color from our paint providers which includes but is not limited to the sheen, shade, and tint of each color.
                            </p>
                            <p>
                                We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or Service made on this site is void where prohibited.
                            </p>
                            <p>
                                We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected. By checking our Terms & Conditions box while purchasing our products, you agree also to our Warranty linked here: Warranty. The warranty covers what parts are covered within our warranty and what exactly we will cover in addition to how our warranty claim process works.
                            </p>
                        </div>

                        {/* SECTION 6 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
                            </h3>
                            <p>
                                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.
                            </p>
                        </div>

                        {/* SECTION 12 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 12 - PROHIBITED USES
                            </h3>
                            <p>
                                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances...
                            </p>
                        </div>

                        {/* SECTION 13 */}
                        <div className="flex flex-col gap-3 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                            </h3>
                            <p>
                                We do not guarantee, represent or warrant that your use of our Service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.
                            </p>
                            <p>
                                In no case shall SEE Enterprises LLC, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, Service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind...
                            </p>
                        </div>

                        {/* SECTION 20 */}
                        <div className="flex flex-col gap-3 border-t border-neutral-100 pt-6 mt-4 items-center w-full">
                            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-black text-center">
                                SECTION 20 - CONTACT INFORMATION
                            </h3>
                            <p>
                                Questions about the Terms of Service should be sent to us at <a href="mailto:info@theluxurypergola.com" className="underline font-semibold hover:text-neutral-500">info@theluxurypergola.com</a>.
                            </p>
                            <p className="font-medium text-black text-center">
                                Our contact information is posted below:<br />
                                <span className="text-neutral-600 font-normal">info@theluxurypergola.com</span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <TalkTo />
            <Icon />
            <Footer />
        </>
    );
};

export default Warranty;