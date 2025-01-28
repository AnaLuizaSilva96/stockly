"use client";

import { usePathname } from "next/navigation";
import { LayoutGrid, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type MenuItem = {
  label: string;
  icon: JSX.Element;
  href: string;
};

const MenuItem = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { label: "Products", icon: <PackageIcon size={20} />, href: "/products" },
    {
      label: "Dashboard",
      icon: <LayoutGrid size={20} />,
      href: "/",
    },
    {
      label: "Sales",
      icon: <ShoppingBasketIcon size={20} />,
      href: "/sales",
    },
  ];

  return menuItems.map((item) => (
    <Button
      variant={pathname === item.href ? "secondary" : "ghost"}
      className="justify-start gap-2"
      key={item.label}
      asChild
    >
      <Link href={item.href}>
        {item.icon} {item.label}
      </Link>
    </Button>
  ));
};

export default MenuItem;
