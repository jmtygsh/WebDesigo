import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// This component contains the content for the privacy policy page, styled with Tailwind CSS.
const PrivacyPolicyContent = () => (
  <div className="bg-white">
    {/* Page Title Banner - Responsive and styled like the example */}
    <div className="bg-background mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 md:py-20 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Privacy Policy
        </h1>
      </div>
    </div>

    {/* Main Content Area - Centered with responsive padding */}
    <main className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="space-y-8 text-gray-700 font-serif leading-relaxed">
        {/* Introductory Block - Styled to highlight key information */}
        <div className="bg-gray-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
          <p className="text-sm sm:text-base">
            This privacy policy explains how we use any information we collect
            about you, how you can tell us if you prefer to limit the use of
            that information, and the procedures that we have in place to
            safeguard your privacy.
          </p>
        </div>

        {/* What is Personal Data? */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            What is Personal Data?
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Under the EU&apos;s General Data Protection Regulation (GDPR), personal
            data is defined as any information relating to an identified or
            identifiable natural person (&apos;data subject&apos;). An identifiable
            natural person is one who can be identified, directly or indirectly,
            by reference to an identifier such as a name, an identification
            number, location data, an online identifier, or to one or more
            factors specific to the physical, physiological, genetic, mental,
            economic, cultural, or social identity of that natural person.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            For the purposes of the Data Protection Act 1998 (the “Act”), the
            data controller is WebD.
          </p>
        </div>

        {/* Summary of Our Privacy Policy */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Summary of Our Privacy Policy
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Your privacy is extremely important to us, so we only use the
            information you provide about yourself and your company to answer
            your enquiry or to help us improve our service to you. We do not
            share this information with any third party except to the extent
            necessary to answer your enquiry if it requires the involvement of a
            third party. We use return email addresses to answer the email we
            receive; such addresses are not used for any other purpose and are
            not shared with outside parties.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            We are committed to ensuring that the information we collect and use
            is appropriate for its purpose and does not constitute an invasion
            of your privacy. We will process personal data for the duration of
            any contract and will store only the necessary personal data for six
            years after the contract has expired to meet legal obligations.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Information We Collect
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We may collect and process the following data about you:
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
            <li>
              Information you provide by filling in forms on our Website,
              including your name, organisation&apos;s name, position, email address,
              business address, and contact telephone number.
            </li>
            <li>
              If you contact us, we may keep a record of that correspondence.
            </li>
            <li>
              Details of your visits to our site, including traffic data,
              location data, and the resources you access.
            </li>
            <li>
              Information about your computer, including your IP address,
              operating system, and browser type, for system administration.
              This is statistical data and does not identify any individual.
            </li>
          </ul>
        </div>

        {/* How We Use Cookies */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            How We Use Cookies
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We may obtain information about your general internet usage by using
            a cookie file stored on your computer&apos;s hard drive. They help us
            improve our site and deliver a better, more personalized service by
            enabling us to:
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
            <li>Estimate our audience size and usage pattern.</li>
            <li>
              Store information about your preferences to customize our site.
            </li>
            <li>Speed up your searches.</li>
            <li>Recognize you when you return to our site.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base">
            You may refuse to accept cookies by activating the setting on your
            browser. However, if you do so, our system will issue cookies when
            you log on to our site unless you have adjusted your browser
            setting.
          </p>
        </div>

        {/* Data Storage & Security */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Data Storage & Security
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            All information you provide is stored on our secure servers. Where
            we have given you a password to access certain parts of our site,
            you are responsible for keeping it confidential. The transmission of
            information via the internet is not completely secure. While we do
            our best to protect your personal data, any transmission is at your
            own risk.
          </p>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            How We Use Your Information
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We use information held about you in the following ways:
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
            <li>
              To provide you with information, products, or services you request
              or which we feel may interest you, where you have consented to be
              contacted.
            </li>
            <li>
              To carry out our obligations arising from any contracts between
              you and us.
            </li>
            <li>
              To allow you to access secure areas of our Website when you choose
              to do so.
            </li>
          </ul>
        </div>

        {/* Disclosure of Your Information */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Disclosure of Your Information
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We may disclose your personal information to third parties in very
            limited circumstances:
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
            <li>
              Where we engage a third party to provide services directly to us,
              such as a mailing house. All third parties are strictly prohibited
              from using your data for other purposes.
            </li>
            <li>
              If we are under a duty to disclose your data to comply with any
              legal obligation, or to enforce our terms of use.
            </li>
          </ul>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Your Rights
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            You have the right to ask us not to process your personal data for
            marketing purposes. You can exercise this right by checking certain
            boxes on our data collection forms or by contacting us at any time.
            Our site may contain links to other websites with their own privacy
            policies for which we do not accept responsibility.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            The Act gives you the right to access information held about you.
            Any access request may be subject to a fee of £10 to meet our costs.
          </p>
        </div>

        {/* Consent and Policy Changes */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Consent and Policy Changes
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            By submitting your information, you consent to its use as set out in
            this policy. If we change our privacy policy, we will post the
            changes on this page. Continued use of the service will signify that
            you agree to any such changes. We will not transfer data outside the
            European Economic Area.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Contact Details
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We welcome your views about our website and our privacy policy. If
            you have any queries, comments, or if the information you provided
            changes, please contact us.
          </p>
        </div>
      </div>
    </main>
  </div>
);

// The main page component that composes the Header, Footer, and the privacy policy content.
export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}
