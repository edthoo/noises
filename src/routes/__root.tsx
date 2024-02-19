import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: () => (
    <div className="w-screen h-screen">
      <Toaster />
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr /> */}
      <div className="mx-auto w-[800px]">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
