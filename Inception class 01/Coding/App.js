const parent = React.createElement("div", {}, [
  React.createElement("h2", {}, "This is h2 tag"),
  React.createElement("span", {}, "This is span tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
