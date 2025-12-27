import React from 'react';
import { TrendingUp, Users, Target, Zap, ShieldCheck, ChevronLeft } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'منتورینگ کیمیاگری کسب‌وکار',
    description: 'برنامه ویژه ۶ ماهه ما برای تبدیل عملیات فعلی شما به رهبر بازار. ما مستقیماً با بنیان‌گذاران کار می‌کنیم تا پتانسیل‌های پنهان را آزاد کنیم.',
    icon: Users,
    size: 'large',
  },
  {
    id: '2',
    title: 'مشاوره استراتژیک',
    description: 'نقشه‌های راه داده‌محور که پیچیدگی‌های بازار را هموار می‌کنند. ما تحلیل، برنامه‌ریزی و اجرا می‌کنیم تا ورودی دقیق به بازار داشته باشید.',
    icon: Target,
    size: 'tall',
  },
  {
    id: '3',
    title: 'هک رشد',
    description: 'آزمایش سریع در کانال‌های بازاریابی برای شناسایی کارآمدترین روش‌های رشد کسب‌وکار.',
    icon: TrendingUp,
    size: 'medium',
  },
  {
    id: '4',
    title: 'تحول دیجیتال',
    description: 'مدرن‌سازی زیرساخت تکنولوژی شما.',
    icon: Zap,
    size: 'small',
  },
  {
    id: '5',
    title: 'مدیریت ریسک',
    description: 'محافظت از دارایی‌ها هنگام مقیاس‌دهی.',
    icon: ShieldCheck,
    size: 'small',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-tekia-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">فرمول <span className="text-tekia-gold">ما</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            ما فقط نصیحت نمی‌کنیم؛ ما عوامل شیمیایی واکنش را فراهم می‌کنیم. 
            طیف گسترده خدمات تخصصی ما را بررسی کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] group cursor-default border-t border-r border-white/10
                ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${service.size === 'tall' ? 'md:col-span-1 md:row-span-2' : ''}
                ${service.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                ${service.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-amber-500 group-hover:to-amber-600 transition-all">
                    <service.icon className="w-6 h-6 text-tekia-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-tekia-gold uppercase tracking-wider">اطلاعات بیشتر</span>
                  <div className="w-6 h-6 rounded-full border border-tekia-gold/30 flex items-center justify-center">
                    <ChevronLeft className="w-3 h-3 text-tekia-gold" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Decorative filler for the grid */}
          <div className="hidden md:flex md:col-span-1 md:row-span-1 items-center justify-center bg-gold-gradient rounded-2xl p-6 text-center">
            <div>
              <p className="text-tekia-navy font-bold text-3xl mb-1 text-en" dir="ltr">24/7</p>
              <p className="text-tekia-navy/80 text-sm font-medium">پشتیبانی اختصاصی</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;