import { FoodCategoryProvider } from "../_provider/FoodCategory";

export default function AdminPageLayout({ children }) {
  return (
    <div>
      <FoodCategoryProvider>{children}</FoodCategoryProvider>
    </div>
  );
}
