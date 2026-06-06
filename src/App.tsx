import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Camera,
  ChevronDown,
  CheckCircle2,
  Clock3,
  FlaskConical,
  Flame,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench,
  X,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'
import logoDark from './assets/1rest_logo_ForDarkTheme.png'
import logoLight from './assets/1rest_logo.png'
import './App.css'

type Service = {
  icon: ComponentType<{ size?: number }>
  title: string
  text: string
  details?: string[]
}

const phone = '+7 777 122 90 87'
const whatsapp = '77771229087'
const email = '1rest.kz@gmail.com'

const services: Service[] = [
  {
    icon: Sparkles,
    title: 'Кухонные вытяжки',
    text: 'Разборка, мойка фильтров, удаление жира с зонтов, коробов и доступных участков системы.',
  },
  {
    icon: Wrench,
    title: 'Вентиляционные каналы',
    text: 'Механическая чистка шахт и воздуховодов, устранение загрязнений, мешающих нормальной тяге.',
  },
  {
    icon: Flame,
    title: 'Дымоходы',
    text: 'Очистка сажи, налета и засоров для печей, котельных, тандыров, мангалов и каминных систем.',
  },
  {
    icon: Settings2,
    title: 'Аппарат «гибкий вал»',
    text: 'Профессиональное оборудование для глубокой механической чистки воздуховодов.',
    details: [
      'Оборудование сертифицировано и предназначено для профессионального использования в пищевой и промышленной сферах.',
      'Эффективно удаляет загрязнения, не повреждая внутренние поверхности воздуховодов.',
      'Аппарат прошел необходимые испытания и соответствует требованиям безопасности.',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Cooky Smoke и Cooky Stuff',
    text: 'Химические средства для удаления жировых и пылевых загрязнений в вытяжных системах.',
    details: [
      'Специально разработаны для чистки вытяжных систем на объектах общественного питания.',
      'Безопасны для применения в пищевой промышленности и на кухнях с ежедневной загрузкой.',
      'Имеют необходимые сертификаты, подтверждающие соответствие санитарно-эпидемиологическим нормам.',
      'Не воспламеняются и не являются пожароопасными, что важно для объектов с повышенными требованиями к пожарной безопасности.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия качества и безопасности',
    text: 'Работы выполняют подготовленные специалисты с опытом обслуживания подобных систем.',
    details: [
      'Специалисты проходят обучение и работают с системами вентиляции, вытяжек и дымоходов.',
      'Используем только проверенное оборудование и материалы.',
      'Контролируем качество выполнения работ, чтобы гарантировать безопасность и стабильный результат.',
    ],
  },
]

const advantages = [
  'Работаем ночью и в непиковые часы, чтобы не останавливать кухню',
  'Делаем фотофиксацию до и после работ для внутреннего контроля',
  'Подбираем метод чистки под объект: ресторан, кафе, цех, дом или баню',
  'Оставляем рекомендации по периодичности обслуживания',
]

const workflow = [
  'Осмотр, оценка доступа и согласование объема работ',
  'Защита рабочей зоны и монтажные работы',
  'Чистка каналов, зонтов, жироуловителей и двигателей',
  'Сборка, проверка тяги, фотоотчет и предоставление документации',
]

const credentials = [
  'Высотные работы',
  'Пожарная безопасность',
  'Электробезопасность',
  'Промышленная безопасность',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  })

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const animatedItems = document.querySelectorAll(
      '.section-heading, .service-card, .split-section > div, .object-list article, .evidence-media, .evidence-copy, .timeline article, .cert-card, .credential-card, .cta-section > div',
    )

    animatedItems.forEach((item) => item.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    animatedItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="1REST.KZ">
          <img
            className="brand-logo"
            src={theme === 'dark' ? logoDark : logoLight}
            alt="1REST.KZ"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Основная навигация">
          <a href="#services" onClick={closeMenu}>Услуги</a>
          <a href="#objects" onClick={closeMenu}>Объекты</a>
          <a href="#process" onClick={closeMenu}>Как работаем</a>
          <a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'}
          onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
          title={theme === 'dark' ? 'Светлая тема' : 'Темная тема'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <a className="header-phone" href={`tel:${phone.replaceAll(' ', '')}`}>
          <Phone size={18} />
          {phone}
        </a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">г. Алматы</p>
            <h1>Чистка вентиляции, производственных и кухонных вытяжек</h1>
            <p className="lead">
              Помогаем ресторанам, кафе, производственным кухням и частным объектам
              поддерживать тягу, чистоту и пожарную безопасность инженерных систем.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                Рассчитать стоимость
                <ArrowRight size={19} />
              </a>
              <a className="secondary-action" href="#services">
                Смотреть услуги
              </a>
            </div>
            <div className="hero-metrics" aria-label="Преимущества">
              <span><ShieldCheck size={18} /> Фото до и после</span>
              <span><Clock3 size={18} /> Выезд по графику объекта</span>
              <span><BadgeCheck size={18} /> Аккуратная сдача работ</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Профессиональная чистка кухонной вентиляции">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=82"
              alt="Профессиональная кухня с вытяжной вентиляцией"
            />
            <div className="inspection-panel">
              <span className="panel-label">Обслуживание</span>
              <strong>Вытяжка, воздуховод, вентилятор</strong>
              <p>Комплексная чистка жироулавливающих зон и каналов.</p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Кому подходит сервис">
          <span>Рестораны</span>
          <span>Кафе</span>
          <span>Столовые</span>
          <span>Пекарни</span>
          <span>Частные дома</span>
          <span>Бани и камины</span>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Услуги</p>
            <h2>Чистим всю линию от видимой зоны до канала</h2>
            <p>
              Чем больше жира, сажи и пыли внутри системы, тем слабее тяга и выше
              риск возгорания. Мы приводим систему в рабочее состояние и показываем результат.
            </p>
            <div className="service-note">
              Все оборудование и химические средства, которые мы используем, безопасны
              и соответствуют строгим стандартам.
            </div>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article className="service-card" key={service.title}>
                  <Icon size={28} />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  {service.details && (
                    <details className="service-details">
                      <summary className="service-toggle">
                        <span className="show-more">Развернуть</span>
                        <span className="show-less">Скрыть</span>
                        <ChevronDown size={18} />
                      </summary>
                      <div className="service-details-body">
                        <ul>
                          {service.details.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="split-section" id="objects">
          <div>
            <p className="eyebrow">Для кого</p>
            <h2>Сервис для объектов, где вентиляция работает каждый день</h2>
            <p>
              Берем коммерческие кухни с плотной загрузкой и частные системы, где
              важно убрать сажу, запахи и засоры без лишнего шума и грязи.
            </p>
          </div>

          <div className="object-list">
            {[
              ['HoReCa', 'рестораны, бары, кофейни, фуд-корты'],
              ['Производство', 'цеха, пекарни, столовые'],
              ['Частные объекты', 'дома, камины, бани'],
            ].map(([title, text]) => (
              <article key={title}>
                <Building2 size={23} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="evidence-section">
          <div className="evidence-media">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=82"
              alt="Чистое оборудование на кухне"
            />
          </div>
          <div className="evidence-copy">
            <p className="eyebrow">Контроль качества</p>
            <h2>Результат видно сразу</h2>
            <p>
              После чистки клиент получает понятную фиксацию работ: какие зоны очищены,
              что требует внимания и когда лучше планировать следующее обслуживание.
            </p>
            <div className="check-list">
              {advantages.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={20} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">Процесс</p>
            <h2>Понятный порядок работ без сюрпризов на объекте</h2>
          </div>

          <div className="timeline">
            {workflow.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section certificates-section" id="certificates">
          <div className="section-heading">
            <p className="eyebrow">Документы</p>
            <h2>Сертификаты и удостоверения компании</h2>
            <p>
              Подтверждаем подготовку специалистов и соблюдение требований безопасности
              для работ на коммерческих, производственных и частных объектах.
            </p>
          </div>

          <div className="certificates-grid">
            <article className="cert-card">
              <Award size={30} />
              <span>Сертификат</span>
              <h3>Безопасность и Охрана труда</h3>
            </article>

            <div className="credentials-list" aria-label="Удостоверения компании">
              {credentials.map((item) => (
                <article className="credential-card" key={item}>
                  <HardHat size={22} />
                  <div>
                    <span>Корочка</span>
                    <h3>{item}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contacts">
          <div>
            <p className="eyebrow">Заявка</p>
            <h2>Опишите объект, а мы подскажем объем работ и ориентир по цене</h2>
            <p>
              Для точного расчета отправьте фото вытяжки, фильтров, канала или дымохода.
              Ответим, что можно сделать сразу и что нужно осмотреть на месте.
            </p>
          </div>

          <div className="contact-box">
            <a href={`tel:${phone.replaceAll(' ', '')}`}>
              <Phone size={22} />
              <span>
                <small>Позвонить</small>
                {phone}
              </span>
            </a>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
              <Camera size={22} />
              <span>
                <small>Отправить фото в WhatsApp</small>
                wa.me/{whatsapp}
              </span>
            </a>
            <a href={`mailto:${email}`}>
              <Mail size={22} />
              <span>
                <small>Почта</small>
                {email}
              </span>
            </a>
            <div className="address">
              <MapPin size={22} />
              <span>
                <small>Город</small>
                Алматы, Казахстан
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 1REST.KZ</span>
        <span>Чистка вентиляции, дымоходов и кухонных вытяжек</span>
      </footer>
    </div>
  )
}

export default App
