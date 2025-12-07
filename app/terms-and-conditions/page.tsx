'use client';


export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-[font-2] mb-6">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-10">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <article className="space-y-10 text-gray-800">

        {/* GENERAL */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">1. GENERAL</h2>

          <p>
            a) This document is an electronic record under the Information
            Technology Act, 2000 and applicable rules. It does not require any
            physical or digital signatures.
          </p>

          <p className="mt-4">
            b) These Terms are published pursuant to Rule 3(1) of the
            Information Technology (Intermediaries Guidelines) Rules, 2011.
          </p>

          <p className="mt-4">
            c) The domain www.srjcraft.com (“Website”) is owned and operated by
            SRJCRAFT, a sole proprietorship engaged in the manufacturing and
            sale of furniture and related products (“Company”).
          </p>

          <p className="mt-4">
            d) For the purpose of these Terms:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              “User” refers to any person browsing the Website or requesting a
              quotation for furniture products.
            </li>
            <li>
              “Parties” refers to the User and the Company collectively.
            </li>
            <li>
              “Service” refers to the Website’s display of products, catalogue
              information, and quotation request functionality.
            </li>
          </ul>

          <p className="mt-4">
            e) Section headings are for reference only and do not affect the
            interpretation of these Terms.
          </p>

          <p className="mt-4">
            f) By accessing any part of the Website or submitting a quotation
            request, the User accepts these Terms and the Privacy Policy.
          </p>

          <p className="mt-4">
            g) The Company may modify these Terms at any time without prior
            notice. Continued use of the Website constitutes acceptance of the
            updated Terms.
          </p>
        </section>

        {/* ELIGIBILITY */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">2. ELIGIBILITY</h2>
          <p>
            Users must be competent to contract under the Indian Contract Act,
            1872. If submitting inquiries on behalf of an organization, the User
            must have the authority to bind that entity.
          </p>
        </section>

        {/* TERM */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">3. TERM</h2>
          <p>
            These Terms remain in effect while the User accesses the Website.
            Certain obligations survive termination, including intellectual
            property restrictions and indemnity.
          </p>
        </section>

        {/* TERMINATION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">4. TERMINATION</h2>
          <p>
            The Company may restrict or terminate access at its discretion if
            the User violates these Terms, provides misleading information, or
            engages in harmful activity.
          </p>
        </section>

        {/* ACCOUNT SECURITY SKIPPED – because SRJCRAFT has NO user accounts */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">5. USE OF THE WEBSITE</h2>
          <p>
            Users may browse products, submit quotation requests, and contact
            the Company. Users agree not to:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Attempt unauthorized access or interfere with the Website.</li>
            <li>Submit false, misleading, or inaccurate information.</li>
            <li>
              Copy, download, or reproduce Website content without permission.
            </li>
            <li>
              Use automated tools (robots, scrapers, crawlers) to extract data.
            </li>
            <li>
              Upload any harmful, offensive, illegal, or infringing material.
            </li>
          </ul>
        </section>

        {/* COMMUNICATION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">6. COMMUNICATION</h2>
          <p>
            By submitting a quotation request or contacting the Company, the User
            consents to being contacted by phone, WhatsApp, SMS, or email.
          </p>

          <p className="mt-4">
            Users may opt out of promotional communication by writing to:
            <br />
            <strong>srjcrafts@gmail.com</strong>
          </p>
        </section>

        {/* INTELLECTUAL PROPERTY */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">7. INTELLECTUAL PROPERTY</h2>
          <p>
            All product designs, photographs, catalogues, branding, website
            design, and content are the exclusive property of the Company.
            Unauthorized use, reproduction, or distribution is prohibited.
          </p>
        </section>

        {/* PRICING – NO ONLINE PAYMENTS */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">8. QUOTATIONS & PRICING</h2>
          <p>
            The Website displays furniture and related products for reference.
            Prices are not listed publicly. All pricing is provided through
            quotation requests and may vary based on specifications, materials,
            customization, and logistics.
          </p>

          <p className="mt-4">
            Submitting a quotation request does not constitute an order or
            contract. Orders, payments, and delivery terms are finalized
            offline between the User and the Company.
          </p>
        </section>

        {/* REFUNDS – NOT APPLICABLE ONLINE */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">9. REFUNDS & CANCELLATION</h2>
          <p>
            Since no purchases occur through the Website, refund and cancellation
            policies apply only to offline transactions agreed upon directly
            with the Company. Users must refer to the terms provided during the
            offline order process.
          </p>
        </section>

        {/* DISCLAIMER */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">10. DISCLAIMER OF WARRANTIES</h2>
          <p>
            The Website is provided “as is.” The Company does not guarantee
            uninterrupted availability, absence of errors, or compatibility with
            all devices. Product images may vary slightly from actual products
            due to lighting, materials, or customization.
          </p>
        </section>

        {/* LIMITATION OF LIABILITY */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">11. LIMITATION OF LIABILITY</h2>
          <p>
            The Company is not liable for indirect, incidental, or consequential
            damages arising from the use of the Website. The Company’s maximum
            liability is limited to the amount directly paid by the User in the
            related offline transaction.
          </p>
        </section>

        {/* DISPUTE RESOLUTION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">12. DISPUTE RESOLUTION</h2>
          <p>
            Any dispute shall first be attempted to be resolved through amicable
            negotiation. If unresolved, it shall be referred to arbitration
            under the Arbitration and Conciliation Act, 1996, with a sole
            arbitrator appointed by the Company. The seat of arbitration shall
            be Jodhpur, Rajasthan.
          </p>
        </section>

        {/* JURISDICTION */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">13. GOVERNING LAW & JURISDICTION</h2>
          <p>
            These Terms are governed by the laws of India. Courts in Jodhpur,
            Rajasthan shall have exclusive jurisdiction.
          </p>
        </section>

        {/* NOTICES */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">14. NOTICES</h2>
          <p>
            All notices, disputes, or communication shall be sent to:
            <br />
            <strong>srjcrafts@gmail.com</strong>
          </p>
        </section>

        {/* MISC */}
        <section>
          <h2 className="text-xl font-[font-1] mb-3">15. MISCELLANEOUS</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              These Terms constitute the entire agreement between the User and
              the Company regarding Website use.
            </li>
            <li>
              If any provision is found unenforceable, the remainder of the
              Terms remains valid.
            </li>
            <li>
              Failure to enforce any provision does not constitute a waiver.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
