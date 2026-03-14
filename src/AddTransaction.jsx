import { useState } from "react";

function AddTransaction({onAddTransaction}){

    const [money, setMoney] = useState("");
    const [title, setTitle] = useState("");

    const handelClick = () =>{
        const value = Number(money);
        const Title = (title.trim() === "")?"Something":title;
        if(value > 0){
            onAddTransaction("income",value,Title);
        }
        if(value < 0){
            onAddTransaction("expance",-value,Title);
        }
        setMoney("");
        setTitle("");

    }
    
    return(
        <div className="add-transection">
            <h3>Add new Transaction</h3>
            <p>Text</p>
            <input type="text" className="input-title" placeholder="Cash"value = {title} onChange={(e)=> setTitle(e.target.value)}/>
            <p>Amount <br />(Negative - expance, Posative -Income)</p>
            <input type="number" className="input-field" value = {money} onChange={(e) => {setMoney(e.target.value)}} placeholder="50"/>
            <button  className="btn" onClick={handelClick}>Add</button>
        </div>
    );
}

export default AddTransaction;