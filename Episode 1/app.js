// <div id = "parent">
//      <div id="child 1">
// <h1>HI i am h1 tag</h1>
//<h2>Hi i am h2 tag</h2>
// </div>
//<div id = "child 2">
//     <h1>HI i am h1 tag</h1>
//     <h2>Hi i am h2 tag</h2>
// </div>
// </div>

const parent =React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"HI i am h1 tag"),React.createElement("h2",{},"Hi i am h2 tag")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"HI i am h1 tag"),React.createElement("h2",{},"Hi i am h2 tag")])]);

const heading=React.createElement("h1",{ id:"head" },"HELLO WORLD FROM REACT");
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
const container =React.createElement(React.Fragment,{},heading,parent);
console.log(parent);
// root.render(heading);
// root.render(parent);
root.render(container);