// import type { Component } from "solid-js";
// import { Router, Route } from "@solidjs/router";
// import { AuthProvider } from "./contexts/AuthContext";
// import { from, lazy, Suspense } from "solid-js";
// import PageNavigater from "./pagenavigater";
// import { AppProvider } from "./lib/state";

// interface AppProps {
//   initialPath?: string;
// }
// import {Login} from "./Login";
// // Lazy imports
// const Home = lazy(() => import("./Home"));
// const Register = lazy(() => import("./Register"));
// const Manage = lazy(() => import("./Manage"));
// const Contact = lazy(() => import("./Contect"));

// Wrappers with navigation
// const HomeWithNav: Component = () => (
//   <>
//     <PageNavigater />
//     <Home />
//   </>
// );

// const LoginWithNav: Component = () => (
//   <>
//     <PageNavigater />
//     <Login />
//   </>
// );

// const RegisterWithNav: Component = () => (
//   <>
//     <PageNavigater />
//     <Register />
//   </>
// );

// const ContactWithNav: Component = () => (
//   <>
//     <PageNavigater />
//     <Contact />
//   </>
// );

// const App: Component<AppProps> = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route path="/" component={HomeWithNav} />
//           <Route path="/login" component={LoginWithNav} />
//           <Route path="/register" component={RegisterWithNav} />
//           <Route path="/contact" component={ContactWithNav} />
//           <Route
//             path="/manage"
//             component={() => (
//               <AppProvider>
//                 <Manage />
//               </AppProvider>
//             )}
//           />
//         </Suspense>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
import { createSignal} from "solid-js";
const Counter=()=>{
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <h1>Counter: {count()}</h1>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount(count() - 1)}>decrement</button>
    </div>
);
}
const App = () => {
  return (
    <div>
      {Array.from({ length: 10000 }, () => (
        <Counter/>
      ))}
    </div>
  );
};

export default App;
