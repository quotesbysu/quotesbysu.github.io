(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),c=(n(14),n(15),n(3)),s=n(4),u=n(6),l=n(5),d=n(7),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={quotes:[{title:"It is what it is."},{title:"You are a victim of your past."},{title:"What contains the box?"},{title:"What you don't wanna think about wastes your time."}],quote:"",index:0,hidden:!0},n.toggleHidden=function(){n.setState({hidden:!n.state.hidden})},n.changeQuote=function(){n.setState({hidden:!0}),setTimeout(function(){var e=n.state.index===n.state.quotes.length-1?0:n.state.index+1;n.setState({index:e,hidden:!1})},1e3),setTimeout(n.changeQuote,4e3)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.changeQuote,0)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.changeQuote)}},{key:"render",value:function(){return o.a.createElement("div",{id:"activeQuote",className:["Quotes",this.state.hidden?"hidden":""].join(" "),onClick:this.toggleHidden},this.state.quotes[this.state.index].title)}}]),t}(o.a.Component),m=function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("a",{href:"https://surajk95.github.io/",target:"_blank",rel:"noopener noreferrer"},"Quotes by Su"))};var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8dfb8692.chunk.js.map