import React from "react";

import './Expences.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";


const Expences = (props) =>{

    return(
        <Card className='expences'>

            {
                props.item.map(
                    expence => (
                        <ExpenseItem 
                                date={expence.date} 
                                title={expence.title} 
                                amount={expence.amount} />
                    )
                )
            }
        </Card>
    );
}

export default Expences;