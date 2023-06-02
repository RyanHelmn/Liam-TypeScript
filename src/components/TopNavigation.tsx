import { Link, NavLink } from "react-router-dom";

type NavItem = {
  to: string;
  title: string;
};

const navItems: NavItem[] = [
  {
    to: "/about",
    title: "About",
  },
];

export function TopNavigation() {
  return (
    <nav className="fixed top-0 bg-white z-50 w-full">
      <div className="container flex items-center justify-between py-6">
        <Link to="/" className="text-xl font-semibold">
          Liam Typescript
        </Link>

        {navItems && (
          <ul className="text-lg">
            {navItems.map((navItem) => (
              <li key={navItem.to}>
                <NavLink
                  to={navItem.to}
                  className={({ isActive }) =>
                    `hover:underline underline-offset-4 ${
                      isActive ? "underline" : ""
                    }`
                  }
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
