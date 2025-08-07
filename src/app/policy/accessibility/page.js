import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// This component contains all the content for the accessibility page.
const AccessibilityContent = () => (
  <div className="bg-white">
    {/* Page Title Banner - Made responsive */}
    <div className="bg-background mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 md:py-20 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Accessibility Statement
        </h1>
      </div>
    </div>

    {/* Main Content - Adjusted padding for better responsiveness */}
    <main className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="space-y-8 text-gray-700 font-serif leading-relaxed">
        {/* Our Commitment */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Our Commitment
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            At webdesigo, we strive to make our website as
            accessible as possible for the widest possible audience. We actively
            work to improve accessibility wherever possible and adhere to the
            available standards and guidelines.
          </p>
        </div>

        {/* Conformance and Standards */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Conformance and Standards
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            This website endeavours to conform to level Double-A of the World
            Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.0.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            These guidelines explain how to make web content more accessible
            for people with disabilities. Conformance with these guidelines
            will help make the web more user-friendly for all people.
          </p>
        </div>

        {/* Technical Standards */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Technical Standards
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            This site has been built entirely using Next.js with code that adheres to W3C standards for HTML and CSS. It displays correctly in modern browsers, and by following standards-compliant practices, it ensures compatibility with future browsers as well.
          </p>
        </div>

        {/* Ongoing Efforts & Feedback */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-sans border-b pb-2">
            Ongoing Efforts & Feedback
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Whilst we strive to adhere to the accepted guidelines and standards
            for accessibility and usability, it is not always possible to do so
            in all areas of the website.
          </p>
          <p className="mt-4 text-sm sm:text-base">
            We are continually seeking out solutions that will bring all areas
            of the site up to the same level of overall web accessibility. In
            the meantime, should you experience any difficulty in accessing the
            UK Website Workshop Limited website, please{" "}
            <a
              href="/contact" // Assuming a contact page route
              className="text-blue-600 font-semibold hover:underline"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  </div>
);

// The main page component that composes the Header, Footer, and content.
export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <AccessibilityContent />
      <Footer />
    </>
  );
}