(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(151)},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n,l,r,c,i=a(0),u=a.n(i),o=a(102),m=a.n(o),s=(a(142),a(143),a(204)),E=a(208),d=a(211),b=a(193),g=a(207),f=a(106),p=(a(63),a(103),Object(f.a)(function(e){var t=e.graphQLErrors;e.networkError;t&&t.map(function(e){var t=e.message;e.locations,e.path;alert("graphql error ".concat(t))})})),h=new E.a({cache:new d.a,link:Object(b.a)([p,new g.a({uri:"http://192.168.1.8:4000/graphql"})])}),v=(a(144),a(12)),w=(a(145),a(216)),j=function(){return React.createElement("div",null,React.createElement("a",{href:"/"},React.createElement("h1",null,"Blue Bells")),React.createElement("label",null,"production"))},O=a(42),R=a(206),S=Object(R.a)(n||(n=Object(O.a)(["\n    query helloUser {\n        helloUser\n    }\n"]))),C=a(221),x=a(213),k=function(){return u.a.createElement("div",null,u.a.createElement("label",null,"Username"),u.a.createElement("label",null,"Logout"))},y=a(57),F=a(218),$=a(222),L=a(219),q=a(223),U=a(205),W=a(224),B=Object(R.a)(l||(l=Object(O.a)(["\n        mutation signUp($username: String!, $email: String!, $password: String!) { \n            signUp(username: $username, email: $email, password: $password){\n                email\n            } \n        }\n    "]))),I=Object(R.a)(r||(r=Object(O.a)(["\n        mutation login($request: LoginRequest!) {\n            login(request: $request) {\n                user { \n                    username\n                }, \n                access_token\n            }\n        }\n"]))),N=(Object(R.a)(c||(c=Object(O.a)(["\n        mutation register($email: String!) { \n            signUp(email: $email){\n                email\n            } \n        }\n    "]))),a(194)),A=function(){var e=Object(x.a)(["auth-jwt-token"]),t=Object(v.a)(e,2),a=t[0],n=t[1],l=u.a.useState(!1),r=Object(v.a)(l,2),c=r[0],i=r[1],o=u.a.useState({user:"",password:""}),m=Object(v.a)(o,2),s=m[0],E=m[1],d=Object(N.a)(I,{onCompleted:function(e){n("auth-jwt-token",e.login.access_token)}}),b=Object(v.a)(d,2),g=b[0],f=b[1];f.data,f.loading,f.error;return a["auth-jwt-token"]?u.a.createElement("div",null,"user"):u.a.createElement("div",null,u.a.createElement(F.a,{variant:"outlined",className:"pull-right",onClick:function(){i(!0)}},"Sign In"),u.a.createElement($.a,{open:c,onClose:function(){i(!0)}},u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("submit"),g({variables:{request:{username:s.user,password:s.password}}})}},u.a.createElement(L.a,null,"Sign In"),u.a.createElement(q.a,null,u.a.createElement("br",null),u.a.createElement(w.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",rowSpacing:4},u.a.createElement(w.a,{item:!0,lg:12},u.a.createElement(U.a,{autoFocus:!0,id:"user",label:"Email or Username",type:"text",value:s.user,onChange:function(e){E(Object(y.a)({},s,{user:e.target.value}))},fullWidth:!0})),u.a.createElement(w.a,{item:!0,lg:12},u.a.createElement(U.a,{autoFocus:!0,id:"user",label:"Password",type:"password",value:s.password,onChange:function(e){E(Object(y.a)({},s,{password:e.target.value}))},fullWidth:!0})))),u.a.createElement(W.a,null,u.a.createElement(w.a,{container:!0,direction:"row",justifyContent:"right",rowSpacing:6},u.a.createElement(w.a,{item:!0,lg:3},u.a.createElement(F.a,{variant:"text",onClick:function(){i(!1)}},"Cancel")),u.a.createElement(w.a,{item:!0,lg:3},u.a.createElement(F.a,{variant:"contained",type:"submit"},"Sign in")))))))},P=a(212),D=function(){var e=i.useState(!1),t=Object(v.a)(e,2),a=t[0],n=t[1],l=i.useState({username:"",email:"",password:""}),r=Object(v.a)(l,2),c=r[0],u=r[1],o=Object(N.a)(B),m=Object(v.a)(o,2),s=m[0],E=m[1],d=E.data,b=E.loading,g=E.error;return b?i.createElement("label",null,"'Submitting...'"):g?i.createElement("label",null,"`Submission error! $",g.message,"`"):d?i.createElement(P.a,{severity:"success"},"This is a success alert \u2014 ",i.createElement("strong",null,"check it out!")):i.createElement("div",null,i.createElement(F.a,{variant:"contained",className:"pull-right",onClick:function(){n(!0)}},"Sign up"),i.createElement($.a,{open:a,onClose:function(){n(!1)}},i.createElement("form",{onSubmit:function(e){e.preventDefault(),s({variables:{username:c.username,email:c.email,password:c.password}})}},i.createElement(L.a,null,"Sign up"),i.createElement(q.a,null,i.createElement(w.a,{container:!0,spacing:2},i.createElement(w.a,{item:!0,xs:12},i.createElement(U.a,{autoFocus:!0,id:"username",label:"Username",type:"text",value:c.username,fullWidth:!0,onChange:function(e){return u(Object(y.a)({},c,{username:e.target.value}))}})),i.createElement(w.a,{item:!0,xs:12},i.createElement(U.a,{autoFocus:!0,id:"email",label:"Email Address",type:"email",fullWidth:!0,value:c.email,onChange:function(e){return u(Object(y.a)({},c,{email:e.target.value}))}})),i.createElement(w.a,{item:!0,xs:12},i.createElement(U.a,{autoFocus:!0,id:"user",label:"Password",type:"password",value:c.password,onChange:function(e){u(Object(y.a)({},c,{password:e.target.value}))},fullWidth:!0}),i.createElement("br",null)),i.createElement(w.a,{item:!0,xs:8},i.createElement("label",null,"Already have an account? Sign in")))),i.createElement(W.a,null,i.createElement(F.a,{variant:"text",onClick:function(){n(!1)}},"Cancel"),i.createElement(F.a,{variant:"contained",type:"submit"},"Sign up")))))},J=function(){return u.a.createElement("div",null,u.a.createElement(A,null),u.a.createElement(D,null))},T=function(){var e=Object(x.a)(),t=(Object(v.a)(e,1)[0],Object(C.a)(S)),a=t.data,n=t.loading;return t.error?u.a.createElement("label",null,"Error :("):n?u.a.createElement("label",null,"Loading..."):a?u.a.createElement(k,null):u.a.createElement(J,null)},_=function(){var e=Object(i.useState)("transparent"),t=Object(v.a)(e,2),a=(t[0],t[1]),n=Object(i.useState)("white"),l=Object(v.a)(n,2),r=(l[0],l[1]),c=Object(i.useState)("1rem 2rem"),u=Object(v.a)(c,2);u[0],u[1];return Object(i.useEffect)(function(){var e=function(){window.pageYOffset<100?(a("transparent"),r("white")):(a("white"),r("black"))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),React.createElement("div",{className:"search-bar-container"},React.createElement("div",{className:"navbar"},React.createElement(w.a,{container:!0,spacing:3},React.createElement(w.a,{item:!0,xs:10},React.createElement(j,null)),React.createElement(w.a,{item:!0,xs:2,alignContent:"right",rowGap:4},React.createElement(T,null)))))},G=(a(150),a(203)),M=a(217),Q=a(6),Y=a(215),z=Object(Q.a)(Y.a)(function(e){e.theme;return{backgroundColor:"#05204A",padding:"3rem 3rem 1rem 3rem",color:"#FFF"}}),H=function(){return React.createElement(z,null,React.createElement(M.a,{fixed:!0},React.createElement(w.a,{container:!0,spacing:6},React.createElement(w.a,{item:!0,xs:4},React.createElement("h1",null,"Blue Bells")),React.createElement(w.a,{item:!0,xs:4},React.createElement(G.a,{spacing:3},React.createElement("a",{href:"/about"},"About"),React.createElement("a",{href:"/who-use-us"},"What's new"),React.createElement("a",{href:"/about"},"Who use use"))),React.createElement(w.a,{item:!0,xs:4},React.createElement(G.a,{spacing:3}))),React.createElement(w.a,{container:!0,spacing:1},React.createElement(w.a,{item:!0,xs:6},React.createElement("small",null,"Created by team L&J")),React.createElement(w.a,{item:!0,xs:6}))))},K=function(e){return React.createElement(React.Fragment,null,React.createElement(_,null),React.createElement("div",{className:"cover"}),e.children,React.createElement(H,null))};var V=function(){return u.a.createElement(s.a,{client:h},u.a.createElement(K,null))},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};m.a.createRoot(document.getElementById("root")).render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(V,null))),X()}},[[135,1,2]]]);
//# sourceMappingURL=main.9dec4de7.chunk.js.map