import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "./variants";

/**
 * StaggerGroup
 * ------------------------------------------------------------------
 * Wrap a grid/row of cards with this. It doesn't animate itself visually
 * (no opacity/position change) — it only triggers the "visible" state
 * on its children in sequence, so pair it with <StaggerItem>.
 *
 *   <StaggerGroup className="flex justify-between flex-wrap gap-6">
 *     {products.map((p) => (
 *       <StaggerItem key={p.id}><Card {...p} /></StaggerItem>
 *     ))}
 *   </StaggerGroup>
 *
 * Props:
 *  - stagger        : delay between each child's animation (default 0.15s)
 *  - delayChildren  : delay before the first child starts
 *  - as             : underlying element (default "div")
 *  - className      : forwarded, so existing layout classes are untouched
 * ------------------------------------------------------------------
 */
const StaggerGroup = ({
  children,
  stagger = 0.1,
  delayChildren = 0,
  as = "div",
  className = "",
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default StaggerGroup;
