import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Gauge, Zap, Weight, Settings2, Download, Share2 } from "lucide-react";
import { cars } from "../data";

export function CarDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

      if (!car) {
        return (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-4xl font-black italic mb-4">未找到车辆</h1>
            <Link to="/" className="text-primary hover:underline flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> 返回首页
            </Link>
          </div>
        );
      }

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-16 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-10" />
        
        <img 
          src={car.image} 
          alt={car.name} 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 text-sm font-bold tracking-widest uppercase cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> 返回
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-surface-container/50 backdrop-blur-md border border-outline/20 rounded-full text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                  {car.brand}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-on-primary drop-shadow-2xl">
                {car.name}
              </h1>
            </div>
            
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-surface-container/50 backdrop-blur-md border border-outline/20 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-surface-container/50 backdrop-blur-md border border-outline/20 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Specs & Description */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-black italic tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary inline-block"></span>
                概览
              </h2>
              <p className="text-on-surface-variant leading-relaxed font-light">
                {car.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black italic tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary inline-block"></span>
                技术规格
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline/10">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Settings2 className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold tracking-widest uppercase">引擎</span>
                  </div>
                  <span className="font-mono text-sm">{car.specs.engine}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline/10">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold tracking-widest uppercase">动力</span>
                  </div>
                  <span className="font-mono text-sm">{car.specs.power}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline/10">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Weight className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold tracking-widest uppercase">重量</span>
                  </div>
                  <span className="font-mono text-sm">{car.specs.weight}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline/10">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Gauge className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold tracking-widest uppercase">变速箱</span>
                  </div>
                  <span className="font-mono text-sm">{car.specs.transmission}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-black italic tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary inline-block"></span>
                遥测数据
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top Speed */}
                <div className="p-6 bg-surface-container-lowest border border-outline/20 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Gauge className="w-24 h-24 text-primary" />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">最高时速</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black italic tracking-tighter">{car.telemetry.topSpeed}</span>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">km/h</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(car.telemetry.topSpeed / 320) * 100}%` }} />
                  </div>
                </div>

                {/* Acceleration */}
                <div className="p-6 bg-surface-container-lowest border border-outline/20 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-24 h-24 text-primary" />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">加速评分</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black italic tracking-tighter">{car.telemetry.acceleration}</span>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">/ 100</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${car.telemetry.acceleration}%` }} />
                  </div>
                </div>

                {/* Braking */}
                <div className="p-6 bg-surface-container-lowest border border-outline/20 rounded-xl relative overflow-hidden group">
                  <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">制动评分</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black italic tracking-tighter">{car.telemetry.braking}</span>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">/ 100</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${car.telemetry.braking}%` }} />
                  </div>
                </div>

                {/* Cornering */}
                <div className="p-6 bg-surface-container-lowest border border-outline/20 rounded-xl relative overflow-hidden group">
                  <p className="text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">过弯评分</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black italic tracking-tighter">{car.telemetry.cornering}</span>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">/ 100</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${car.telemetry.cornering}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix / Performance Graph Placeholder */}
            <div className="p-8 bg-surface-container border border-outline/10 rounded-xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black italic tracking-tight">性能矩阵</h3>
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">实时数据</span>
              </div>
              
              <div className="aspect-video bg-surface-container-lowest rounded-lg border border-outline/5 flex items-center justify-center relative overflow-hidden">
                {/* Simulated Grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />
                
                {/* Simulated Radar Chart */}
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#474747" strokeWidth="0.5" />
                    <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="#474747" strokeWidth="0.5" />
                    <polygon points="50,35 65,50 50,65 35,50" fill="none" stroke="#474747" strokeWidth="0.5" />
                    
                    {/* Data Polygon */}
                    <polygon 
                      points={`50,${100 - car.telemetry.topSpeed/3.2} ${50 + car.telemetry.acceleration/2},50 50,${50 + car.telemetry.braking/2} ${50 - car.telemetry.cornering/2},50`} 
                      fill="rgba(225, 6, 0, 0.2)" 
                      stroke="#e10600" 
                      strokeWidth="2" 
                    />
                    
                    {/* Points */}
                    <circle cx="50" cy={100 - car.telemetry.topSpeed/3.2} r="2" fill="#e10600" />
                    <circle cx={50 + car.telemetry.acceleration/2} cy="50" r="2" fill="#e10600" />
                    <circle cx="50" cy={50 + car.telemetry.braking/2} r="2" fill="#e10600" />
                    <circle cx={50 - car.telemetry.cornering/2} cy="50" r="2" fill="#e10600" />
                    
                    {/* Labels */}
                    <text x="50" y="-5" textAnchor="middle" fill="#b6b5b4" fontSize="4" className="font-mono uppercase tracking-widest">速度</text>
                    <text x="105" y="51" textAnchor="start" fill="#b6b5b4" fontSize="4" className="font-mono uppercase tracking-widest">加速</text>
                    <text x="50" y="105" textAnchor="middle" fill="#b6b5b4" fontSize="4" className="font-mono uppercase tracking-widest">制动</text>
                    <text x="-5" y="51" textAnchor="end" fill="#b6b5b4" fontSize="4" className="font-mono uppercase tracking-widest">过弯</text>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
