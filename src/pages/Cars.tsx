import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cars, brands } from "../data";

export function Cars() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <section className="bg-surface-container-lowest border-b border-outline/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tight">全部 <span className="text-primary">车辆</span></h1>
          <p className="text-on-surface-variant mt-4 max-w-2xl">
            浏览我们完整的 GT3 赛车系列。按制造商分类，探索每辆车的详细规格和遥测数据。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-16">
        {brands.map(brand => {
          const brandCars = cars.filter(car => car.brand.toUpperCase() === brand.name.toUpperCase());
          
          if (brandCars.length === 0) return null;

          return (
            <div key={brand.id} className="space-y-6">
              <div className="flex items-center gap-4 border-b border-outline/10 pb-4">
                <h2 className="text-2xl font-black italic tracking-tight">{brand.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandCars.map(car => (
                  <Link 
                    key={car.id} 
                    to={`/car/${car.id}`}
                    className="group flex flex-col bg-surface-container-lowest border border-outline/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-surface-container">
                      <img 
                        src={car.image} 
                        alt={car.name} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-1">{car.brand}</p>
                          <h3 className="text-xl font-black italic tracking-tight text-on-primary">{car.name}</h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors backdrop-blur-sm">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 grid grid-cols-2 gap-4 bg-surface-container-lowest">
                      <div>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">动力</p>
                        <p className="font-mono text-xs font-medium">{car.specs.power}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">重量</p>
                        <p className="font-mono text-xs font-medium">{car.specs.weight}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
