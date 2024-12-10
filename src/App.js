import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expences from "./components/Expenses/Expences";

let DUMMY_EXPENCE =  [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 300,
    date: new Date(2024,2,22)
  },
  {
    id: 'e2',
    title: 'Book',
    amount: 200,
    date: new Date(2024,2,22)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 350,
    date: new Date(2024,2,22)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 400,
    date: new Date(2024,2,22)
  }
];

const App = () => {
  
  const [expences, setExpenses] = useState(DUMMY_EXPENCE);

  const onSaveDataChild = (reciveChildData) => {
    // console.log(reciveChildData);
    const updatedExpense = [reciveChildData, ...expences];
    setExpenses(updatedExpense);
  }

  return (
    <div>
      <NewExpense onSaveDataParent = {onSaveDataChild}/>
      <Expences item={expences}/>
    </div>
  );
}

export default App;