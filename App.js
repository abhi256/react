const heading = React.createElement(
    "h1",
    {id: "heading", xyz:"abc"},
    "hello world from React!..");

const parent = React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"i am an h1 tag"),
            React.createElement("h2",{},"i am an h2 tag")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"i am an h1 tag"),
            React.createElement("h2",{},"i am an h2 tag")
        ])
    ]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);