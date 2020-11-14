import ExpLineItem from './ExpLineItem';

const ExpContainer = ({ children }) => {
  const addLineItem = () => {};
  return (
    <div>
      {children}
      <button onClick={() => addLineItem()}>add more experience</button>
    </div>
  );
};

export default ExpContainer;
