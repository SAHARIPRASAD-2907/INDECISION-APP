(this["webpackJsonpindecision-app"]=this["webpackJsonpindecision-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),s=n(9),c=n.n(s),a=n(3),l=n(4),r=n(2),d=n(6),u=n(5),h=(n(19),n(20),n(21),n(0));function p(t){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:t.style,disabled:t.checkOptions,onClick:t.event,children:t.text})})}n(23);var j=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).handleOption=o.handleOption.bind(Object(r.a)(o)),o.state={error:void 0},o}return Object(l.a)(n,[{key:"handleOption",value:function(t){t.preventDefault();var e=t.target.elements.option.value.trim(),n=this.props.action(e);t.target.elements.option.value="",this.setState((function(){return{error:n}}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[this.state.error&&Object(h.jsx)("p",{className:"add-option-error",children:this.state.error}),Object(h.jsxs)("form",{className:"add-option",onSubmit:this.handleOption,children:[Object(h.jsx)("input",{className:"add-option__input",placeholder:"Enter data",name:"option"}),Object(h.jsx)("input",{type:"submit",className:"button"})]})]})}}]),n}(i.a.Component);n(24);function O(t){return O.defaultProps={title:"some default"},Object(h.jsx)("div",{className:"head",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"head__title",children:t.title}),Object(h.jsx)("h2",{className:"head__subtitle",children:t.subTitle})]})})}var b=n(14),m=n.n(b);n(36);function v(t){return Object(h.jsxs)(m.a,{isOpen:!!t.selectOption,contentLabel:"selected option",onRequestClose:t.closeModal,closeTimeoutMS:200,className:"modal",children:[Object(h.jsx)("h3",{className:"model__title",children:"Selected option"}),t.selectOption&&Object(h.jsx)("p",{className:"model__body",children:t.selectOption}),Object(h.jsx)("button",{className:"button",onClick:t.closeModal,children:"Close"})]})}n(37);function f(t){var e=t.element;return Object(h.jsxs)("div",{className:"option",children:[Object(h.jsx)("li",{className:"option__text",children:e},e),Object(h.jsx)("button",{className:"button button--link",onClick:function(){t.event(e)},children:"remove"})]})}n(38);function x(t){var e=t.options;return Object(h.jsx)("div",{children:Object(h.jsx)("ol",{children:e.map((function(e){return Object(h.jsx)(f,{element:e,event:t.event},e)}))})})}document.title="INDECISION APP";var N=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).handlePick=function(){var t=o.state.options.length,e=Math.floor(Math.random()*t);o.setState((function(){return{selectOption:o.state.options[e]}}))},o.handleModalClose=function(){o.setState((function(){return{selectOption:void 0}}))},o.removeOne=function(t){o.setState((function(e){return{options:e.options.filter((function(e){return!(e===t)}))}}))},o.removeAll=function(){console.log("Remove All"),o.setState((function(){return{options:[]}}))},o.addOption=function(t){return t?o.state.options.indexOf(t)>-1?"This option already exists":void o.setState((function(e){return{options:e.options.concat(t)}})):"Enter a valid value to add item"},o.removeAll=o.removeAll.bind(Object(r.a)(o)),o.removeOne=o.removeOne.bind(Object(r.a)(o)),o.handlePick=o.handlePick.bind(Object(r.a)(o)),o.addOption=o.addOption.bind(Object(r.a)(o)),o.state={options:[],selected:void 0},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){try{console.log("fetching data");var t=localStorage.getItem("options"),e=JSON.parse(t);e&&this.setState((function(){return{options:e}}))}catch(n){}}},{key:"componentDidUpdate",value:function(t,e){if(e.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n),console.log("saving data")}}},{key:"componentWillUnmount",value:function(){console.log("something removed")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{title:"INDECISION APP",subTitle:"Put your life in the hands of a computer"}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(p,{text:"What should I do?",event:this.handlePick,checkOptions:!(this.state.options.length>0),style:"big-button1"}),Object(h.jsxs)("div",{className:"widget-header",children:[Object(h.jsx)("h3",{className:"your-options",children:"Your Options"}),Object(h.jsx)(p,{text:"Remove All",event:this.removeAll,checkOptions:!(this.state.options.length>0),style:"button button--link"})]}),Object(h.jsxs)("div",{className:"widget",children:[0===this.state.options.length&&Object(h.jsx)("p",{className:"widget__message",children:"Please add options to start"}),Object(h.jsx)(x,{options:this.state.options,event:this.removeOne}),Object(h.jsx)(j,{action:this.addOption})]})]}),Object(h.jsx)(v,{selectOption:this.state.selectOption,closeModal:this.handleModalClose})]})}}]),n}(i.a.Component);c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ad48da94.chunk.js.map