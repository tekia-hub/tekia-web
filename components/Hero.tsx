import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
         {/* Using a placeholder that resembles abstract blue/gold architecture/geometry */}
        <img 
          src="https://picsum.photos/id/103/2592/1936" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-30 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tekia-navy via-tekia-navy/90 to-tekia-navy"></div>
        
        {/* Abstract Geometric Decorations */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-tekia-gold/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tekia-gold/30 bg-tekia-gold/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-tekia-gold animate-ping"></span>
            <span className="text-tekia-gold text-xs font-semibold tracking-wider uppercase">تدبیر کیمیاگران یاور امروز</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            کسب‌وکار خود را به <span className="text-transparent bg-clip-text bg-gold-gradient text-glow">طلای ناب</span> تبدیل کنید
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            ما کیمیاگران عصر دیجیتال هستیم. تکیا استراتژی داده‌محور را با منتورینگ خلاقانه ترکیب می‌کند تا پتانسیل آنلاین شما را به موفقیت قابل اندازه‌گیری تبدیل کند.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group px-8 py-4 rounded-full bg-gold-gradient text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2">
              شروع تحول
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-slate-600 hover:border-tekia-gold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 glass-card hover:bg-white/5">
              <Play className="w-4 h-4 fill-current ml-2" />
              داستان ما
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-slate-500 text-sm font-medium">
             <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">+۲۰۰</span>
                <span className="leading-tight">کسب‌وکار<br/>متحول شده</span>
             </div>
             <div className="w-px h-10 bg-slate-700"></div>
             <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">۹۸٪</span>
                <span className="leading-tight">حفظ<br/>مشتری</span>
             </div>
          </div>
        </div>

        {/* 3D Visual Representation (Simulated with CSS/Image) */}
        <div className="relative hidden md:block h-[600px] w-full">
           <div className="absolute inset-0 flex items-center justify-center">
              {/* Central glowing orb/shape */}
              <div className="relative w-80 h-80">
                 <div className="absolute inset-0 border-2 border-tekia-gold/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                 <div className="absolute inset-4 border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-tekia-gold/20 to-transparent rounded-full blur-xl"></div>
                 {/* Floating card effect */}
                 <div className="absolute -top-10 -right-10 glass-card p-4 rounded-xl shadow-2xl animate-[bounce_3s_infinite]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">↑</div>
                        <div>
                            <p className="text-xs text-slate-400">نرخ رشد</p>
                            <p className="text-lg font-bold text-white">+۱۴۵٪</p>
                        </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-5 -left-10 glass-card p-4 rounded-xl shadow-2xl animate-[bounce_4s_infinite]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">★</div>
                        <div>
                            <p className="text-xs text-slate-400">رضایت مشتری</p>
                            <p className="text-lg font-bold text-white">۴.۹/۵.۰</p>
                        </div>
                    </div>
                 </div>
                 {/* Main Placeholder Image for the 3D Object */}
                  <img 
                    src="https://picsum.photos/id/1/800/800" 
                    alt="Strategic Growth" 
                    className="w-full h-full object-cover rounded-full opacity-60 mix-blend-overlay mask-image-circle"
                    style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 100%)' }}
                  />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;