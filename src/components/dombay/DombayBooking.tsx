import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CITIES = ['Кисловодск', 'Пятигорск', 'Ессентуки', 'Железноводск', 'Минеральные Воды', 'Другой'];

const PHONE = '+7 967 828-46-99';
const PHONE_RAW = '+79678284699';
const TG_LINK = 'https://t.me/JeepTourDombay';
const WA_LINK = `https://wa.me/${PHONE_RAW.replace('+', '')}`;

export default function DombayBooking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    people: '2',
    city: '',
    agree: false,
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Заявка на тур Домбай\nИмя: ${form.name}\nТел: ${form.phone}\nДата: ${form.date}\nЧеловек: ${form.people}\nГород: ${form.city}`
    );
    window.open(`https://t.me/JeepTourDombay?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section id="booking" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="Calendar" size={14} className="text-gold" />
            <span className="text-gold text-sm font-semibold">Бронирование</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Забронировать место в туре
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Заполните форму, и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Форма */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-white font-black text-2xl mb-3">Заявка отправлена!</h3>
                <p className="text-white/70">Менеджер свяжется с вами в течение 15 минут</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-gold hover:underline text-sm"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs font-semibold block mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Александр"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-semibold block mb-1.5">Телефон *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs font-semibold block mb-1.5">Дата поездки</label>
                    <input
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-semibold block mb-1.5">Количество человек</label>
                    <select
                      value={form.people}
                      onChange={(e) => setForm({ ...form, people: e.target.value })}
                      className="w-full bg-[#0f2548] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'человек' : n < 5 ? 'человека' : 'человек'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs font-semibold block mb-1.5">Город КМВ</label>
                  <select
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-[#0f2548] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                  >
                    <option value="">Выберите город выезда</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    onClick={() => setForm({ ...form, agree: !form.agree })}
                    className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      form.agree ? 'bg-gold border-gold' : 'border-white/30 group-hover:border-gold/60'
                    }`}
                  >
                    {form.agree && <Icon name="Check" size={12} className="text-navy" />}
                  </div>
                  <span className="text-white/50 text-xs leading-relaxed">
                    Я согласен с условиями поездки и на обработку персональных данных
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!form.agree || !form.phone}
                  className="btn-gold w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Icon name="Calendar" size={20} />
                  Забронировать сейчас
                </button>
              </form>
            )}
          </div>

          {/* Контакты */}
          <div id="contacts" className="flex flex-col justify-center space-y-6">
            <div>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Телефон</div>
              <a
                href={`tel:${PHONE_RAW}`}
                className="text-3xl md:text-4xl font-black text-white hover:text-gold transition-colors"
              >
                {PHONE}
              </a>
              <div className="text-white/40 text-sm mt-1">Режим работы: 8:00–20:00</div>
            </div>

            <div className="flex gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-xl font-bold transition-colors text-sm"
              >
                <span className="text-xl">💬</span>
                WhatsApp
              </a>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-5 py-3 rounded-xl font-bold transition-colors text-sm"
              >
                <Icon name="Send" size={16} />
                Telegram
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-gold font-bold mb-2 flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Зона выезда
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Забираем по всем городам Кавказских Минеральных Вод: Кисловодск, Пятигорск, Ессентуки, Железноводск, Минеральные Воды. Без доплат за трансфер.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gold/10 border border-gold/30">
              <div className="text-gold font-bold text-sm mb-1">Цитата дня от гида</div>
              <p className="text-white/80 text-sm italic leading-relaxed">
                «Здесь воздух похож на надежду — чистый и горький»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
