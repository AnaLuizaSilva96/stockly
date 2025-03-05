import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { PlusIcon } from "lucide-react";
import { productTableColumns } from "./_components/table-columns";
import { getProduct } from "../_data-access/product/get-product";

export default async function ProductsPage() {
  const products = await getProduct();

  return (
    <div className="bg-{#f3f4f6} w-full space-y-8 p-8">
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
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
}
