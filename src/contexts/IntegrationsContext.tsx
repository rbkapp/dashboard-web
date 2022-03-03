import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
  } from "react";
  // import Router from "next/router";
  
  // import { authClient } from "services/authClient";
  
  type IntegrationsContextData = {
    activeIntegrations?: boolean;
    activeNewIntegration?: boolean;
    handleChangeActiveIntegration(value: boolean): void;
    handleChangeNewIntegration(value: boolean): void;
  };
  
  const IntegrationsContext = createContext<IntegrationsContextData>(
    {} as IntegrationsContextData
  );
  
  export const IntegrationsProvider: React.FC = ({ children }) => {
    const [activeIntegrations, setActiveIntegrations] = useState(false);
    const [activeNewIntegration, setActiveNewIntegration] = useState(false);
  
    const handleChangeActiveIntegration = (value: boolean) => {
      setActiveIntegrations(value);
    };
  
    const handleChangeNewIntegration = (value: boolean) => {
      setActiveNewIntegration(value);
    };
  
    return (
      <IntegrationsContext.Provider
        value={{
          activeIntegrations,
          activeNewIntegration,
          handleChangeActiveIntegration,
          handleChangeNewIntegration,
        }}
      >
        {children}
      </IntegrationsContext.Provider>
    );
  };
  
  export function useIntegrations(): IntegrationsContextData {
    const context = useContext(IntegrationsContext);
  
    if (!context) {
      throw new Error(
        `useIntegratons must be used within a IntegrationsProvider`
      );
    }
  
    return context;
  }
  