import { TopNavigation } from "../components/TopNavigation.tsx";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <TopNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
