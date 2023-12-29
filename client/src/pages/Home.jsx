// Home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import LoadingScreen from '../components/LoadingScreen'; // Import the LoadingScreen component
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/config/motion';
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second delay (you can replace this with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        snap.intro && (
          <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation('down')}>
              <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text text-xl">
                  LET'S <br className="xl:block hidden" /> DO IT
                </h1>
              </motion.div>
              <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Create your unique and exclusive shirt with our brand new 3D customization tool.
                  <strong> Unleash your imagination</strong> {" "} and define your own style.
                </p>

                <CustomButton
                  type="filled"
                  title="Customize it"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )
      )}
    </AnimatePresence>
  );
};

export default Home;
