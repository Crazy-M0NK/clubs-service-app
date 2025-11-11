import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="items-center flex flex-col px-4">
      <Outlet />
    </div>
  );
}
