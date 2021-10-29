function Account(props) {
  //console.log(JSON.stringify(account.records[0].fields));

  return (
    <main>
      <div id="accountContainer">
        <div id="account-wrap">
          <div id="account-number">Account: {props.account.account}</div>
          <div id="account-ballance">Balance: ${props.account.balance}</div>
        </div>
      </div>
    </main>
  );
}

export default Account;
