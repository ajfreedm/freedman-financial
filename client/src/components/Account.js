import axios from 'axios'
import {useState, useEffect} from 'react'

const url ="https://api.airtable.com/v0/appK4WDNdIvyVcUAu/Table%201?api_key=keygMy5j7EsXv29IM&filterByFormula=({username}='johndoe')"
function Account() {

  

    const [account, setAccount] = useState( [] );
  
    useEffect(() => {
      const axiosAccount = async () => {
        const response = await axios(url);
        setAccount(response.data);
      };
        console.log(JSON.stringify(account));
      axiosAccount();
    }, []);


    

  return (
    <main>
      <div id="accountContainer">
        <div id="account-wrap">
          <div id="account-number">Account Number: -555</div>
          <div id="account-ballance">Balance: $10,000</div>
        </div>
      </div>
    </main>
  );
}

export default Account;
