(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t(1),s=t.n(i),l=t(5),r=t.n(l),c=t(2),m=t(6),o=t(7),p=t(9),g=t(8);var d=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("tr",{className:"tableCell",children:[Object(n.jsx)("td",{className:"tableCell",children:Object(n.jsx)("img",{src:e.imageURL,alt:"Employee"})}),Object(n.jsx)("td",{className:"tableCell",children:e.firstName}),Object(n.jsx)("td",{className:"tableCell",children:e.lastName}),Object(n.jsx)("td",{className:"tableCell",children:e.department}),Object(n.jsx)("td",{className:"tableCell",children:e.occupation}),Object(n.jsx)("td",{className:"remove tableCell",onClick:function(){return e.filterArray(e.id)},children:"Fire"})]})})},u=t(4),b=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:"center",children:[Object(n.jsx)("input",{name:"query",className:"searchInput",value:e.query||"",placeholder:"Enter Department",onChange:e.handleInputChange}),Object(n.jsx)("button",{type:"submit",className:"searchButton",onClick:e.sortDept,children:"Search"})]}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("button",{type:"submit",className:"searchButton",onClick:e.seeAll,children:"See All"})})]})},h=(t(15),function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).state={employeeArr:u},e.handleInputChange=function(a){var t=a.target.value;console.log({value:t}),e.setState(Object(c.a)(Object(c.a)({},e.state),{},{query:t}))},e.seeAll=function(a){a.preventDefault(),e.setState({employeeArr:u})},e.sortDept=function(a){a.preventDefault();var t=e.state.employeeArr.filter((function(a){return a.department===e.state.query.toLowerCase()}));console.log(t),e.setState({employeeArr:t})},e.deleteEmployee=function(a){console.log(a);var t=e.state.employeeArr.filter((function(e){return e.id!==a}));console.log(t),e.setState({employeeArr:t})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h2",{children:"Employee Directory"}),Object(n.jsx)(b,{query:this.state.query,handleInputChange:this.handleInputChange,sortDept:this.sortDept,seeAll:this.seeAll}),Object(n.jsx)("table",{className:"center",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{className:"tableCell",children:[Object(n.jsx)("td",{className:"tableTitle",children:"PHOTO"}),Object(n.jsx)("td",{className:"tableTitle",children:"FIRST NAME"}),Object(n.jsx)("td",{className:"tableTitle",children:"LAST NAME"}),Object(n.jsx)("td",{className:"tableTitle",children:"DEPARTMENT"}),Object(n.jsx)("td",{className:"tableTitle",children:"OCCUPATION"}),Object(n.jsx)("td",{className:"tableTitle",children:"FIRE"})]}),Object(n.jsxs)("tr",{className:"tableCell",children:[Object(n.jsx)("td",{className:"tableCell",children:Object(n.jsx)("button",{className:"alphaButtons",onClick:"sortAlpha",children:"abc"})}),Object(n.jsx)("td",{className:"tableCell",children:Object(n.jsx)("button",{className:"alphaButtons",onClick:"sortAlpha",children:"abc"})}),Object(n.jsx)("td",{className:"tableCell",children:Object(n.jsx)("button",{className:"alphaButtons",onClick:"sortAlpha",children:"abc"})}),Object(n.jsx)("td",{className:"tableCell",children:Object(n.jsx)("button",{className:"alphaButtons",onClick:"sortAlpha",children:"abc"})}),Object(n.jsx)("td",{className:"tableCell",children:Object(n.jsx)("button",{className:"alphaButtons",onClick:"sortAlpha",children:"abc"})})]}),this.state.employeeArr.map((function(a){return Object(n.jsx)(d,Object(c.a)(Object(c.a)({},a),{},{filterArray:e.deleteEmployee}),a.id)}))]})})]})})})}}]),t}(s.a.Component));r.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('[{"id":1,"name":"Michael Scott","firstName":"Michael","lastName":"Scott","occupation":"Regional Branch Manager","department":"management","image":"michael-scott.png","imageURL":"images/michael-scott.png"},{"id":2,"name":"Dwight Schrute","firstName":"Dwight","lastName":"Schrute","occupation":"Sales Rep","department":"sales","image":"dwight.png","imageURL":"images/dwight.png"},{"id":3,"name":"Jim Halpert","firstName":"Jim","lastName":"Halpert","occupation":"Sales Rep","department":"sales","image":"jim.png","imageURL":"images/jim.png"},{"id":4,"name":"Pam Beesly","firstName":"Pam","lastName":"Beesly","occupation":"Receptionist","department":"reception","image":"pam.png","imageURL":"images/pam.png"},{"id":5,"name":"Ryan Howard","firstName":"Ryan","lastName":"Howard","occupation":"Intern","department":"internships","image":"ryan.png","imageURL":"images/ryan.png"},{"id":6,"name":"Stanley Hudson","firstName":"Stanley","lastName":"Hudson","occupation":"Sales Rep","department":"sales","image":"stanley.png","imageURL":"images/stanley.png"},{"id":7,"name":"Phyllis Lapin","firstName":"Phyllis","lastName":"Lapin","occupation":"Sales Rep","department":"sales","image":"phyllis.png","imageURL":"images/phyllis.png"},{"id":8,"name":"Kevin Malone","firstName":"Kevin","lastName":"Malone","occupation":"Accountant","department":"accounting","image":"kevin.png","imageURL":"images/kevin.png"},{"id":9,"name":"Angela Martin","firstName":"Angela","lastName":"Martin","occupation":"Accounting Manager","department":"accounting","image":"angela.png","imageURL":"images/angela.png"},{"id":10,"name":"Oscar Martinez","firstName":"Oscar","lastName":"Martinez","occupation":"Accountant","department":"accounting","image":"oscar.png","imageURL":"images/oscar.png"},{"id":11,"name":"Kelly Kapoor","firstName":"Kelly","lastName":"Kapoor","occupation":"Customer Service Rep","department":"customer service","image":"kelly.png","imageURL":"images/kelly.png"},{"id":12,"name":"Toby Flenderson","firstName":"Toby","lastName":"Flenderson","occupation":"Human Resources Rep","department":"human resources","image":"toby.png","imageURL":"images/toby.png"},{"id":13,"name":"Meredith Palmer","firstName":"Meredith","lastName":"Palmer","occupation":"Accountant","department":"accounting","image":"meredith.png","imageURL":"images/meredith.png"},{"id":14,"name":"Creed Bratton","firstName":"Creed","lastName":"Bratton","occupation":"Unknown","department":"unknown","image":"creed.png","imageURL":"images/creed.png"},{"id":15,"name":"Jan Levinson","firstName":"Jan","lastName":"Levinson","occupation":"Vice President of NE Sales","department":"sales","image":"jan.png","imageURL":"images/jan.png"},{"id":16,"name":"Roy Anderson","firstName":"Roy","lastName":"Anderson","occupation":"Warehouse worker","department":"warehouse","image":"roy.png","imageURL":"images/roy.png"},{"id":17,"name":"Darryl Philbin","firstName":"Darryl","lastName":"Philbin","occupation":"Warehouse Manager","department":"warehouse","image":"darryl.png","imageURL":"images/darryl.png"},{"id":18,"name":"Karen Flippelli","firstName":"Karen","lastName":"Flippelli","occupation":"Regional Manager","department":"management","image":"karen.png","imageURL":"images/karen.png"},{"id":19,"name":"Andy Bernard","firstName":"Andy","lastName":"Bernard","occupation":"Sales Rep","department":"sales","image":"andy-bernard.png","imageURL":"images/andy-bernard.png"},{"id":20,"name":"Erin Hannon","firstName":"Erin","lastName":"Hannon","occupation":"Receptionist","department":"reception","image":"erin.png","imageURL":"images/erin.png"},{"id":21,"name":"Gabe Lewis","firstName":"Gabe","lastName":"Lewis","occupation":"Director of Regions Coordination","department":"management","image":"gabe.png","imageURL":"images/gabe.png"},{"id":22,"name":"Robert California","firstName":"Robert","lastName":"California","occupation":"CEO","department":"management","image":"robert-california.png","imageURL":"images/robert-california.png"},{"id":23,"name":"Nellie Bertram","firstName":"Nellie","lastName":"Bertram","occupation":"President of Special Projects","department":"management","image":"nellie.png","imageURL":"images/nellie.png"},{"id":24,"name":"Clark Green","firstName":"Clark","lastName":"Green","occupation":"Jr. Sales Rep","department":"sales","image":"clark.png","imageURL":"images/clark.png"},{"id":25,"name":"Pete Miller","firstName":"Pete","lastName":"Miller","occupation":"Customer Service Rep","department":"customer service","image":"pete.png","imageURL":"images/pete.png"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.34a8c231.chunk.js.map