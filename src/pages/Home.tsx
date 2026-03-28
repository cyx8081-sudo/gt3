import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Activity, Zap, Shield } from "lucide-react";
import { cars, brands } from "../data";
import { motion, AnimatePresence } from "motion/react";

export function Home() {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % cars.length);
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, []);

  const featuredCar = cars[currentCarIndex];
  const displayedBrands = showAllBrands ? brands : brands.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-10" />
        
        {cars.map((car, index) => (
          <img 
            key={car.id}
            src={car.image} 
            alt={car.name} 
            className={`absolute inset-0 w-full h-full object-cover object-center scale-105 transform origin-center transition-opacity duration-1000 ease-in-out ${
              index === currentCarIndex ? "opacity-60 z-0" : "opacity-0 -z-10"
            }`}
            referrerPolicy="no-referrer"
          />
        ))}

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start">
          <AnimatePresence mode="wait">
            <motion.div 
              key={featuredCar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold tracking-widest uppercase">
                  精选
                </span>
                <span className="text-on-surface-variant text-sm tracking-widest uppercase font-medium">
                  {featuredCar.brand}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-on-primary mb-4 drop-shadow-2xl">
                {featuredCar.name}
              </h1>
              
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 font-light leading-relaxed">
                {featuredCar.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={`/car/${featuredCar.id}`}
                  className="px-8 py-4 bg-primary text-on-primary font-bold tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors flex items-center gap-2 rounded-sm"
                >
                  查看遥测 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {cars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCarIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentCarIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-on-surface-variant/50 hover:bg-on-surface-variant"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 border-b border-outline/10 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-black italic tracking-tight">制造商</h2>
            <button 
              onClick={() => setShowAllBrands(!showAllBrands)}
              className="text-primary hover:text-primary/80 text-sm font-bold tracking-widest uppercase flex items-center gap-1 mt-4 md:mt-0 cursor-pointer transition-colors"
            >
              {showAllBrands ? '收起' : '查看全部'} <ChevronRight className={`w-4 h-4 transition-transform ${showAllBrands ? 'rotate-90' : ''}`} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {displayedBrands.map(brand => (
              <Link 
                key={brand.id} 
                to={`/search?brand=${brand.id}`}
                className="group flex flex-col items-center justify-center p-8 bg-surface-container hover:bg-surface-container-high border border-outline/10 rounded-xl transition-all hover:border-primary/50"
              >
                <div className="h-16 w-full flex items-center justify-center mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  <span className="text-4xl font-black italic text-on-surface-variant">{brand.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-bold tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors text-center">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Cars Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tight">热门车辆</h2>
            <div className="h-px flex-1 bg-outline/20 mx-8 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cars.filter(car => car.brand === 'FERRARI' || car.brand === 'PORSCHE').map(car => (
              <Link 
                key={car.id} 
                to={`/car/${car.id}`}
                className="group flex flex-col bg-surface-container-lowest border border-outline/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">{car.brand}</p>
                      <h3 className="text-2xl font-black italic tracking-tight text-on-primary">{car.name}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors backdrop-blur-sm">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 grid grid-cols-2 gap-4 bg-surface-container-lowest">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">动力</p>
                    <p className="font-mono text-sm font-medium">{car.specs.power}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">重量</p>
                    <p className="font-mono text-sm font-medium">{car.specs.weight}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is GT3 Section */}
      <section className="py-24 bg-surface-container border-y border-outline/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tight mb-6">什么是 <span className="text-primary">GT3？</span></h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              GT3 组别（技术上称为杯赛级豪华旅行车）是国际汽联 (FIA) 维护的一套规则，适用于全球各种汽车赛事的豪华旅行赛车。自 2005 年由 SRO 赛车集团创立以来，GT3 已经发展成为全球最成功、最受欢迎的 GT 赛事规格。
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-black italic text-2xl mb-3 text-on-surface">性能平衡 (BoP)</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  这是 GT3 赛事的核心机制。由于各家制造商的赛车在引擎布局（前置、中置、后置）、气缸数量和排量上各不相同，FIA 和 SRO 会通过调整赛车的最低重量、引擎进气限流器尺寸以及涡轮增压值，来确保所有赛车的圈速表现处于同一水平。这使得比赛极具观赏性，胜负更多取决于车手技术和车队策略。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-black italic text-2xl mb-3 text-on-surface">基于量产跑车</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  GT3 赛车必须基于合法的公路量产跑车打造。虽然它们在内部进行了彻底的赛车化改装（如防滚架、赛车序列式变速箱、碳纤维车身部件），但它们必须保留原厂车型的基本轮廓和引擎架构。此外，赛车拥有极其夸张的空气动力学套件，能在高速弯道中产生巨大的下压力。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-black italic text-2xl mb-3 text-on-surface">驾驶辅助与全球化</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  与许多方程式赛车不同，GT3 赛车强制配备了赛车级防抱死制动系统 (ABS) 和牵引力控制系统 (TC)。这不仅是为了适应耐力赛中复杂多变的天气，也是为了让“绅士车手”（业余车手）能够安全地驾驶这些拥有 500-600 匹马力、重约 1250 公斤的性能猛兽。如今，GT3 规格被广泛应用于勒芒 24 小时耐力赛、IMSA、DTM 等全球顶级赛事。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
