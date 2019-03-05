import React from 'react';
import { withRouter } from 'react-router-dom';

function AppShell(props) {
  const { children } = props;
  return (
    <div className="app">
      <main id="main-content" className="app__main-content">
        {children}
      </main>
    </div>
  );
}

export default withRouter(AppShell);
