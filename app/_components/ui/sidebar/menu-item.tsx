"use client";

import { usePathname } from "next/navigation";
import { LayoutGrid, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../button";

type MenuItem = {
  label: string;
  icon: JSX.Element;
  href: string;
};

const MenuItem = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      icon: <LayoutGrid size={20} />,
      href: "/",
    },
    { label: "Products", icon: <PackageIcon size={20} />, href: "/products" },
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
