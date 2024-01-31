// components/Layout.js
import React from 'react';
import { ThemeProvider } from './ThemeProvider';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      {/* Include any other layout components or styles here */}
      {children}
    </ThemeProvider>
  );
};

export default Layout;
