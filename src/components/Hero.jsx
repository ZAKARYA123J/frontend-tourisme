import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={"https://visitagadir.com/wp-content/uploads/2022/11/webpromo_visitagadir-1.mp4"}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30">
        <div className="absolute top-0 w-full h-full flex items-center justify-center text-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold uppercase mb-4">
              {t('discover')} {/* Texte dynamique avec traduction */}
            </h2>
            <h1 className="text-7xl font-bold">
              {t('region_life')}
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
