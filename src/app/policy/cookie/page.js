import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// This component now contains all the content for the cookie policy page.
const CookiePolicyContent = () => (
  <div className="bg-white">
    {/* Page Title Banner - Made responsive */}
    <div className="bg-background mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 md:py-20 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Cookie Policy
        </h1>
      </div>
    </div>

    {/* Main Content - Adjusted padding for better responsiveness */}
    <main className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="space-y-8 text-gray-700 font-serif leading-relaxed">
        {/* Introductory Warning - Responsive text and padding */}
        <div className="bg-gray-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-sans">
            THIS WEBSITE USES COOKIES SET BY US AND BY THIRD PARTIES.
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            Further information on these cookies is set out below. Please read
            this information carefully. By continuing to use this website, you
            are consenting to the use of cookies. If you would like information
            about cookies and on how to restrict or block cookies, please visit{" "}
            <a
              href="http://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
        </div>

        {/* "What is a Cookie?" section - Responsive headings and text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            What is a Cookie?
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Cookies are text files containing small amounts of information which
            are downloaded to your personal computer, mobile or other device
            when you visit a website. Cookies are then sent back to the
            originating website on each subsequent visit, or to another website
            that recognises that cookie. Cookies are useful because they allow a
            website to recognise a user’s device and support relevant
            information and functionality.
          </p>
        </div>

        {/* "Cookies Used on This Website" section - Responsive headings */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Cookies Used on This Website
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">
                Strictly Necessary Cookies
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                These cookies are essential in order to enable you to move
                around the website and use its features, such as accessing
                secure areas of the website. Without these cookies services you
                have asked for cannot be provided.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">
                Performance Cookies
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                These cookies collect information about how visitors use the
                website, for instance which pages visitors go to most often. All
                information these cookies collect is aggregated and therefore
                anonymous. It is only used to improve how the website works.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">
                Functionality Cookies
              </h3>
              <p className="mt-2 text-sm sm:text-base">
                These cookies allow the website to remember choices you make
                (such as your user name, language or the region you are in) and
                provide enhanced, more personal features. The information these
                cookies collect may be anonymised and they cannot track your
                Browse activity on other websites.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed cookie information table - Wrapped for horizontal scrolling on small screens */}
        {/* <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Detailed Cookie Information
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-900">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Cookie Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Use
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    __utma
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Metrics: Google. Used to evaluate website use and compile
                    reports on user activity via Google Analytics.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    2 years
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div> */}

        {/* "Policy Changes" section - Responsive heading and text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Policy Changes
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            This policy replaces all previous versions and is correct as at
            August 2025. We reserve the right to change the policy at any time.
            Any changes to this policy will be posted here.
          </p>
        </div>
      </div>
    </main>
  </div>
);

// The main page component now composes the Header, Footer, and the consolidated content.
export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <CookiePolicyContent />
      <Footer />
    </>
  );
}
