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

const TermsPage = () => (
  <PageWrapper>
    <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
      <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Terms & Conditions</h1>
      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
    </div>
    <div className="bg-white rounded-2xl shadow-sm p-10">
      <div className="max-w-3xl">
        <p className="font-inter text-sm text-gray-500 mb-8">Last updated: July 24, 2026</p>
        <Section title="1. Acceptance of Terms">
          By accessing and using ShopT, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
        </Section>
        <Section title="2. Account Registration">
          To access certain features of our platform, you must register for an account. You agree to provide accurate, current, and complete information and to update this information to keep it accurate.
        </Section>
        <Section title="3. Purchase & Payment">
          All purchases are subject to product availability. We reserve the right to refuse or cancel any order at any time for reasons including product availability, errors in pricing, or suspected fraudulent activity.
        </Section>
        <Section title="4. Intellectual Property">
          All content on ShopT, including text, graphics, logos, and images, is the property of ShopT and protected by applicable intellectual property laws.
        </Section>
        <Section title="5. Limitation of Liability">
          ShopT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
        </Section>
        <Section title="6. Governing Law">
          These Terms shall be governed by the laws of the State of New York, without regard to its conflict of law provisions.
        </Section>
        <Section title="7. Changes to Terms">
          We reserve the right to modify these terms at any time. We will notify users of any material changes via email or prominent notice on our site.
        </Section>
      </div>
    </div>
  </PageWrapper>
)

export default TermsPage
