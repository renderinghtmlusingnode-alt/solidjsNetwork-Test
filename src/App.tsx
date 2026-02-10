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
// import { createSignal, createMemo } from "solid-js";

// /* ===============================
//    HEAVY PURE LOGIC (40+ lines)
// ================================ */
// function heavyLogic(count:any) {
//   let result = 0;
//   let modifier = 1;

//   // main loop
//   for (let i = 1; i <= 1000; i++) {
//     result += (count * i) % 7;

//     if (i % 10 === 0) {
//       modifier += Math.sqrt(i + count);
//       result += modifier;
//     } else if (i % 3 === 0) {
//       result -= Math.log(i + 1);
//     } else {
//       result += Math.sin(i) * 0.1;
//     }

//     if (result > 5000) {
//       result *= 0.5;
//     }
//   }

//   // secondary computation
//   let checksum = 0;
//   for (let j = 0; j < 50; j++) {
//     checksum += (result + j * count) % 13;
//   }

//   // classification
//   let label;
//   if (result > 3000) label = "HIGH";
//   else if (result > 1500) label = "MEDIUM";
//   else label = "LOW";

//   return result
// }

/* ===============================
   COMPONENT
================================ */
const Counter = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1>
        {count()}
      </h1>

      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
};

/* ===============================
   APP (10,000 instances)
================================ */
const App = () => {
  return (
    <div>
      {Array.from({ length: 10000 }, () => (
        <Counter />
      ))}
    </div>
  );
};

export default App;
// import { createSignal, For, Show } from "solid-js";

// /* ================= Counter ================= */

// const Counter = () => {
//   const [count, setCount] = createSignal(0);

//   return (
//     <div>
//       <div>{count()}</div>
//       <button onClick={() => setCount(c => c + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };

// /* ================= Routes ================= */

// const Root = () => <div>root</div>;
// const Home = () => <div>home</div>;

// const Count = () => {
//   const items = Array.from({ length: 100000 });
//   return (
//     <div>
//       <For each={items}>
//         {() => <Counter />}
//       </For>
//     </div>
//   );
// };

// /* ================= App ================= */

// export default function App() {
//   const [route, setRoute] = createSignal("");

//   return (
//     <div>
//       <div>click any below route to change route</div>

//       <button onClick={() => setRoute("root")}>root</button>
//       <button onClick={() => setRoute("home")}>home</button>
//       <button onClick={() => setRoute("count")}>count</button>

//       <Show when={route() === "root"}>
//         <Root />
//       </Show>

//       <Show when={route() === "home"}>
//         <Home />
//       </Show>

//       <Show when={route() === "count"}>
//         <Count />
//       </Show>
//     </div>
//   );
// }

