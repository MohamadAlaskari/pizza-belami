"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { MenuItem } from "@/types";
import { MenuItemCard } from "./MenuItemCard";
import { categories as allCategories, menuData } from "@/data/menuData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function CategoryTabs() {
  const categoriesWithItems = allCategories.filter(category => 
    menuData.some(item => item.category === category)
  );

  return (
    <Tabs defaultValue={categoriesWithItems[0]} className="w-full">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border mb-6">
        <TabsList className="inline-flex h-auto p-1">
          {categoriesWithItems.map((category) => (
            <TabsTrigger key={category} value={category} className="text-sm px-4 py-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {categoriesWithItems.map((category) => (
        <TabsContent key={category} value={category} id={category.toLowerCase()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {menuData
              .filter((item) => item.category === category)
              .map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
          </div>
          {menuData.filter((item) => item.category === category).length === 0 && (
            <p className="text-muted-foreground text-center py-8">
              In dieser Kategorie gibt es derzeit keine Artikel.
            </p>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
