(this.webpackJsonpcashregister=this.webpackJsonpcashregister||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),s=(a(14),a(4)),h=a(5),l=a(7),d=a(6),u=a(1),o=a(8),m=(a(15),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={price:"",cash:"",cid:"",remainder:"",return:'{status: "OPEN", change: [["QUARTER", 0.5]]}'},a.handlePrice=a.handlePrice.bind(Object(u.a)(a)),a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.handleCash=a.handleCash.bind(Object(u.a)(a)),a.handleCid=a.handleCid.bind(Object(u.a)(a)),a.checkCashRegister=a.checkCashRegister.bind(Object(u.a)(a)),a}return Object(o.a)(t,e),Object(h.a)(t,[{key:"handlePrice",value:function(e){this.setState({price:e.target.value})}},{key:"handleCash",value:function(e){this.setState({cash:e.target.value})}},{key:"handleCid",value:function(e){this.setState({cid:e.target.value})}},{key:"handleClick",value:function(){document.getElementById("price").value="",document.getElementById("cash").value="",this.setState({return:this.state.cid}),this.checkCashRegister()}},{key:"checkCashRegister",value:function(){var e=[.01,.05,.1,.25,1,5,10,20,100],t=this.state.cash-this.state.price;this.setState({remainder:this.state.cash-this.state.price});for(var a=[["PENNY",0],["NICKEL",0],["DIME",0],["QUARTER",0],["ONE",0],["FIVE",0],["TEN",0],["TWENTY",0],["ONE HUNDRED",0]],n=e.length-1;n>=0;n--)for(;e[n]<=t&&this.state.cid[n][1]>0;)t-=e[n],a[n][1]+=e[n],a[n][1]=Math.round(100*a[n][1])/100,t=Math.round(100*t)/100;var i=[];a.map((function(e){return i.unshift(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{style:{textAlign:"center",color:"white"}},i.a.createElement("h1",null,"Cash Register"),i.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column",margin:"auto"}},i.a.createElement("input",{id:"price",style:{margin:"1em"},placeholder:"Price of item",onChange:this.handlePrice,value:this.state.price}),i.a.createElement("input",{id:"cash",style:{margin:"1em"},placeholder:"Cash for payment",onChange:this.handleCash,value:this.state.cash}),i.a.createElement("input",{id:"cid",style:{margin:"1em"},placeholder:"Cash in drawer",onChange:this.handleCid,value:this.state.cid}),i.a.createElement("button",{style:{margin:"1em",color:"red",fontWeight:"bold"},onClick:this.handleClick},"Submit")),i.a.createElement("div",{style:{marginTop:"5em",marginBottom:"5em"}},i.a.createElement("h2",null,"Cash: $",this.state.price),i.a.createElement("h2",null,"Price: $",this.state.cash),i.a.createElement("h2",null,"Cash in drawer: ",this.state.cid),i.a.createElement("h2",null,"Remainder: $",this.state.remainder),i.a.createElement("p",null,this.state.return)))}}]),t}(i.a.Component));r.a.render(i.a.createElement(m,null),document.getElementById("app"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.531fc089.chunk.js.map