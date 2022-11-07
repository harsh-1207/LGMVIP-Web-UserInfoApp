import React from "react";

function Card(getCard) {
    return (
        <div className="gridd">
            <div className="card" >
                <div className="cardEle">
                <div className="image">
                    <img src={getCard.avatar} alt={''}/>
                </div>
                    <div className="cardDetails">
                        <p className="nameEmail">NAME : {getCard.fName} {getCard.lName}</p>
                        <p className="nameEmail">EMAIL : {getCard.email}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card