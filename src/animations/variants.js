/**
 * variants.js
 * ------------------------------------------------------------------
 * This project's scroll animations are modeled directly on the AOS
 * (Animate On Scroll) library — confirmed via the official ThemeForest
 * changelog for the "Shopo – Tailwind React eCommerce Template" (the
 * reference site), which lists "Update AOS v2.3.4" as a dependency.
 *
 * Rather than inventing a custom animation language, every variant
 * below reproduces AOS's own published defaults 1:1:
 *   - Transform distance: 100px  (AOS README: "Default distance for
 *     built-in animations is 100px")
 *   - Default easing: 'ease'    -> CSS cubic-bezier(0.25, 0.1, 0.25, 1)
 *   - zoom-in starting scale: 0.6
 *   - once-only trigger (no replay on scroll back up)
 *
 * Naming mirrors AOS's own data-aos values so it's obvious which
 * effect maps to which reference behaviour:
 *   fade-up / fade-down / fade-left / fade-right / zoom-in / fade
 * ------------------------------------------------------------------
 */

// AOS default easing ('ease') expressed as a cubic-bezier curve.
export const EASE = [0.25, 0.1, 0.25, 1];

// Durations. AOS's own library default is 400ms, but this class of
// premium Tailwind template consistently overrides it to a slower,
// more "designed" feel — kept inside the 0.7s-1.0s range.
export const DURATION = 0.8; // standard reveal
export const DURATION_SLOW = 0.9; // hero / large two-column slides
export const DURATION_FAST = 0.7; // individual cards inside a stagger grid

// AOS's real default transform distance is 100px (not an arbitrary guess)
export const DISTANCE = {
  left: -100, // fade-right starts here (off-screen left, slides right)
  right: 100, // fade-left starts here (off-screen right, slides left)
  up: 100, // fade-up starts here (below, slides up)
  down: -100, // fade-down starts here (above, slides down)
};

/* ------------------------------------------------------------------ */
/* Core variants — each name matches its AOS data-aos counterpart      */
/* ------------------------------------------------------------------ */

// data-aos="fade-up" — section titles, single full-width banners
export const fadeUp = {
  hidden: { opacity: 0, y: DISTANCE.up },
  visible: { opacity: 1, y: 0 },
};

// data-aos="fade-down" (rarely used, kept for completeness)
export const fadeDown = {
  hidden: { opacity: 0, y: DISTANCE.down },
  visible: { opacity: 1, y: 0 },
};

// data-aos="fade" — plain opacity fade, no movement (brand/logo strips)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// data-aos="fade-right" — starts off-screen LEFT, slides right into place
// (used for: hero left content, left-hand column of a 2-col layout)
export const slideInLeft = {
  hidden: { opacity: 0, x: DISTANCE.left },
  visible: { opacity: 1, x: 0 },
};

// data-aos="fade-left" — starts off-screen RIGHT, slides left into place
// (used for: hero image, right-hand column of a 2-col layout)
export const slideInRight = {
  hidden: { opacity: 0, x: DISTANCE.right },
  visible: { opacity: 1, x: 0 },
};

// data-aos="zoom-in" — AOS's real zoom-in starts at scale(0.6)
// (used for: floating hero badges, circular seller/brand icons)
export const scaleFade = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
};

/* ------------------------------------------------------------------ */
/* Stagger helpers                                                      */
/* ------------------------------------------------------------------ */

/**
 * Builds a "container" variant whose only job is to stagger the reveal
 * of its children — mirrors the common AOS-template pattern of giving
 * each card in a grid an incremental data-aos-delay (0, 100, 200...ms).
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

