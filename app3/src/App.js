import React from "react";

const Header = React.lazy(() => import("app1/Header"));
const App = React.lazy(() => import("app2/App"));

export default () => (
  <div style={{ margin: "20px" }}>
    <React.Suspense fallback="Loading header">
      <Header title='Vista 2'>Cabecera ventana 2222</Header>
      <App />
    </React.Suspense>
  </div>
);
