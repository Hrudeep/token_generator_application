import React from 'react';
import TokenForm from './TokenForm';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Token Generator</h1>
      <TokenForm />
    </div>
  );
};

export default App;