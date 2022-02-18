import {useState, useEffect} from "react";


function InfosAccount(props) {
    return (
        <div>
            {!props.loader &&
                 props.accounts.length > 0 ?
            <div>
                <p>You are connect with this account : {props.accounts[0]}</p>
                {props.balance && <p>You have {props.balance} Eth on your account.</p>}
                {props.balance < 0.1 && <p className="infos">You don't have enought ETH on your account to go on our whitelist.</p>}
            </div>
                :
                <p>You are not connected with Metamask to this website.</p>
             }
        </div>
    )
}

export default InfosAccount;