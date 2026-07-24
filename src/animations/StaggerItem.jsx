import React from "react";
import { motion } from "framer-motion";
import { fadeUp, EASE, DURATION_FAST } from "./variants";

/**
 * StaggerItem
 * ------------------------------------------------------------------
 * A single child used inside <StaggerGroup>. It intentionally has no
 * `initial` / `whileInView` of its own — it inherits the hidden/visible
 * state from the parent StaggerGroup, which is what produces the
 * "one after another" reveal.
 *
 * Props:
 *  - variant  : which variant to animate with (default fadeUp)
 *  - duration : per-card duration (default 0.7s, kept short so a full
 *               grid doesn't take too long to finish revealing)
 *  - as       : underlying element (default "div")
 * ------------------------------------------------------------------
 */
const StaggerItem = ({
  children,
  variant = fadeUp,
  duration = DURATION_FAST,
  as = "div",
  className = "",
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={variant}
      transition={{ duration, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default StaggerItem;
