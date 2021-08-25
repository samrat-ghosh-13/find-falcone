import React, { createContext, useContext } from "react";

// Create Context object
const FalconeDataContext = createContext();

// Export Provider
export function DataProvider({ value, children }) {
  return (
    <FalconeDataContext.Provider value={value}>
      {children}
    </FalconeDataContext.Provider>
  );
}

// Export useContext Hook
export function useDataContext() {
  return useContext(FalconeDataContext);
}
