import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// This component contains the content for the Terms of Website Use page.
const WebsiteUseTermsContent = () => (
  <div className="bg-white">
    {/* Page Title Banner */}
    <div className="bg-background mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 md:py-20 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Terms and Conditions of Website Use
        </h1>
      </div>
    </div>

    {/* Main Content Area */}
    <main className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="space-y-8 text-gray-700 font-serif leading-relaxed">
        {/* Introductory Block */}
        <div className="bg-gray-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
          <p className="text-sm sm:text-base">
            This page sets out the terms of use of our website www.webdesigo.com
            (our site). Please read these terms of use carefully before using
            our site.
          </p>
        </div>

        {/* 1. Acceptance */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            1. Acceptance
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            By using our site, you indicate that you accept:
          </p>
          <ul className="mt-2 space-y-2 list-disc list-inside text-sm sm:text-base">
            <li>
              These terms of use and you agree to abide by them. If you do not
              agree to these terms, please refrain from using our site.
            </li>
            <li>
              All proprietary rights in the material displayed and/or received
              shall remain the property of WebDesigo LLC.
            </li>
          </ul>
        </div>

        {/* 2. Accessing Our Site */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            2. Accessing Our Site
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Access to our site is permitted on a temporary basis. We aim to
            update our site regularly, but any of the material may be out of
            date at any given time, and we are under no obligation to update it.
            We may suspend access to our site or close it indefinitely and
            reserve the right to withdraw or amend the service we provide
            without notice.
          </p>
        </div>

        {/* 3. Limitations on Use */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            3. Limitations on Use
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We are the owner or the licensee of all intellectual property rights
            in our site and in the material published on it. All rights are
            reserved. Material on this website may not be reproduced. You must
            not use any text, illustrations, photographs, video or audio
            sequences, or any graphics.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            If you wish to make any use of material on our site please address
            your request to{" "}
            <a
              href="mailto:webdesigollc@gmail.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              webdesigollc@gmail.com
            </a>
            .
          </p>
        </div>

        {/* 4. Website Content for General Information Only */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            4. Website Content For General Information Only
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            The materials displayed on our site are not intended to amount to
            advice on which reliance should be placed. We therefore disclaim all
            liability and responsibility arising from any reliance placed on
            such materials by any visitor to our site.
          </p>
        </div>

        {/* 5. Information About You */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            5. Information About You And Your Visits
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We process information about you in accordance with our privacy
            policy. By using our site, you consent to such processing and you
            warrant that all data provided by you is accurate.
          </p>
        </div>

        {/* 6. Uploading Material */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            6. Uploading Material
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Currently, no material can be uploaded to our site.
          </p>
        </div>

        {/* 7. User Generated Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            7. User Generated Content
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            There is currently no user-generated content on our website.
          </p>
        </div>

        {/* 8. Misuse of Site */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            8. Misuse of Site
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            You must not misuse our site by knowingly introducing viruses,
            trojans, worms, or other malicious material. You must not attempt to
            gain unauthorised access to our site, its server, or any connected
            database. We will report any such breach to the relevant law
            enforcement authorities and your right to use our site will cease
            immediately.
          </p>
        </div>

        {/* 9. Links to Our Site */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            9. Links to Our Site
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            You must not link to our home page without our prior written
            consent. Any agreed link must be fair and legal and not damage our
            reputation. Our site must not be framed on any other site. We
            reserve the right to withdraw linking permission without notice.
          </p>
        </div>

        {/* 10. Links from Our Site */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            10. Links from Our Site
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Links on our site to other sites and resources provided by third
            parties are for your information only. We have no control over the
            contents of those sites and accept no responsibility for them or for
            any loss or damage that may arise from your use of them.
          </p>
        </div>

        {/* 11. Limitations on Liability */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            11. Limitations on Liability
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            The material on our site is provided without any guarantees as to
            its accuracy. To the extent permitted by law, we exclude any
            liability for any direct, indirect, or consequential loss or damage,
            including but not limited to:
          </p>
          <ul className="mt-2 space-y-2 list-disc list-inside text-sm sm:text-base">
            <li>Loss of income or revenue;</li>
            <li>Loss of business;</li>
            <li>Loss of profits or contracts;</li>
            <li>Loss of anticipated savings;</li>
            <li>Loss of data or goodwill;</li>
            <li>Wasted management or office time.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base">
            This does not affect our liability for death or personal injury
            arising from our negligence, nor any other liability which cannot be
            excluded or limited under applicable law.
          </p>
        </div>

        {/* 12. Jurisdiction and Applicable Law */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            12. Jurisdiction and Applicable Law
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            The English courts will have exclusive jurisdiction over any claim
            arising from a visit to our site. These terms shall be governed by
            and construed in accordance with the law of England and Wales.
          </p>
        </div>

        {/* 13. Variations */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            13. Variations
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            We may revise these terms of use at any time by amending this page.
            You are expected to check this page from time to time to take notice
            of any changes we make, as they are binding on you.
          </p>
        </div>

        {/* 14. Queries */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            14. Queries
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            If you have any queries about material that appears on our site,
            please contact us.
          </p>
        </div>
      </div>
    </main>
  </div>
);

// The main page component that composes the Header, Footer, and the terms content.
export default function WebsiteUseTermsPage() {
  return (
    <>
      <Header />
      <WebsiteUseTermsContent />
      <Footer />
    </>
  );
}
