import React, { useState } from 'react';

const DoughiOrFlourQuantity: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<string>('');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  return (
    <div>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <select value={type} onChange={handleTypeChange}>
        <option value="">--Please choose an option--</option>
        <option value="dough">Dough</option>
        <option value="flour">Flour</option>
      </select>
    </div>
  );
}

export default DoughiOrFlourQuantity;
