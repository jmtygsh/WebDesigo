import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// This component contains the content for the Terms and Conditions page.
const TermsAndConditionsContent = () => (
  <div className="bg-white">
    {/* Page Title Banner */}
    <div className="bg-background mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 md:py-20 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Terms and Conditions of Sale
        </h1>
      </div>
    </div>

    {/* Main Content Area */}
    <main className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="space-y-8 text-gray-700 font-serif leading-relaxed">
        {/* Introductory Agreement Block */}
        <div className="bg-gray-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
          <p className="text-sm sm:text-base">
            By placing an order with Webdesigo LLC, you confirm that you are in
            agreement with and bound by the terms and conditions below.
          </p>
        </div>

        {/* Definitions */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Definitions
          </h2>
          <div className="mt-4 text-sm sm:text-base space-y-2">
            <p>
              <strong className="font-sans font-semibold text-gray-800">
                The Client:
              </strong>{" "}
              The company or individual requesting the services of Webdesigo LLC.
            </p>
            <p>
              <strong className="font-sans font-semibold text-gray-800">
                Webdesigo LLC:
              </strong>{" "}
              Primary website and print designer, content writers, website
              optimisers, site owner and employees or affiliates.
            </p>
          </div>
        </div>

        {/* General */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            General
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Webdesigo LLC will carry out work only where an agreement is provided
            either by email, telephone, mail or fax, or at the company’s
            discretion a verbal instruction. Webdesigo LLC will
            not work for clients who are under eighteen years of age. An ‘order’
            is deemed to be a written or verbal contract between Webdesigo LLC and
            the client, this includes telephone and email agreements.
          </p>
        </div>

        {/* Website Design, Electronic and Print Media */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Website Design, Electronic & Print Media
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Webdesigo LLC cannot accept responsibility for any losses incurred due
            to malfunction of the website or any part of it or associated email
            links. The website, graphics and any programming code remain the
            property of Webdesigo LLC until all outstanding accounts are paid in
            full. Any scripts, applications or software (unless specifically
            agreed) written by Webdesigo LLC remain the copyright
            of Webdesigo LLC and may only be commercially reproduced or resold with
            the permission of Webdesigo LLC.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            Webdesigo LLC cannot take responsibility for any copyright infringements
            caused by materials submitted by the Client. We will not be liable
            for costs incurred, compensation or loss of earnings due to the
            failure to meet agreed deadlines.
          </p>
        </div>

        {/* Renting a Website */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Renting a Website
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            When renting a website, the domain name, design, and content
            (excluding client-provided images) remain the property of Webdesigo LLC. The monthly rental includes hosting, server
            management, and regular SEO reviews. A non-returnable setup payment
            may be required. There is no minimum rental period. If payments are
            not received, the service may be terminated. If a client wishes to
            purchase a rented website, a price will be offered reflecting its
            current performance and value.
          </p>
        </div>

        {/* Compatibility */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Compatibility
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Webdesigo LLC will take all reasonable steps to ensure that any
            developed/designed site or application will function correctly on
            the server it is initially installed on and when viewed with current
            versions of major browsers like Internet Explorer and Firefox. We
            can offer no guarantees of correct function with all browser
            software as they constantly change.
          </p>
        </div>

        {/* Website Hosting */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Website Hosting
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            While we use highly resilient servers, no guarantees can be made as
            to the availability or interruption of this service. Webdesigo LLC
            cannot accept liability for losses caused by the unavailability,
            malfunction or interruption of this service. We reserve the right to
            remove without notice any material which may be deemed offensive,
            illegal or controversial.
          </p>
        </div>

        {/* Search Engine Optimisation (SEO) */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Search Engine Optimisation
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We cannot offer any guarantees regarding the search engine
            optimisation or ranking of websites, except where a specific
            agreement links payment to the ranking of specified keyword phrases.
            We cannot accept liability for any change in search engine rankings
            due to changes in search engine algorithms.
          </p>
        </div>

        {/* Payment of Accounts */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Payment of Accounts
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            A deposit is required from any new client before any work is carried
            out. Any outstanding accounts are required to be paid in full no
            later than 30 days from the date of the invoice unless by prior
            arrangement. If accounts are not settled, access to the related
            website may be denied and web pages removed. We reserve the right to
            take legal action to pursue payment.
          </p>
        </div>

        {/* Domain Name Policies */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Domain Name Policies
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            <strong className="font-sans font-semibold text-gray-800">
              Registration:
            </strong>{" "}
            By ordering a domain, you agree that we can share required data with
            Nominet. This information normally appears on the public WHOIS
            records. By registering a domain, you accept our terms as well as
            the registry&apos;s terms, which can be found at{" "}
            <a
              href="https://www.nominet.org.uk/uk-domain-names/registering-uk-domain/legal-details/terms-and-conditions-domain-name-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Nominet&apos;s Terms
            </a>
            .
          </p>
          <p className="mt-4 text-sm sm:text-base">
            <strong className="font-sans font-semibold text-gray-800">
              Renewal & Expiry:
            </strong>{" "}
            Domains are renewed annually. We will send email reminders before
            expiry. It is the registrant&apos;s responsibility to ensure their
            contact details are up to date. If a domain is not renewed, it
            enters a 30-day protected period, followed by a 60-day grace period
            with an additional redemption fee. After 90 days, it is cancelled
            and released.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            <strong className="font-sans font-semibold text-gray-800">
              Termination & Transfer:
            </strong>{" "}
            To terminate your contract, please email us no less than 30 days
            before renewal. All outstanding balances must be paid in full before
            termination or transfer. We do not charge for transferring a domain
            to another registrar.
          </p>
        </div>

        {/* Complaints and Escalation */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Complaints and Escalation
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Please contact us regarding any problem with our service. We give
            priority to resolving issues as quickly as possible. To report abuse
            (e.g., phishing, spam), please email us at{" "}
            <a
              href="mailto:webdesigollc@gmail.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              webdesigollc@gmail.com
            </a>
            .
          </p>
        </div>

        {/* English Law */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            English Law
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Unless otherwise agreed in writing, all sales and contracts shall in
            all respects be construed and operate as an English contract and in
            conformity with English Law. The Seller and the Customer hereby
            irrevocably agree to submit to the jurisdiction of the English
            Courts.
          </p>
          <p className="mt-2 text-xs text-gray-500">Last Updated: 04/04/2018</p>
        </div>
      </div>
    </main>
  </div>
);

// The main page component that composes the Header, Footer, and the terms content.
export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <TermsAndConditionsContent />
      <Footer />
    </>
  );
}
