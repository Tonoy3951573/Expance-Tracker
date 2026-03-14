import { useEffect, useState } from "react";
import Balance from "./Balance"
import IncomeExpance from "./IncomeExpance";
import AddTransaction from "./AddTransaction";
import TransList from "./TransList";


function App() {
  
  const [income , setIncome] = useState(50);
  const [expance, setExpance] = useState(0);
  const [balance , setBalance] = useState();
  const [trans, setTrans] = useState([{title: "Cash", ammount: 50, type: "income"}]);

  useEffect(() => {
    setBalance(income -  expance);
  },[income,expance]); 

  const HandelAddTransaction = (type,ammount,title) => {
      const obj = {title: title,
                    ammount: ammount,
                    type: type
      }
      if(type === "income"){
        setIncome(income + ammount);
      }
      if(type === "expance"){
        setExpance(expance + ammount);
      }
      setTrans([...trans, obj]);
  }
  

  return (
    <>
      <Balance balance={balance}/>
      <IncomeExpance income = {income} expance = {expance}/>
      <TransList list = {trans}/>
      <AddTransaction onAddTransaction = {HandelAddTransaction} />
    </>
  )
}

export default App
