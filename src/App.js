import React from 'react';
import './App.css';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      cash: '',
      cid: '',
      remainder: '',
      return: '{status: "OPEN", change: [["QUARTER", 0.5]]}'
    };
    this.handlePrice = this.handlePrice.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCash = this.handleCash.bind(this);
    this.handleCid = this.handleCid.bind(this);
    this.checkCashRegister = this.checkCashRegister.bind(this);
 };

 handlePrice(e) {
  this.setState({
    price: e.target.value
  });
 }

 handleCash(e) {
  this.setState({
    cash: e.target.value
  });
 }

 handleCid(e) {
  this.setState({
    cid: e.target.value
  });
 }

 handleClick() {
  document.getElementById("price").value='';
  document.getElementById("cash").value='';
  this.setState({
    // price: '',
    // cash: '',
    return: this.state.cid,
    // cid: ''
  });
  this.checkCashRegister();
 }

 checkCashRegister() {
    var valArr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
    var remainder = this.state.cash - this.state.price;
    this.setState({
      remainder: this.state.cash - this.state.price
    })
    var used = [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 0],["TEN", 0],["TWENTY", 0],["ONE HUNDRED", 0]]
    for (let i = valArr.length - 1; i >= 0; i--) {
      while(valArr[i] <= remainder && this.state.cid[i][1] > 0) {
        remainder -= valArr[i];
        // cid[i][1] -= valArr[i];
        used[i][1] += valArr[i];
        used[i][1] = Math.round(used[i][1] * 100) / 100;
        remainder = Math.round(remainder * 100) / 100;
      }
    }
  /* reshifts the used array */
    var newUsed = [];
    used.map(obj => newUsed.unshift(obj))
    var result = {
      status: "",
      change: ""
    }
    // let noChange = this.state.cid.map(obj => obj[1] < 0).filter(obj => obj === true)
  /* checks remainder for results*/
    // if(remainder === 0 && noChange.includes(true)) {
    //   result.status = "CLOSED"
    //   result.change = used
    // } else if(remainder === 0) {
    //   result.status = "OPEN"
    //   result.change = newUsed.filter(obj => !obj.includes(0))
    // } else {
    //   result.status = "INSUFFICIENT_FUNDS";
    //   result.change = [];
    // }
  }

 render () {
   const inputStyle = {
    display: "inline-flex",
    flexDirection: "column",
    margin: "auto"
   }
   return(
     <div style={{textAlign: "center", color: "white"}}>
       <h1>Cash Register</h1>
       <div style={inputStyle}>
        <input id="price" style={{margin: "1em"}} placeholder="Price of item" onChange={this.handlePrice} value={this.state.price}></input>
        <input id="cash" style={{margin: "1em"}} placeholder="Cash for payment" onChange={this.handleCash} value={this.state.cash}></input>
        <input id="cid" style={{margin: "1em"}} placeholder="Cash in drawer" onChange={this.handleCid} value={this.state.cid}></input>
        <button style={{margin: "1em", color: "red", fontWeight: "bold"}} onClick={this.handleClick}>Submit</button>
       </div>
       <div style={{marginTop: "5em", marginBottom: "5em"}}>
        <h2>Cash: ${this.state.price}</h2>
        <h2>Price: ${this.state.cash}</h2>
        <h2>Cash in drawer: {this.state.cid}</h2>
        <h2>Remainder: ${this.state.remainder}</h2>
        <p>{this.state.return}</p>
       </div>
     </div>
   )
 }
}

export default MyApp;
