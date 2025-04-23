import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0D131B] text-white min-h-[650px]">
      <div className="w-full md:w-3/5 text-center md:text-left md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl mb-4">
          Explora tus Opciones Financieras
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg mb-6 text-gray-300">
          Encuentra el producto financiero ideal para tus necesidades. Desde
          cuentas hasta seguros, todo en un solo lugar.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-start gap-4">
          <button className="btn bg-[#77F7D3] text-black border-none hover:bg-[#66e6c2] py-4 px-8 rounded-none shadow-none h-[50px]">
            Comenzar
          </button>
          <button className="btn btn-outline py-4 px-8 rounded-none shadow-none h-[50px]">
            Saber más
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-2/5 h-[650px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('http://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}></motion.div>
    </section>
  );
};

export default Hero;
