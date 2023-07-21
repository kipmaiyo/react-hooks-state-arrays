import React, { useState } from 'react';
//import { getNewRandomSpicyFood } from "../data";

const SpicyFoodList = () => {
  const [spicyFoods, setSpicyFoods] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addSpicyFood = () => {
    const newFood = inputValue.trim();
    if (newFood !== '') {
      setSpicyFoods((prevFoods) => [...prevFoods, newFood]);
      setInputValue(''); // Clear the input field after adding the food
    }
  };

  const deleteSpicyFood = (index) => {
    const updatedFoods = [...spicyFoods];
    updatedFoods.splice(index, 1);
    setSpicyFoods(updatedFoods);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new spicy food..."
      />
      <button onClick={addSpicyFood}>Add New Food</button>
      <ul>
        {spicyFoods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => deleteSpicyFood(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpicyFoodList;





















// import React, { useState } from 'react';
// import { spicyFoods, getNewRandomSpicyFood } from "../data";

// const SpicyFoodList = () => {
//   // Step 1: Initialize a state variable to hold an array of spicy foods
//   const [spicyFoods, setSpicyFoods] = useState([]);

//   // Function to generate a new spicy food and add it to the array
//   const addSpicyFood = () => {
//     const newFood = `Spicy Food ${spicyFoods.length + 1}`;
//     // Step 3: Add the new spicy food to the array using setState
//     setSpicyFoods([...spicyFoods, newFood]);
//   };

//   return (
//     <div>
//       <button onClick={addSpicyFood}>Generate New Spicy Food</button>
//       <ul>
//         {/* Step 2: Use the state array to display each spicy food as an <li> */}
//         {spicyFoods.map((food, index) => (
//           <li key={index}>{food}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SpicyFoodList;