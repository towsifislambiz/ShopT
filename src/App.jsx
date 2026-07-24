import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Home pages
import Home from './Pages/Home'
import Home2 from './Pages/Home2'
import Home3 from './Pages/Home3'
import Home4 from './Pages/Home4'
import Home5 from './Pages/Home5'

// Phase 2 — Shop & Products
import ShopPage from './Pages/ShopPage'
import AllProductsPage from './Pages/AllProductsPage'
import SingleProduct from './Pages/SingleProduct'
import FlashSalePage from './Pages/FlashSalePage'

// Phase 3 — Cart, Checkout, Auth, Account
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ForgotPasswordPage from './Pages/ForgotPasswordPage'
import WishlistPage from './Pages/WishlistPage'
import ProfilePage from './Pages/ProfilePage'
import TrackingOrderPage from './Pages/TrackingOrderPage'
import CompareProductsPage from './Pages/CompareProductsPage'

// Phase 4 — Content pages
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import FAQPage from './Pages/FAQPage'
import BlogPage from './Pages/BlogPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import TermsPage from './Pages/TermsPage'
import BecomeSellerPage from './Pages/BecomeSellerPage'

const App = () => {
  return (
    <div>
      <Routes>
        {/* ── Home pages ── */}
        <Route path="/"           element={<Home />} />
        <Route path="/home-two"   element={<Home2 />} />
        <Route path="/home-three" element={<Home3 />} />
        <Route path="/home-four"  element={<Home4 />} />
        <Route path="/home-five"  element={<Home5 />} />

        {/* Legacy home routes kept for backwards compat */}
        <Route path="/home2" element={<Home2 />} />

        {/* ── Shop & Products ── */}
        <Route path="/shop"           element={<ShopPage />} />
        <Route path="/all-products"   element={<AllProductsPage />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/flash-sale"     element={<FlashSalePage />} />

        {/* ── Cart, Checkout, Auth ── */}
        <Route path="/cart"             element={<CartPage />} />
        <Route path="/checkout"         element={<CheckoutPage />} />
        <Route path="/login"            element={<LoginPage />} />
        <Route path="/signup"           element={<SignupPage />} />
        <Route path="/forgot-password"  element={<ForgotPasswordPage />} />

        {/* ── Account ── */}
        <Route path="/wishlist"           element={<WishlistPage />} />
        <Route path="/profile"            element={<ProfilePage />} />
        <Route path="/tracking-order"     element={<TrackingOrderPage />} />
        <Route path="/products-compaire"  element={<CompareProductsPage />} />

        {/* ── Content pages ── */}
        <Route path="/about"           element={<AboutPage />} />
        <Route path="/contact"         element={<ContactPage />} />
        <Route path="/faq"             element={<FAQPage />} />
        <Route path="/blog"            element={<BlogPage />} />
        <Route path="/blogs"           element={<BlogPage />} />
        <Route path="/privacy-policy"  element={<PrivacyPolicyPage />} />
        <Route path="/terms-condition" element={<TermsPage />} />
        <Route path="/become-seller"   element={<BecomeSellerPage />} />
        <Route path="/become-saller"   element={<BecomeSellerPage />} />
      </Routes>
    </div>
  )
}

export default App
