function Balance(props){
    return(
        <>
            <div><h1>Expence Tracker</h1></div>
            <div className="balance-container">
                <h4>YOUR BALANCE</h4>
                <h1>৳{props.balance}</h1>
            </div>
        </>
        
    );
}
export default Balance;

