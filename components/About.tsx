import React from 'react';
import { Gem, Layers, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 -skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-amber-500/5 -skew-x-12 transform origin-bottom-left"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               {/* Use a business meeting image with blue tint */}
              <img 
                src="https://picsum.photos/id/3/800/1000" 
                alt="The Alchemists" 
                className="w-full h-auto object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-tekia-navy/30 mix-blend-multiply"></div>
            </div>
            {/* Floating Quote */}
            <div className="absolute -bottom-10 -right-10 max-w-xs glass-card p-6 rounded-lg hidden md:block border-r-4 border-tekia-gold">
              <p className="text-slate-300 italic text-sm">"تبدیل مس به طلا یک استعاره است. ما سردرگمی را به شفافیت و تلاش را به تعالی تبدیل می‌کنیم."</p>
              <p className="text-tekia-gold mt-2 font-bold text-xs">- بنیان‌گذار</p>
            </div>
          </div>

          <div>
            <h2 className="text-tekia-gold font-bold tracking-wider text-sm mb-2 uppercase">فلسفه ما</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">کیمیاگران <br/>کسب‌وکار <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">مدرن</span></h3>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              در تکیا (تدبیر کیمیاگران یاور امروز)، ما معتقدیم که هر کسب‌وکاری مواد اولیه لازم برای عظمت را در اختیار دارد. نقش ما فراهم کردن کاتالیزور — بینش استراتژیک و منتورینگ — است که واکنش رشد نمایی را آغاز می‌کند.
            </p>

            <div className="space-y-6">
              {[
                { icon: Gem, title: "تبدیل ارزش", desc: "یافتن ارزش پنهان در دارایی‌های موجود شما." },
                { icon: Layers, title: "خرد ساختاریافته", desc: "دهه‌ها تجربه خلاصه شده در برنامه‌های عملی." },
                { icon: Lightbulb, title: "استراتژی روشن", desc: "دید واضح در چشم‌انداز مه‌آلود بازار." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-tekia-gold group-hover:text-tekia-navy transition-all duration-300">
                    <item.icon className="w-5 h-5 text-tekia-gold group-hover:text-tekia-navy" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;