"use client";
import React from "react";
import { motion } from "framer-motion";
import "./testimonials.css"; // เพิ่มไฟล์ CSS ที่แยกไว้

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`testimonials-column ${props.className || ""}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="testimonials-motion-container"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-text">{text}</div>
                <div className="testimonial-profile">
                  <img src={image} alt={name} className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <div className="testimonial-name">{name}</div>
                    <div className="testimonial-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
