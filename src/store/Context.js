import React, { useState } from 'react';

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <Context.Provider
      value={{
        date: [date, setDate],
        modal: [showCreateModal, setShowCreateModal],
      }}
    >
      {children}
    </Context.Provider>
  );
};
