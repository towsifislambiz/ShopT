import React from "react";
import { motion } from "framer-motion";
import { fadeUp, EASE, DURATION } from "./variants";

/**
 * Reveal
 * ------------------------------------------------------------------
 * Generic "reveal on scroll" wrapper. Wrap ANY element/section with it
 * and it will fade/slide into place the first time it enters the
 * viewport.
 *
 *   <Reveal variant={slideInLeft}>
 *     <h1>Hero text</h1>
 *   </Reveal>
 *
 * Props:
 *  - variant   : one of the variants from ./variants (default fadeUp)
 *  - delay     : extra delay in seconds (for sequencing, e.g. countdown
 *                appearing slightly after the section title)
 *  - duration  : override animation duration (defaults to 0.8s)
 *  - as        : which underlying element to render ("div", "h2", ...)
 *  - className : forwarded to the rendered element
 * ------------------------------------------------------------------
 */
const Reveal = ({
  children,
  variant = fadeUp,
  delay = 0,
  duration = DURATION,
  as = "div",
  className = "",
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
