import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = 'George';
  const age = 40;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Lora" age={40 - 20} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
