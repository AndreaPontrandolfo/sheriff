'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const features = [
  {
    step: 'Scaffolder',
    content: 'Start your Web3 journey by learning the basics of blockchain.',
  },
  {
    step: 'Config',
    content:
      'Dive deep into blockchain fundamentals and smart contract development.',
  },
  {
    step: 'Doctor',
    content:
      'Graduate with hands-on Web3 experience through building decentralized applications.',
  },
];

export const VerticalSlidingItems = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 3.33);
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="order-2 space-y-8 md:order-1">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-6 md:gap-8"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`flex h-8 w-8 items-center justify-center rounded-full md:h-10 md:w-10 ${
                index === currentFeature
                  ? 'scale-110 bg-blue-500'
                  : 'bg-gray-500'
              } border-2 ${
                index === currentFeature ? 'border-blue-400' : 'border-gray-400'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {index <= currentFeature ? (
                <span className="text-lg font-bold text-white">
                  {index + 1}
                </span>
              ) : (
                <span className="text-lg font-semibold text-white">
                  {index + 1}
                </span>
              )}
            </motion.div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-200 md:text-2xl">
                {feature.step}
              </h3>
              <p className="text-sm text-gray-400 md:text-lg">
                {feature.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
