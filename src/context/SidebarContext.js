import React, { useState, useMemo, useCallback } from 'react';

// Create context
export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Use useCallback to memoize toggleSidebar
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prevState => !prevState);
  }, []);

  // Use useCallback for closeSidebar too (optional)
  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen, toggleSidebar, closeSidebar] // Dependencies include toggleSidebar and closeSidebar
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};
