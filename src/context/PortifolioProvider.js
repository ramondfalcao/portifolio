import React, { useState } from 'react';
import PropTypes from 'prop-types';
import portfolioContext from './PortfolioContext';

function PortifolioProvider({ children }) {
  const [toggleDark, setToggleDark] = useState(false);

  const contextValue = {
    toggleDark,
    setToggleDark,
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
