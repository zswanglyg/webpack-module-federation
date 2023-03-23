// import React from "react";
// import ReactDOM from "react-dom/client";

// const Demo = React.lazy(() => import("./components/demo.jsx"));
// const Test = React.lazy(() => import("./components/test.jsx"));

// const root1 = ReactDOM.createRoot(document.getElementById("root1"));

// root1.render(
//   <div>
//     <React.Suspense fallback={<span>loading</span>}>
//       <Demo />
//       <Test />
//     </React.Suspense>
//   </div>
// );


( async () => {
    let test = await import('./test')
    debugger
    test.default()
} )()

import("./bootstrap.jsx");
