"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

export enum ProductStatus {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

const getStatusLabel = (status: ProductStatus): string => {
  switch (status) {
    case ProductStatus.IN_STOCK:
      return "In Stock";
    case ProductStatus.OUT_OF_STOCK:
      return "Sold out";
    default:
      return "-";
  }
};

const handleStatusLabelStyle = (label: ProductStatus) =>
  label === ProductStatus.IN_STOCK
    ? "bg-green-100 text-green-500 fill-green-500"
    : "bg-red-100 text-red-500 fill-red-500";

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const status = product.status;
      const label = getStatusLabel(status);
      return (
        <Badge
          variant="outline"
          className={`gap-1 ${handleStatusLabelStyle(status)}`}
        >
          <CircleIcon size={10} className={handleStatusLabelStyle(status)} />
          {label}
        </Badge>
      );
    },
  },
];
