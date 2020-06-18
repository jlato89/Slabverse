import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        {/* No match for <code>{window.location.href}</code> */}
      </h3>
    </div>
  );
};

export default NoMatch;
