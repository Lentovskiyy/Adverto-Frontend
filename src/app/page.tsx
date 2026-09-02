import ProductCard from "@/compnoents/ui/ProductCard/ProductCard";
import Header from "@/compnoents/layouts/Header/Header";
import Footer from "@/compnoents/layouts/Footer/Footer";
import CategoryCard from "@/compnoents/ui/CategoryCard/CategoryCard";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-950 bg-gray-100">
      <Header/>

      <main className="max-w-[1600px] mx-auto px-4 py-8 bg-gray-100 min-h-screen">
        <div className="mb-10 max-w-[1600px] mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Популярные категории</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>

            <CategoryCard/>

            <CategoryCard/>

            <CategoryCard/>

            <CategoryCard/>

            <CategoryCard/>

          </div>
        </div>

        <div
          className="  p-4 rounded-2xl bg-gray-200 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </main>

      <Footer/>
    </div>
  );
}