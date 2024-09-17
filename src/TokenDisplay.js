import React from 'react';

const TokenDisplay = ({ blueTokens, redTokens, blueTokensPerRow, redTokensPerRow }) => {
  const renderTokens = (tokens, tokensPerRow, color) => (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${tokensPerRow}, minmax(0, 1fr))` }}>
      {tokens.map((token, index) => (
        <div
          key={index}
          className={`p-4 text-white font-bold text-center rounded-lg ${color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}
        >
          {token}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Blue Tokens:</h2>
      {renderTokens(blueTokens, blueTokensPerRow, 'blue')}

      <h2 className="text-2xl font-semibold mt-6 mb-4">Red Tokens:</h2>
      {renderTokens(redTokens, redTokensPerRow, 'red')}
    </div>
  );
};

export default TokenDisplay;