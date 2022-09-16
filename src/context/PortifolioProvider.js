import React, { useState } from 'react';
import PropTypes from 'prop-types';
import portfolioContext from './PortfolioContext';

function PortifolioProvider({ children }) {
  const [toggleDark, setToggleDark] = useState(false);
  const [languageButton, setLanguageButton] = useState(true);
  const [stackProjects, setStackProjects] = useState(true);

  const contextValue = {
    toggleDark,
    setToggleDark,
    languageButton,
    setLanguageButton,
    stackProjects,
    setStackProjects,
  };

  return (
    <portfolioContext.Provider value={ contextValue }>
      {children}
    </portfolioContext.Provider>
  );
}

PortifolioProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default PortifolioProvider;
