import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../layouts/Layout';
import '../styles/globals.scss';
import { AppContext } from '../context/AppContext';

function MyApp({ Component, pageProps, router }) {
  const { pathname } = router;
  const [isAmountHidden, setIsAmountHidden] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAmountHidden,
        setIsAmountHidden,
      }}
    >
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
