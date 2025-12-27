import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'سارا جهان',
    role: 'مدیر عامل',
    company: 'استارتاپ تک‌فلو',
    content: 'تکیا فقط به ما مشاوره نداد؛ آن‌ها اساساً رویکرد ما به بازار را تغییر دادند. جلسات منتورینگ همان "گرد طلایی" بود که برای جذب سرمایه سری A نیاز داشتیم.',
    avatar: 'https://picsum.photos/id/64/100/100',
  },
  {
    id: '2',
    name: 'آرمان رضایی',
    role: 'موسس',
    company: 'خرده‌فروشی نسل نو',
    content: 'شفافیتی که آن‌ها به عملیات آشفته ما آوردند معجزه‌آسا بود. کیمیاگران واقعی فرآیند و بهره‌وری. به شدت توصیه می‌شوند.',
    avatar: 'https://picsum.photos/id/91/100/100',
  },
  {
    id: '3',
    name: 'لیلا صادقی',
    role: 'مدیر صادرات',
    company: 'اکسپورت جهانی',
    content: 'حرفه‌ای، با بینش و بسیار موثر. استراتژی‌های آن‌ها کمک کرد تا درآمد ما در تنها دو فصل ۲۰۰٪ افزایش یابد.',
    avatar: 'https://picsum.photos/id/65/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#080d1e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">داستان‌های <span className="text-tekia-gold">موفقیت</span></h2>
          <p className="text-slate-400">به جمع کسب‌وکارهایی بپیوندید که دچار تحول شده‌اند.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-8 left-8 w-8 h-8 text-tekia-gold/20 transform scale-x-[-1]" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-tekia-gold/50 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-tekia-gold text-xs">{t.role}، {t.company}</p>
                </div>
              </div>
              
              <p className="text-slate-300 italic relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tekia-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators / Partners */}
        <div className="mt-20 border-t border-white/5 pt-10">
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-widest">مورد اعتماد رهبران صنعت</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simulating Logos with Text/Shapes */}
             {['ورتکس', 'الیمپوس', 'آپکس', 'نوا لاین', 'زنیت'].map((logo) => (
               <div key={logo} className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-slate-600 rounded rotate-45"></div>
                 <span className="text-xl font-bold text-slate-400">{logo}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;