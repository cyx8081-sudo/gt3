import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { cars } from "../data";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const filteredCars = useMemo(() => {
    if (!query.trim()) return [];
    return cars.filter(car => {
      return car.name.toLowerCase().includes(query.toLowerCase()) || 
             car.brand.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value) {
      searchParams.set("q", e.target.value);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header / Search Bar */}
      <section className="bg-surface-container-lowest border-b border-outline/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tight mb-8">探索 <span className="text-primary">车辆</span></h1>
          
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-on-surface-variant" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-surface-container border border-outline/20 rounded-xl text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="按型号或制造商搜索..."
              value={query}
              onChange={handleSearch}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {!query.trim() ? (
          <div className="flex flex-col items-center justify-center py-24 text-center opacity-50">
            <SearchIcon className="w-16 h-16 mb-6 text-on-surface-variant" />
            <p className="text-xl font-bold tracking-widest uppercase text-on-surface-variant">
              输入车辆型号或制造商开始搜索
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black italic tracking-tight">
                搜索结果 <span className="text-primary">({filteredCars.length})</span>
              </h2>
            </div>

            {filteredCars.length === 0 ? (
              <div className="p-12 bg-surface-container-lowest border border-outline/10 rounded-xl text-center">
                <p className="text-on-surface-variant text-lg">没有找到符合条件的车辆。</p>
                <button 
                  onClick={() => { setQuery(""); searchParams.delete("q"); setSearchParams(searchParams); }}
                  className="mt-4 text-primary hover:underline font-bold tracking-widest uppercase text-sm"
                >
                  清除搜索
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map(car => (
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
            )}
          </div>
        )}
      </section>
    </div>
  );
}
