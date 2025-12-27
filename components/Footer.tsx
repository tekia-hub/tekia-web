import React from 'react';
import { Hexagon, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02040a] border-t border-white/10 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Hexagon className="w-8 h-8 text-tekia-gold fill-tekia-gold/20" />
              <span className="text-2xl font-bold">تکیا</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              تدبیر کیمیاگران یاور امروز. <br/>
              تبدیل پتانسیل خام کسب‌وکارهای آنلاین به استاندارد طلایی موفقیت در صنعت.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tekia-gold hover:text-tekia-navy transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tekia-gold hover:text-tekia-navy transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tekia-gold hover:text-tekia-navy transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">لینک‌های سریع</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-tekia-gold transition-colors">درباره ما</a></li>
              <li><a href="#services" className="hover:text-tekia-gold transition-colors">خدمات ما</a></li>
              <li><a href="#testimonials" className="hover:text-tekia-gold transition-colors">داستان‌های موفقیت</a></li>
              <li><a href="#" className="hover:text-tekia-gold transition-colors">فرصت‌های شغلی</a></li>
              <li><a href="#" className="hover:text-tekia-gold transition-colors">حریم خصوصی</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">تخصص‌ها</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-tekia-gold transition-colors">استراتژی کسب‌وکار</a></li>
              <li><a href="#" className="hover:text-tekia-gold transition-colors">منتورینگ دیجیتال</a></li>
              <li><a href="#" className="hover:text-tekia-gold transition-colors">هک رشد</a></li>
              <li><a href="#" className="hover:text-tekia-gold transition-colors">تحلیل ریسک</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-white font-bold mb-6">تماس</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tekia-gold shrink-0" />
                <span>تهران، منطقه فناوری، بلوار نوآوری، پلاک ۱۲۳</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tekia-gold shrink-0" />
                <span dir="ltr">+98 21 8888 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tekia-gold shrink-0" />
                <span>hello@tekia.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} تکیا (تدبیر کیمیاگران یاور امروز). تمامی حقوق محفوظ است.</p>
          <p>طراحی شده با <span className="text-tekia-gold">کیمیاگری</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;