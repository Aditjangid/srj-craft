

''



export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-[font-2] mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <article className="space-y-10 text-gray-800">

        {/* GENERAL */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">1. GENERAL</h2>

          <p>
            a) This document is an electronic record generated under the
            Information Technology Act, 2000 and does not require any physical
            or digital signatures.
          </p>

          <p className="mt-4">
            b) This Privacy Policy is published in compliance with Rule 3(1) of
            the Information Technology (Intermediaries Guidelines) Rules, 2011.
          </p>

          <p className="mt-4">
            c) The domain name www.srjcraft.com (“Website”) is owned and
            operated by SRJCRAFT, a sole proprietorship engaged in the design,
            manufacture, and sale of furniture and related products
            (“Company”).
          </p>

          <p className="mt-4">
            d) “User” refers to any person browsing the Website or submitting
            a quotation request form. “Service” refers to the display of
            furniture products and the ability for Users to submit inquiries or
            request quotations.
          </p>

          <p className="mt-4">
            e) By accessing the Website or submitting a quotation request, the
            User accepts this Privacy Policy and the Terms of Use.
          </p>

          <p className="mt-4">
            f) The Company may update or modify this Policy at its discretion.
            Continued use of the Website constitutes acceptance of the updated
            terms.
          </p>
        </section>

        {/* INFORMATION COLLECTION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">
            2. INFORMATION WE COLLECT
          </h2>

          <p>We collect the following information when you interact with the Website:</p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Name and contact details (phone, email) submitted via quotation forms</li>
            <li>City or delivery location mentioned by the User</li>
            <li>Product references selected or inquired about</li>
            <li>Technical information such as IP address, browser type, pages visited</li>
            <li>Any message, specifications, or requirements you voluntarily submit</li>
          </ul>
        </section>

        {/* USE OF INFORMATION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">3. HOW WE USE YOUR INFORMATION</h2>

          <p>Your information is used strictly for:</p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Responding to product inquiries or quotation requests</li>
            <li>Contacting you regarding your requirements</li>
            <li>Improving product listings, catalogue experience, and website performance</li>
            <li>Security, fraud prevention, and internal analytics</li>
          </ul>

          <p className="mt-4">
            We do not sell, rent, or trade your personal information.
          </p>
        </section>

        {/* COMMUNICATION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">4. COMMUNICATION</h2>
          <p>
            By submitting a quotation request or contacting us, you consent to
            being contacted by phone, WhatsApp, SMS, or email regarding your
            inquiry, project, specifications, or follow-up communication.
          </p>

          <p className="mt-4">
            To request removal from marketing communication, write to:<br />
            <strong>srjcrafts@gmail.com</strong>
          </p>
        </section>

        {/* DATA SHARING */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">5. DATA SHARING</h2>
          <p>
            We may share your information with trusted third-party providers
            such as logistics partners, delivery agents, or service vendors
            strictly for fulfilling product inquiries or production requirements.
          </p>

          <p className="mt-4">
            No unnecessary sharing is done. No data is sold or monetized.
          </p>
        </section>

        {/* SECURITY */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">6. DATA SECURITY</h2>
          <p>
            We implement reasonable security practices to protect User data.
            However, no system is completely immune to vulnerabilities. Users
            agree to use the Website at their own risk.
          </p>
        </section>

        {/* USER RESPONSIBILITIES */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">7. USER RESPONSIBILITIES</h2>
          <p>Users agree not to:</p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Misuse the Website or attempt unauthorized access</li>
            <li>Submit false or misleading information in quotation forms</li>
            <li>Interfere with Website operation or security</li>
          </ul>
        </section>

        {/* THIRD-PARTY LINKS */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">8. THIRD-PARTY LINKS</h2>
          <p>
            Some pages may contain links to external sites. We are not
            responsible for their content or privacy practices. Users should
            review the privacy policies of those websites independently.
          </p>
        </section>

        {/* LEGAL COMPLIANCE */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">9. LEGAL COMPLIANCE</h2>
          <p>
            We may disclose User information when required by law, court
            orders, or government authority, or to protect the rights and safety
            of the Company and Users.
          </p>
        </section>

        {/* JURISDICTION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">10. JURISDICTION</h2>
          <p>
            This Policy is governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of the courts in Jodhpur,
            Rajasthan.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">11. CONTACT US</h2>
          <p>
            For privacy-related questions, concerns, or requests, contact us at:
            <br />
            <strong>srjcrafts@gmail.com</strong>
          </p>
        </section>

      </article>
    </main>
  );
}
