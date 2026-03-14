function TransList(props){
    return(
        <div className="trans-container">
            <h3>History</h3>
            <ul>
                {props.list.map((tran, index) => (
                    <li key={index} 
                        style={{
                                borderRight: `5px solid ${tran.type === "income" ? "green" : "red"}`
                            }}
                    >
                        <span>{tran.title} </span> 
                        <span
                            style={{
                                color: tran.type === "income" ? "green" : "red"
                            }}
                        >
                            {(tran.type === "income")?tran.ammount:-tran.ammount}
                        </span>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransList;