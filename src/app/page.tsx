import ProductCard from "@/compnoents/ui/ProductCard/ProductCard";
import Header from "@/compnoents/layouts/Header/Header";
import Footer from "@/compnoents/layouts/Footer/Footer";
import CategoryCard from "@/compnoents/ui/CategoryCard/CategoryCard";
import BottomHeader from "@/compnoents/layouts/BottomHeader/BottomHeader";

export default function Home() {

  return (
    <div className="min-h-screen text-gray-950 bg-gray-100">
      <Header/>

      <main className="px-4 max-w-[1600px] mx-auto User pb-18 pt-4 md:pt-8 lg:py-12 bg-gray-100 min-h-screen">
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
          className="p-0 md:py-4 md:px-4 rounded-2xl md:bg-gray-200 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
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

      <BottomHeader/>
      <Footer/>
    </div>
  );
}