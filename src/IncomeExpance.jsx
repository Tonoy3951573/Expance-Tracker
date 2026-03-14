function IncomeExpance(props){
    return(
        <div className="income-expance-card">
            <div className="income-card">
                <h4>Income</h4><h4 className="plus"> ৳{props.income}</h4>
            </div>
            <div className="expance-card">
                <h4>Expance </h4> <h4 className="minus"> ৳{props.expance}</h4>
            </div>
        </div>
    );
}

export default IncomeExpance;