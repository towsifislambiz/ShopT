import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-3 flex items-center gap-2">
      <span className="w-1 h-6 bg-[#FFBB38] rounded-full block flex-shrink-0" />
      {title}
    </h2>
    <p className="font-inter text-sm text-gray-600 leading-8">{children}</p>
  </div>
)

const PrivacyPolicyPage = () => (
  <PageWrapper>
    <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
      <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Privacy Policy</h1>
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
    </div>
    <div className="bg-white rounded-2xl shadow-sm p-10">
      <div className="max-w-3xl">
        <p className="font-inter text-sm text-gray-500 mb-8">Last updated: July 24, 2026</p>
        <Section title="1. Information We Collect">
          We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, postal address, phone number, and payment information.
        </Section>
        <Section title="2. How We Use Your Information">
          We use the information we collect to process transactions, send transactional and promotional communications, improve our services, and comply with legal obligations. We never sell your personal data to third parties.
        </Section>
        <Section title="3. Information Sharing">
          We may share your information with service providers who assist us in operating our website and conducting our business, subject to those parties agreeing to keep this information confidential.
        </Section>
        <Section title="4. Data Security">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted using SSL/TLS.
        </Section>
        <Section title="5. Cookies">
          We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </Section>
        <Section title="6. Your Rights">
          You have the right to access, update, or delete your personal information at any time through your account settings or by contacting us at privacy@shopt.com.
        </Section>
        <Section title="7. Contact Us">
          If you have any questions about this Privacy Policy, please contact us at: privacy@shopt.com or 123 Commerce Street, New York, NY 10001.
        </Section>
      </div>
    </div>
  </PageWrapper>
)

export default PrivacyPolicyPage
