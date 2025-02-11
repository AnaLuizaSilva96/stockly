import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { PlusIcon } from "lucide-react";

export default async function ProductsPage() {
  const products = await db.product.findMany();

  return (
    <div className="w-full space-y-8 p-8">
      <div className="item-center flex w-full justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Products</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          New Product
        </Button>
      </div>
    </div>
  );
}
