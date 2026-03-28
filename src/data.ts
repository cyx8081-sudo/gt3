export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  logo: string;
  specs: {
    engine: string;
    power: string;
    weight: string;
    transmission: string;
  };
  description: string;
  telemetry: {
    topSpeed: number;
    acceleration: number;
    braking: number;
    cornering: number;
  };
}

export const brands = [
  { id: 'ferrari', name: 'FERRARI', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/320px-Ferrari-Logo.svg.png' },
  { id: 'porsche', name: 'PORSCHE', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Porsche_logo.svg/320px-Porsche_logo.svg.png' },
  { id: 'lamborghini', name: 'LAMBORGHINI', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/320px-Lamborghini_Logo.svg.png' },
  { id: 'bmw', name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/320px-BMW.svg.png' },
  { id: 'mercedes', name: 'MERCEDES-AMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/320px-Mercedes-Logo.svg.png' },
  { id: 'audi', name: 'AUDI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/320px-Audi-Logo_2016.svg.png' },
  { id: 'aston-martin', name: 'ASTON MARTIN', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Aston_Martin_logo.svg/320px-Aston_Martin_logo.svg.png' },
  { id: 'mclaren', name: 'MCLAREN', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/320px-McLaren_Racing_logo.svg.png' },
  { id: 'ford', name: 'FORD', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/320px-Ford_Motor_Company_Logo.svg.png' },
  { id: 'chevrolet', name: 'CHEVROLET', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet-logo.png/320px-Chevrolet-logo.png' },
  { id: 'lexus', name: 'LEXUS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lexus_logo.svg/320px-Lexus_logo.svg.png' }
];

export const cars: Car[] = [
  {
    id: 'ferrari-296-gt3',
    name: '296 GT3',
    brand: 'FERRARI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCThl2qFB1rKKoL0__X8ZJ6dZ8qei1OycVnNnLSTlat6HiX5aqQiwnuP6Lc4KvH7F-hSFuviJICO48bH2a8yod8ghpeYqj1QB2Ye1zx_ZYvheqmYInMvev-f9L20HqALvHuc0tE6DbCWrzMWqEkxTtn4Eg7yzgKzjkBuxOBmQjtiPDdvWq3EbzSSxryNtRBZa1zTFG58vdV4EKewgDFvEt88e3BEuPHA60OFklwekzTPe_4p8swkcAm2DI2zH2BTCphWUt6BpX8rPI',
    logo: brands.find(b => b.id === 'ferrari')!.logo,
    specs: {
      engine: '3.0升 双涡轮增压 V6',
      power: '600 马力',
      weight: '1250 公斤',
      transmission: '6速序列式'
    },
    description: '法拉利 296 GT3 代表了跃马品牌在 GT 赛事中的未来，接替了极为成功的 488 GT3。它搭载 120 度 V6 引擎，标志着法拉利跑车重返 6 缸引擎时代。',
    telemetry: {
      topSpeed: 285,
      acceleration: 92,
      braking: 88,
      cornering: 95
    }
  },
  {
    id: 'porsche-911-gt3-r',
    name: '911 GT3 R',
    brand: 'PORSCHE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf5UtF5zR1XYtU2bmx9lh2sCQ4SG_ZHGVrp6Z3aKzJRhM-WdI7hFKgUqV9oMelH9mrt72C0Wtpgx7cps8hYnmf-2t7gQBpBy1KhbedKf3SE7IJ0jQVk918L7ROObFdMsSpZ0wEqMP32HXckvZhBscvnqtUoYnMGtu6SZEw5FfiLqaHtCE1TiUxIg0mxvj0gLAA7S6mvOpPiJe_xllW8cYNyVfuanwgf3qMznqL6NkfngYOAG57Ddzl3v90-kv0T_CucgaA78zl9n8',
    logo: brands.find(b => b.id === 'porsche')!.logo,
    specs: {
      engine: '4.2升 水平对置六缸 自然吸气',
      power: '565 马力',
      weight: '1250 公斤',
      transmission: '6速序列式'
    },
    description: '保时捷 911 GT3 R (992) 是保时捷客户赛车的最新迭代。它配备了更大的 4.2 升引擎，改进了空气动力学，并优化了悬挂系统，为职业和业余车手提供了更好的驾驶体验。',
    telemetry: {
      topSpeed: 280,
      acceleration: 89,
      braking: 96,
      cornering: 94
    }
  },
  {
    id: 'bmw-m4-gt3',
    name: 'M4 GT3',
    brand: 'BMW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEizS4I2ggVw0hY-JVnXYW4Ut3WBomYthJ5-pnkxaVu2tjZ56v1cJZI_sQbMZr2_gzYV4kUs98w8tGqGosFxtCmwpDK4xmzIC2ek_9_ICJS-oh5cWoYoHH_ZopkNXxHsX5LSwRWMVaIY8Q2iLcD4he7z82wD3C9LEocSCl_ERQa2C8ihrtVv2vxhapLc0uxs8GSaICySAwNdGaTmbwG5TloQ-xarfD53Ba4jesUrgPZbxXz0UBxL2hlNSt5CvZ3Jk0N1lUqcKlgjE',
    logo: brands.find(b => b.id === 'bmw')!.logo,
    specs: {
      engine: '3.0升 双涡轮增压 直列六缸',
      power: '590 马力',
      weight: '1300 公斤',
      transmission: '6速序列式'
    },
    description: '宝马 M4 GT3 取代了 M6 GT3。它在驾驶性能、成本效益和操作方面都有显著提升。P58 引擎可输出高达 590 马力，使其成为赛道上强大的竞争者。',
    telemetry: {
      topSpeed: 290,
      acceleration: 90,
      braking: 85,
      cornering: 88
    }
  },
  {
    id: 'lamborghini-huracan-gt3-evo2',
    name: 'Huracán GT3 EVO2',
    brand: 'LAMBORGHINI',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Lamborghini_Hurac%C3%A1n_GT3_EVO2_%28JLOC_Lamborghini_GT3%29_%28No.88%29_%28Ent_No.-%29_%2824021011565%29.jpg/1280px-Lamborghini_Hurac%C3%A1n_GT3_EVO2_%28JLOC_Lamborghini_GT3%29_%28No.88%29_%28Ent_No.-%29_%2824021011565%29.jpg',
    logo: brands.find(b => b.id === 'lamborghini')!.logo,
    specs: {
      engine: '5.2升 自然吸气 V10',
      power: '580 马力',
      weight: '1230 公斤',
      transmission: '6速序列式'
    },
    description: '兰博基尼 Huracán GT3 EVO2 采用了全新的空气动力学套件和进气系统，与奥迪 R8 共享 V10 引擎，但在赛道上展现出独特的狂野特性。',
    telemetry: { topSpeed: 286, acceleration: 91, braking: 90, cornering: 93 }
  },
  {
    id: 'mercedes-amg-gt3-evo',
    name: 'AMG GT3 Evo',
    brand: 'MERCEDES-AMG',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mercedes-AMG_GT3_Evo_of_2_Seas_Motorsports_%282025_British_GT_Donington_Park%29.jpg/1280px-Mercedes-AMG_GT3_Evo_of_2_Seas_Motorsports_%282025_British_GT_Donington_Park%29.jpg',
    logo: brands.find(b => b.id === 'mercedes')!.logo,
    specs: {
      engine: '6.3升 自然吸气 V8',
      power: '550 马力',
      weight: '1285 公斤',
      transmission: '6速序列式'
    },
    description: '梅赛德斯-AMG GT3 Evo 凭借其标志性的 6.3 升自然吸气 V8 引擎，以其可靠性、出色的操控性和极具侵略性的外观在 GT3 赛场上占据主导地位。',
    telemetry: { topSpeed: 282, acceleration: 88, braking: 92, cornering: 93 }
  },
  {
    id: 'audi-r8-lms-gt3-evo-ii',
    name: 'R8 LMS GT3 Evo II',
    brand: 'AUDI',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Audi_R8_LMS_GT3_Evo_II_%282022%29_%2852566232826%29.jpg/1280px-Audi_R8_LMS_GT3_Evo_II_%282022%29_%2852566232826%29.jpg',
    logo: brands.find(b => b.id === 'audi')!.logo,
    specs: {
      engine: '5.2升 自然吸气 V10',
      power: '585 马力',
      weight: '1235 公斤',
      transmission: '6速序列式'
    },
    description: '奥迪 R8 LMS GT3 Evo II 搭载了中置 5.2 升 V10 引擎，拥有卓越的空气动力学设计和升级的悬挂系统，是全球最成功的 GT3 赛车之一。',
    telemetry: { topSpeed: 285, acceleration: 90, braking: 91, cornering: 94 }
  },
  {
    id: 'aston-martin-vantage-amr-gt3-evo',
    name: 'Vantage AMR GT3 Evo',
    brand: 'ASTON MARTIN',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Aston_Martin_Vantage_GT3_%2849352211643%29.jpg/1280px-Aston_Martin_Vantage_GT3_%2849352211643%29.jpg',
    logo: brands.find(b => b.id === 'aston-martin')!.logo,
    specs: {
      engine: '4.0升 双涡轮增压 V8',
      power: '535 马力',
      weight: '1265 公斤',
      transmission: '6速序列式'
    },
    description: '2024款阿斯顿·马丁 Vantage AMR GT3 Evo 进行了全面的空气动力学和悬挂升级，搭载强劲的 4.0 升双涡轮增压 V8 引擎，在赛道上兼具优雅与速度。',
    telemetry: { topSpeed: 288, acceleration: 89, braking: 89, cornering: 92 }
  },
  {
    id: 'mclaren-720s-gt3-evo',
    name: '720S GT3 Evo',
    brand: 'MCLAREN',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Mclaren_720S_PA280973-PSD.jpg/1280px-Mclaren_720S_PA280973-PSD.jpg',
    logo: brands.find(b => b.id === 'mclaren')!.logo,
    specs: {
      engine: '4.0升 双涡轮增压 V8',
      power: '540 马力',
      weight: '1240 公斤',
      transmission: '6速序列式'
    },
    description: '迈凯伦 720S GT3 Evo 拥有极其先进的碳纤维单体壳底盘，结合 4.0 升双涡轮增压 V8 引擎，提供无与伦比的轻量化优势和过弯性能。',
    telemetry: { topSpeed: 287, acceleration: 93, braking: 94, cornering: 96 }
  },
  {
    id: 'ford-mustang-gt3',
    name: 'Mustang GT3',
    brand: 'FORD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Ford_Mustang_GT3_2.jpg/1280px-2023_Ford_Mustang_GT3_2.jpg',
    logo: brands.find(b => b.id === 'ford')!.logo,
    specs: {
      engine: '5.4升 自然吸气 V8',
      power: '500+ 马力',
      weight: '1300 公斤',
      transmission: '6速序列式'
    },
    description: '福特 Mustang GT3 标志着这匹经典美式小马车重返全球 GT 赛事。它搭载了由 M-Sport 开发的 5.4 升 V8 引擎，拥有极具肌肉感的宽体设计。',
    telemetry: { topSpeed: 284, acceleration: 87, braking: 88, cornering: 89 }
  },
  {
    id: 'chevrolet-corvette-z06-gt3r',
    name: 'Corvette Z06 GT3.R',
    brand: 'CHEVROLET',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2020_Corvette_C8.R_at_Amelia_Island_Concours_d%E2%80%99Elegance.jpg/1280px-2020_Corvette_C8.R_at_Amelia_Island_Concours_d%E2%80%99Elegance.jpg',
    logo: brands.find(b => b.id === 'chevrolet')!.logo,
    specs: {
      engine: '5.5升 自然吸气 V8',
      power: '500+ 马力',
      weight: '1250 公斤',
      transmission: '6速序列式'
    },
    description: '雪佛兰 Corvette Z06 GT3.R 是科尔维特首款符合 FIA GT3 规格的赛车，搭载了高转速的 5.5 升平面曲轴 V8 引擎，声音极其震撼。',
    telemetry: { topSpeed: 286, acceleration: 88, braking: 90, cornering: 91 }
  },
  {
    id: 'lexus-rc-f-gt3',
    name: 'RC F GT3',
    brand: 'LEXUS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/No.96_K-tunes_RC_F_GT3_after_2023.8.26-27_SUZUKA_GT_450km.jpg/1280px-No.96_K-tunes_RC_F_GT3_after_2023.8.26-27_SUZUKA_GT_450km.jpg',
    logo: brands.find(b => b.id === 'lexus')!.logo,
    specs: {
      engine: '5.4升 自然吸气 V8',
      power: '500+ 马力',
      weight: '1300 公斤',
      transmission: '6速序列式'
    },
    description: '雷克萨斯 RC F GT3 凭借其可靠的 5.4 升 V8 引擎和出色的底盘调校，在 IMSA 和其他 GT 赛事中屡获佳绩，是赛道上的常青树。',
    telemetry: { topSpeed: 283, acceleration: 86, braking: 89, cornering: 90 }
  }
];
