import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TokenForm = () => {
  const [form, setForm] = useState({
    blueTokenCount: '',
    blueTokenPrefix: '',
    blueTokensPerRow: '',
    redTokenCount: '',
    redTokenPrefix: '',
    redTokensPerRow: ''
  });

  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    const blueArray = Array.from({ length: parseInt(form.blueTokenCount) || 0 }, (_, i) => `${form.blueTokenPrefix}${i + 1}`);
    setBlueTokens(blueArray);

    const redArray = Array.from({ length: parseInt(form.redTokenCount) || 0 }, (_, i) => `${form.redTokenPrefix}${i + 1}`);
    setRedTokens(redArray);
  };

  const handleClear = () => {
    setForm({
      blueTokenCount: '',
      blueTokenPrefix: '',
      blueTokensPerRow: '',
      redTokenCount: '',
      redTokenPrefix: '',
      redTokensPerRow: ''
    });
    setBlueTokens([]);
    setRedTokens([]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <TextField
          label="Number of Blue Tokens"
          type="number"
          name="blueTokenCount"
          value={form.blueTokenCount}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Prefix for Blue Tokens"
          type="text"
          name="blueTokenPrefix"
          value={form.blueTokenPrefix}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Blue Tokens per Row"
          type="number"
          name="blueTokensPerRow"
          value={form.blueTokensPerRow}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Number of Red Tokens"
          type="number"
          name="redTokenCount"
          value={form.redTokenCount}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Prefix for Red Tokens"
          type="text"
          name="redTokenPrefix"
          value={form.redTokenPrefix}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Red Tokens per Row"
          type="number"
          name="redTokensPerRow"
          value={form.redTokensPerRow}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
      </div>

      <div className="flex space-x-4">
        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Generate
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>
          Clear
        </Button>
      </div>

    
    </div>
  );
};

export default TokenForm;
