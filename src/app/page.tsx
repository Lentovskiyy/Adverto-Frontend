import ProductCard from "@/compnoents/ui/ProductCard/ProductCard";
import Header from "@/compnoents/layouts/Header/Header";
import Footer from "@/compnoents/layouts/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-950 bg-gray-100">
      <Header/>

      <main className="px-12 py-8 bg-gray-100 min-h-screen">
        <div className="relative bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] border border-gray-200/80 p-5 rounded-2xl mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-2/5">
            <input
              type="text"
              placeholder="Поиск по объявлениям..."
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pl-11 text-sm focus:outline-none focus:border-primary-normal focus:ring-2 focus:ring-primary-normal/20 transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-3 rounded-xl whitespace-nowrap  transition-all hover:border-gray-300 cursor-pointer">
              Все категории
            </button>
            <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-3 rounded-xl whitespace-nowrap  transition-all hover:border-gray-300 cursor-pointer">
              Цена
            </button>
            <select className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-3 rounded-xl outline-none cursor-pointer transition-all hover:border-gray-300">
              <option>Сначала новые</option>
              <option>Сначала дешевле</option>
              <option>Сначала дороже</option>
            </select>
          </div>
        </div>

        <div className="  p-4 rounded-2xl bg-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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