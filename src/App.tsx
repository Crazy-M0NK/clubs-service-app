import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./Layout";
// Импорты экранов и компонентов
import { Home } from "./screens/Home";
import Club from "./screens/Club";
import Deposits from "./screens/Deposits";
import Managers from "./screens/Managers";
import Players from "./screens/Players";
import Settings from "./screens/Settings";
import Withdrawals from "./screens/Withdrawals";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "club/:club_id",
        Component: Club,
        children: [
          { path: "managers", Component: Managers },
          { path: "players", Component: Players },
          { path: "deposits", Component: Deposits },
          { path: "withdrawals", Component: Withdrawals },
          { path: "settings", Component: Settings },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
