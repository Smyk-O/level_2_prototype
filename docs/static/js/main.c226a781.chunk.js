(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),o=(a(13),a(1)),s=a(2),i=a(4),m=a(3),d=a(5);a(15),a(17),a(19);var u=function(e){return"0,5"===e.weight?c.a.createElement("span",{className:"productPromo"},c.a.createElement("b",null,"10")," \u043f\u043e\u0440\u0446\u0438\u0439 \u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"):"2"===e.weight?c.a.createElement("span",{className:"productPromo"},c.a.createElement("b",null,"40")," \u043f\u043e\u0440\u0446\u0438\u0439 ",c.a.createElement("b",null,"2")," \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"):c.a.createElement("span",{className:"productPromo"},c.a.createElement("b",null,"100")," \u043f\u043e\u0440\u0446\u0438\u0439 ",c.a.createElement("b",null,"5")," \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d")},p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={catFoodSelected:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"ProductSelected",value:function(e){var t=this.state.catFoodSelected;if(-1!==t.indexOf(e)){var a=t.indexOf(e);t.splice(a,1)}else t.push(e);this.setState({catFoodSelected:t})}},{key:"GetProductContent",value:function(e,t){var a=this;return c.a.createElement("div",{className:"product ".concat(t),onClick:function(){e.disabled||a.ProductSelected(e.typeName)}},c.a.createElement("div",{className:"productText"},c.a.createElement("p",{className:"sloganHover"},"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?"),c.a.createElement("p",{className:"slogan"},"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),c.a.createElement("h2",null,"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),c.a.createElement("h3",null,e.typeName),c.a.createElement("p",{className:"productPromo"},c.a.createElement(u,{weight:e.weight}))),c.a.createElement("div",{className:"weightCircle"},c.a.createElement("p",{className:"weightNumber"},e.weight),c.a.createElement("br",null),c.a.createElement("p",{className:"weightUnit"},"\u043a\u0433")))}},{key:"GetProduct",value:function(){var e=this;return this.props.items.map(function(t){return t.disabled?c.a.createElement("div",{key:t.typeName,className:"productUnit"},e.GetProductContent(t,"endProduct"),c.a.createElement("div",{className:"endProductInfo"},t.endText)):-1!==e.state.catFoodSelected.indexOf(t.typeName)?c.a.createElement("div",{key:t.typeName,className:"productUnit"},e.GetProductContent(t,"Selected"),c.a.createElement("div",{className:"productInfo"},t.text)):c.a.createElement("div",{key:t.typeName,className:"productUnit"},e.GetProductContent(t,"notSelected"),c.a.createElement("div",{className:"productInfo"},"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",c.a.createElement("span",{className:"buy",onClick:function(){e.ProductSelected(t.typeName)}},"\u043a\u0443\u043f\u0438.")))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"itemView"},this.GetProduct(),";")}}]),t}(n.Component),h=[];h[0]={typeName:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",text:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",weight:"0,5",disabled:!1,endText:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."},h[1]={typeName:"\u0441 \u0440\u044b\u0431\u043e\u0439",text:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",weight:"2",disabled:!1,endText:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0440\u044b\u0431\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."},h[2]={typeName:"\u0441 \u043a\u0443\u0440\u043e\u0439",text:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",weight:"5",disabled:!0,endText:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."};var E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement("header",null,c.a.createElement("h1",{className:"header-text"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?")),c.a.createElement(p,{items:h}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[8,2,1]]]);
//# sourceMappingURL=main.c226a781.chunk.js.map