import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BadgePercent,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Gift,
  HandCoins,
  Headphones,
  HousePlug,
  Landmark,
  PlayCircle,
  Router,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sun,
  WalletCards,
  Wifi,
  Zap,
} from 'lucide-react';
import happyCustomers from './assets/happy_customers.png';
import heroArt from './assets/hero.png';
import ultraBankLogo from './assets/ultra_bank.png';
import consorcioImage from './assets/consorcio.png';
import ultraClubImage from './assets/ultra_club.png';
import infinitasLogo from './assets/infinitas_possibilidades.png';

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Planos', href: '#planos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Contratar', href: '#contratacao' },
];

const heroHighlights = [
  { icon: ShieldCheck, label: 'Conta segura' },
  { icon: CreditCard, label: 'Cartão sem anuidade' },
  { icon: BadgePercent, label: 'Cashback e pontos' },
];

const quickLinks = [
  ['Conta digital', WalletCards],
  ['Ultra Móvel', Smartphone],
  ['Fibra e TV', Wifi],
  ['Energia Solar', Sun],
  ['Consórcio', Car],
  ['Marketplace', ShoppingBag],
];

const accountFeatures = [
  { icon: Landmark, title: 'Conta digital', text: 'Pix, cartão, pagamentos e contratação de serviços em um só fluxo.' },
  { icon: CreditCard, title: 'Cartão Ultra', text: 'Compras, benefícios, controle pelo app e relacionamento com o Ultra Club.' },
  { icon: ShieldCheck, title: 'Segurança', text: 'Camadas de proteção, atendimento próximo e jornadas com dados protegidos.' },
];

const solutions = [
  {
    icon: Smartphone,
    eyebrow: 'Celular',
    title: 'Ultra Móvel',
    text: 'Planos com internet, apps inclusos, chip grátis e gestão no app.',
  },
  {
    icon: Wifi,
    eyebrow: 'Casa',
    title: 'Fibra + TV',
    text: 'Conectividade estável e entretenimento para trabalho, estudo e família.',
  },
  {
    icon: Sun,
    eyebrow: 'Economia',
    title: 'Energia Solar',
    text: 'Modelo por assinatura para reduzir a conta de luz sem instalar painéis.',
  },
  {
    icon: Car,
    eyebrow: 'Planejamento',
    title: 'Consórcio',
    text: 'Carro, moto, imóvel ou serviço com simulação online e acompanhamento simples.',
  },
];

const extraServices = [
  { icon: ShoppingBag, title: 'Marketplace', text: 'Ofertas, orçamentos e compras com vantagens para clientes Ultra.' },
  { icon: Gift, title: 'Ultra Club', text: 'Pontos, cashback e benefícios que crescem com o uso dos serviços.' },
  { icon: HousePlug, title: 'Casa inteligente', text: 'Automação e serviços conectados para simplificar a rotina.' },
  { icon: PlayCircle, title: 'Streaming', text: 'Entretenimento e combos digitais para deixar o pacote mais completo.' },
];

const plans = [
  {
    badge: 'Entrada',
    title: '20GB',
    price: '39',
    cents: ',90',
    note: 'No 1º mês. Após, R$ 49,90',
    apps: ['WhatsApp', 'Redes sociais'],
  },
  {
    badge: 'Mais escolhido',
    title: '50GB',
    price: '59',
    cents: ',90',
    note: 'No 1º mês. Após, R$ 79,90',
    apps: ['WhatsApp', 'Streaming'],
    featured: true,
  },
  {
    badge: 'Completo',
    title: '100GB',
    price: '89',
    cents: ',90',
    note: 'Por 3 meses. Após, R$ 109,90',
    apps: ['WhatsApp', 'Streaming', '100GB Google One'],
  },
  {
    badge: 'Família',
    title: '200GB',
    price: '129',
    cents: ',90',
    note: 'Por 3 meses. Após, R$ 149,90',
    apps: ['WhatsApp', 'Streaming', '200GB Google One'],
  },
];

const benefitStories = [
  {
    id: 'consorcio',
    image: consorcioImage,
    eyebrow: 'Consórcio Ultra',
    title: 'Planeje grandes conquistas com menos burocracia.',
    text: 'Simule online e acompanhe a jornada pelo atendimento digital da Ultra.',
    action: 'Simular consórcio',
    icon: CalendarCheck,
  },
  {
    id: 'clube',
    image: ultraClubImage,
    eyebrow: 'Ultra Club',
    title: 'Seu relacionamento vira vantagem de verdade.',
    text: 'Use conta, cartão e serviços para acumular pontos, cashback e benefícios.',
    action: 'Conhecer benefícios',
    icon: Gift,
  },
];

const aboutSections = [
  {
    title: 'Quem somos nós',
    paragraphs: [
      'O Ultra Bank nasceu para transformar a maneira como as pessoas se conectam com o universo financeiro, oferecendo muito mais do que uma conta digital. Somos um ecossistema moderno, tecnológico e acessível, criado para entregar praticidade, benefícios reais e infinitas possibilidades no dia a dia dos nossos clientes.',
      'Unimos inovação financeira, conectividade e soluções inteligentes em um único lugar. Com o Ultra Bank, nossos clientes têm acesso a serviços bancários digitais, pagamentos e transferências sem burocracia, além de benefícios exclusivos como internet em fibra, TV por assinatura, energia solar, clube de vantagens e outras soluções que facilitam a vida pessoal e empresarial.',
      'Nossa missão é democratizar o acesso à tecnologia, aos serviços financeiros e às oportunidades, criando uma experiência simples, segura e eficiente para quem busca crescer, economizar e viver conectado.',
    ],
  },
  {
    title: 'Nosso propósito',
    paragraphs: [
      'Levar inovação, praticidade e benefícios reais para o cotidiano das pessoas, conectando tecnologia, finanças e qualidade de vida em um único ecossistema.',
    ],
  },
  {
    title: 'Nossa visão',
    paragraphs: [
      'Ser reconhecido como um banco digital inovador, acessível e completo, capaz de transformar a experiência financeira através de infinitas possibilidades.',
    ],
  },
];

const values = [
  'Inovação constante',
  'Transparência e confiança',
  'Tecnologia acessível',
  'Atendimento humanizado',
  'Crescimento sustentável',
  'Conexão com o futuro',
];

const formOptions = {
  movel: {
    label: 'Plano Móvel',
    fieldLabel: 'Selecione o plano desejado',
    field: (
      <select>
        <option>Ultra 20GB - R$ 39,90/mês</option>
        <option>Ultra 50GB - R$ 59,90/mês</option>
        <option>Ultra 100GB - R$ 89,90/mês</option>
        <option>Ultra 200GB - R$ 129,90/mês</option>
      </select>
    ),
  },
  solar: {
    label: 'Energia Solar',
    fieldLabel: 'Valor médio da sua conta de luz',
    field: <input type="number" placeholder="R$ Ex: 250,00" />,
  },
  consorcio: {
    label: 'Consórcio',
    fieldLabel: 'Qual o seu objetivo?',
    field: (
      <select>
        <option>Comprar um imóvel</option>
        <option>Comprar um carro</option>
        <option>Comprar uma moto</option>
        <option>Contratar um serviço</option>
      </select>
    ),
  },
  tv_internet: {
    label: 'TV & Internet',
    fieldLabel: 'Digite seu CEP para consultarmos cobertura',
    field: <input type="text" placeholder="00000-000" />,
  },
};

function getCurrentPage() {
  return window.location.pathname === '/sobre' ? 'sobre' : 'home';
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function App() {
  const [formType, setFormType] = useState('movel');
  const [page, setPage] = useState(getCurrentPage);
  const selectedForm = formOptions[formType];
  const isAboutPage = page === 'sobre';

  useEffect(() => {
    const syncPage = () => setPage(getCurrentPage());
    window.addEventListener('popstate', syncPage);
    return () => window.removeEventListener('popstate', syncPage);
  }, []);

  return (
    <>
      <Header isAboutPage={isAboutPage} />

      {isAboutPage ? (
        <AboutPage />
      ) : (
        <HomePage formType={formType} selectedForm={selectedForm} setFormType={setFormType} />
      )}

      <Footer />
    </>
  );
}

function Header({ isAboutPage }) {
  return (
    <header className="site-header">
      <button className="brand-link" type="button" onClick={() => navigateTo('/')}>
        <img src={ultraBankLogo} alt="Ultra Bank" />
      </button>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a
            href={isAboutPage ? '/' : item.href}
            key={item.label}
            onClick={
              isAboutPage
                ? (event) => {
                    event.preventDefault();
                    navigateTo('/');
                  }
                : undefined
            }
          >
            {item.label}
          </a>
        ))}
        <button type="button" onClick={() => navigateTo('/sobre')}>
          Sobre nós
        </button>
      </nav>

      <div className="header-actions">
        <a href="#suporte">Atendimento</a>
        <a className="header-cta" href={isAboutPage ? '/' : '#contratacao'}>
          {isAboutPage ? 'Voltar para home' : 'Abrir conta'}
        </a>
      </div>
    </header>
  );
}

function HomePage({ formType, selectedForm, setFormType }) {
  return (
    <main>
      <section className="hero-section" id="top">
        <img className="hero-image" src={happyCustomers} alt="" aria-hidden="true" />
        <div className="hero-content">
          <span className="eyebrow">Ultra Bank</span>
          <h1>Banco digital e serviços essenciais no mesmo ecossistema.</h1>
          <p>
            Conta, cartão, internet, telefonia, energia solar, consórcio e benefícios conectados
            para simplificar sua rotina.
          </p>

          <form className="hero-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="cpf-hero">Abra sua conta pelo CPF</label>
            <div>
              <input id="cpf-hero" type="text" placeholder="Digite seu CPF" />
              <button type="submit">
                Começar
                <ArrowRight size={18} />
              </button>
            </div>
          </form>

          <div className="hero-actions-row">
            <a className="primary-button" href="#solucoes">
              Conhecer soluções
              <ArrowRight size={18} />
            </a>
            <button className="ghost-button" type="button" onClick={() => navigateTo('/sobre')}>
              Sobre o Ultra Bank
            </button>
          </div>
        </div>

        <div className="hero-footer" aria-label="Destaques do Ultra Bank">
          {heroHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <span key={item.label}>
                <Icon size={18} />
                {item.label}
              </span>
            );
          })}
        </div>
      </section>

      <section className="quick-nav" aria-label="Atalhos de produtos">
        {quickLinks.map(([label, Icon]) => (
          <a href="#solucoes" key={label}>
            <Icon size={20} />
            <span>{label}</span>
            <ChevronRight size={16} />
          </a>
        ))}
      </section>

      <section className="section account-section" id="solucoes">
        <div className="section-intro">
          <span className="eyebrow">Conta + ecossistema</span>
          <h2>Uma experiência financeira que acompanha o resto da sua vida.</h2>
          <p>
            A Ultra entra como banco digital, mas entrega uma camada completa de conveniência:
            finanças, conectividade, economia e relacionamento.
          </p>
        </div>

        <div className="account-layout">
          <div className="app-showcase">
            <img src={heroArt} alt="" aria-hidden="true" />
            <div className="app-panel">
              <span>Saldo disponível</span>
              <strong>R$ 4.820,40</strong>
              <small>benefícios ativos</small>
            </div>
            <div className="app-mini-grid" aria-label="Atalhos do app Ultra">
              <span>Pix</span>
              <span>Cartão</span>
              <span>Clube</span>
            </div>
          </div>

          <div className="feature-grid">
            {accountFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title}>
                  <Icon size={24} />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section solutions-section">
        <div className="section-intro compact">
          <span className="eyebrow">Soluções Ultra</span>
          <h2>Produtos organizados pelo que o cliente quer resolver.</h2>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article className="solution-card" key={solution.title}>
                <Icon size={26} />
                <span>{solution.eyebrow}</span>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <a href="#contratacao">
                  Contratar
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="extra-services">
          {extraServices.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title}>
                <Icon size={22} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section plans-section" id="planos">
        <div className="section-intro">
          <span className="eyebrow">Ultra Móvel</span>
          <h2>Planos claros, comparáveis e fáceis de contratar.</h2>
          <p>
            A telefonia vira parte do relacionamento financeiro, com gestão pelo ecossistema Ultra
            e benefícios que complementam a conta.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? 'featured' : ''}`} key={plan.title}>
              <span className="plan-badge">{plan.badge}</span>
              <h3>{plan.title}</h3>
              <div className="price-row">
                <small>R$</small>
                <strong>{plan.price}</strong>
                <span>{plan.cents}/mês</span>
              </div>
              <ul>
                {plan.apps.map((app) => (
                  <li key={app}>
                    <CheckCircle2 size={16} />
                    {app}
                  </li>
                ))}
              </ul>
              <p>{plan.note}</p>
              <a href="#contratacao">
                Escolher plano
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="section-intro compact">
          <span className="eyebrow">Benefícios e planejamento</span>
          <h2>Mais motivos para manter tudo dentro da Ultra.</h2>
        </div>

        <div className="benefit-grid">
          {benefitStories.map((story) => {
            const Icon = story.icon;

            return (
              <article className="benefit-card" id={story.id} key={story.id}>
                <img src={story.image} alt={story.eyebrow} />
                <div>
                  <span className="eyebrow">{story.eyebrow}</span>
                  <h3>{story.title}</h3>
                  <p>{story.text}</p>
                  <a href="#contratacao">
                    <Icon size={18} />
                    {story.action}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section about-teaser">
        <div>
          <span className="eyebrow">Sobre nós</span>
          <h2>Um banco digital criado para conectar tecnologia, finanças e qualidade de vida.</h2>
        </div>
        <button type="button" onClick={() => navigateTo('/sobre')}>
          Conhecer o Ultra Bank
          <ArrowRight size={18} />
        </button>
      </section>

      <section className="section contract-section" id="contratacao">
        <div className="contract-copy">
          <span className="eyebrow">Contratação online</span>
          <h2>Escolha o serviço e a Ultra continua o atendimento.</h2>
          <p>
            Envie seus dados iniciais para abertura de conta, plano móvel, energia solar, consórcio
            ou consulta de cobertura.
          </p>
          <div className="contract-checks">
            <span>
              <ShieldCheck size={18} />
              Dados protegidos
            </span>
            <span>
              <Headphones size={18} />
              Atendimento digital
            </span>
            <span>
              <Zap size={18} />
              Jornada rápida
            </span>
          </div>
        </div>

        <form className="lead-form" onSubmit={(event) => event.preventDefault()}>
          <div className="tabs" role="tablist" aria-label="Tipo de serviço">
            {Object.entries(formOptions).map(([key, option]) => (
              <button
                className={formType === key ? 'active' : ''}
                key={key}
                onClick={() => setFormType(key)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="form-row">
            <label htmlFor="name">Nome completo</label>
            <input id="name" type="text" placeholder="Como devemos chamar você?" required />
          </div>

          <div className="form-columns">
            <div className="form-row">
              <label htmlFor="document">CPF / CNPJ</label>
              <input id="document" type="text" placeholder="000.000.000-00" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" placeholder="seu@email.com" required />
            </div>
          </div>

          <div className="form-row">
            <label>{selectedForm.fieldLabel}</label>
            {selectedForm.field}
          </div>

          <button className="submit-button" type="submit">
            Enviar solicitação
            <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div>
          <span className="eyebrow">Sobre o Ultra Bank</span>
          <h1>Mais que uma conta digital: um ecossistema de possibilidades.</h1>
          <p>
            A Ultra conecta serviços financeiros, tecnologia, benefícios e soluções essenciais para
            simplificar a rotina de pessoas e empresas.
          </p>
        </div>
      </section>

      <section className="section about-grid">
        <div className="about-main">
          {aboutSections.map((section) => (
            <article className="about-card" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <aside className="about-side">
          <article className="about-card values-card">
            <h2>Nossos valores</h2>
            <ul>
              {values.map((value) => (
                <li key={value}>
                  <CheckCircle2 size={18} />
                  {value}
                </li>
              ))}
            </ul>
          </article>

          <article className="about-card promise-card">
            <span className="eyebrow">Nossa proposta</span>
            <h3>Democratizar acesso, simplificar decisões e aproximar pessoas da tecnologia.</h3>
            <div>
              <span>
                <HandCoins size={18} />
                Finanças sem burocracia
              </span>
              <span>
                <Router size={18} />
                Serviços conectados
              </span>
              <span>
                <Building2 size={18} />
                Crescimento sustentável
              </span>
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer id="suporte">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={ultraBankLogo} alt="Ultra Bank" />
          <p>
            Banco digital, conectividade, energia, consórcio e benefícios em uma experiência mais
            simples para o dia a dia.
          </p>
        </div>

        <div className="footer-links">
          <h4>Institucional</h4>
          <button type="button" onClick={() => navigateTo('/sobre')}>
            O Ultra Bank
          </button>
          <a href="#solucoes">Soluções</a>
          <a href="#planos">Planos</a>
          <a href="#beneficios">Benefícios</a>
        </div>

        <div className="footer-links">
          <h4>Atendimento</h4>
          <a href="#">
            <Headphones size={16} />
            Me ajuda
          </a>
          <a href="#">Fale com a gente</a>
          <a href="#">Ouvidoria</a>
          <a href="#">Dúvidas frequentes</a>
        </div>

        <div className="footer-links">
          <h4>Transparência</h4>
          <a href="#">Política de privacidade</a>
          <a href="#">Contratos e termos</a>
          <a href="#">Segurança</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <strong>Ultra Bank S.A.</strong> - CNPJ: 00.000.000/0001-00
          <br />
          Avenida Faria Lima, 1000 - São Paulo, SP - CEP 01234-567
        </p>
        <div>
          <span>Uma empresa do grupo:</span>
          <img src={infinitasLogo} alt="Infinitas Possibilidades" />
        </div>
      </div>
    </footer>
  );
}

export default App;
