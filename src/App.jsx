import React, { useState } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Wifi, 
  Sun, 
  Home, 
  PlayCircle,
  Car,
  Gift,
  ShoppingCart,
  Headphones,
  ArrowRight,
  Tv,
  MessageCircle,
  Cloud,
  Play
} from 'lucide-react';
import happyCustomers from './assets/happy_customers.png';
import ultraBankLogo from './assets/ultra_bank.png';
import consorcioLogo from './assets/consorcio.png';
import ultraClubLogo from './assets/ultra_club.png';
import infinitasLogo from './assets/infinitas_possibilidades.png';

function App() {
  const [formType, setFormType] = useState('movel');

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <img src={ultraBankLogo} alt="UltraBank" style={{ height: '32px' }} />
        </div>
        <div className="nav-links">
          <a href="#servicos">Para Você</a>
          <a href="#consorcio">Consórcio</a>
          <a href="#clube">Clube Ultra</a>
          <a href="#marketplace">Marketplace</a>
        </div>
        <div className="nav-buttons">
          <button className="btn btn-outline">Internet Banking</button>
          <button className="btn btn-primary">Abrir conta</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            O banco que simplifica a sua vida.
          </h1>
          <p className="hero-subtitle">
            Conta digital sem tarifa de manutenção, cartão de crédito sem anuidade, telefonia móvel, internet e muito mais. Tudo em um só lugar.
          </p>
          
          <div className="cpf-box">
            <input type="text" placeholder="Digite seu CPF" />
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Continuar <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={happyCustomers} alt="Pessoas sorrindo usando o celular" />
        </div>
      </section>

      {/* Serviços */}
      <section className="section bg-white" id="servicos">
        <div className="section-header">
          <h2 className="section-title">Muito além de conta digital</h2>
          <p className="section-subtitle">O primeiro banco do Brasil a integrar serviços essenciais para a sua casa e seu celular.</p>
        </div>
        
        <div className="grid-3">
          <div className="service-card">
            <div className="icon-wrapper"><Smartphone size={28} /></div>
            <h3>Telefonia Móvel</h3>
            <p>Planos com gigas acumulativos, WhatsApp ilimitado e cobertura em todo o Brasil. Gerencie tudo direto pelo app do banco.</p>
          </div>
          
          <div className="service-card">
            <div className="icon-wrapper"><Tv size={28} /></div>
            <h3>TV por Assinatura</h3>
            <p>Mais de 200 canais ao vivo com a melhor qualidade de imagem, sem precisar instalar antenas e sem fidelidade chata.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper"><Wifi size={28} /></div>
            <h3>Internet Fibra</h3>
            <p>Banda larga residencial e comercial com ultravelocidade e estabilidade garantida para você trabalhar e jogar.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper"><Sun size={28} /></div>
            <h3>Energia Solar</h3>
            <p>Energia renovável por assinatura. Economize até 20% na sua conta de luz todos os meses, sem precisar investir em painéis.</p>
          </div>

          <div className="service-card">
            <span className="badge">Em breve</span>
            <div className="icon-wrapper"><Home size={28} /></div>
            <h3>Casa Inteligente</h3>
            <p>Compre e gerencie equipamentos smart, câmeras e fechaduras digitais integradas ao seu app financeiro.</p>
          </div>

          <div className="service-card">
            <span className="badge">Lista de espera</span>
            <div className="icon-wrapper"><PlayCircle size={28} /></div>
            <h3>Streaming</h3>
            <p>Filmes, séries e transmissões de esportes em uma plataforma exclusiva de entretenimento para clientes Ultra.</p>
          </div>
        </div>
      </section>

      {/* Planos Móveis */}
      <section className="section bg-white" id="planos" style={{ paddingTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">Planos Ultra Móvel</h2>
          <p className="section-subtitle">Escolha o plano ideal para você com a melhor cobertura do Brasil.</p>
        </div>

        <div className="plans-grid">
          {/* Card 1 */}
          <div className="plan-card">
            <div className="plan-badge">SEMANA DA INTERNET</div>
            <div className="plan-header">
              <div className="plan-brand">Ultra-móvel</div>
              <div className="plan-title">20GB</div>
              <div className="plan-subtitle">com redes sociais</div>
            </div>
            
            <div className="plan-features">
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                <Wifi size={24} color="var(--brand-hover)" />
                Chip e Frete grátis
              </div>
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                Apps Inclusos
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                  <div style={{ background: '#25D366', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><MessageCircle size={16} /></div>
                  <div style={{ background: '#3b5998', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><Smartphone size={16} /></div>
                </div>
              </div>
            </div>

            <div className="plan-price-container">
              <div className="plan-price-amount">
                <span className="plan-price-currency">R$</span>
                39
                <div className="plan-price-cents-block">
                  <span className="plan-price-cents">,90</span>
                  <span className="plan-price-month">/MÊS</span>
                </div>
              </div>
              <div className="plan-price-note">NO 1º MÊS. APÓS, R$ 49,90</div>
            </div>
            
            <button className="plan-btn">Assine</button>
          </div>

          {/* Card 2 */}
          <div className="plan-card">
            <div className="plan-badge">OFERTA POR TEMPO LIMITADO</div>
            <div className="plan-header">
              <div className="plan-brand">Ultra-móvel</div>
              <div className="plan-title">50GB</div>
              <div className="plan-subtitle">com streaming</div>
            </div>
            
            <div className="plan-features">
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                <Wifi size={24} color="var(--brand-hover)" />
                Chip e Frete grátis
              </div>
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                Apps Inclusos
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                  <div style={{ background: '#25D366', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><MessageCircle size={16} /></div>
                  <div style={{ background: '#e50914', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><Play size={16} /></div>
                </div>
              </div>
            </div>

            <div className="plan-price-container">
              <div className="plan-price-amount">
                <span className="plan-price-currency">R$</span>
                59
                <div className="plan-price-cents-block">
                  <span className="plan-price-cents">,90</span>
                  <span className="plan-price-month">/MÊS</span>
                </div>
              </div>
              <div className="plan-price-note">NO 1º MÊS. APÓS, R$ 79,90</div>
            </div>
            
            <button className="plan-btn">Assine</button>
          </div>

          {/* Card 3 */}
          <div className="plan-card">
            <div className="plan-badge">SEMANA DA INTERNET</div>
            <div className="plan-header">
              <div className="plan-brand">Ultra-móvel</div>
              <div className="plan-title">100GB</div>
              <div className="plan-subtitle">com streaming</div>
            </div>
            
            <div className="plan-features">
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                <Wifi size={24} color="var(--brand-hover)" />
                Chip e Frete grátis
              </div>
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                Apps Inclusos
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                  <div style={{ background: '#25D366', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><MessageCircle size={16} /></div>
                  <div style={{ background: '#e50914', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><Play size={16} /></div>
                </div>
              </div>
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                Armazenamento na nuvem
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <Cloud size={16} /> <strong>100GB</strong> Google One
                </div>
              </div>
            </div>

            <div className="plan-price-container">
              <div className="plan-price-amount">
                <span className="plan-price-currency">R$</span>
                89
                <div className="plan-price-cents-block">
                  <span className="plan-price-cents">,90</span>
                  <span className="plan-price-month">/MÊS</span>
                </div>
              </div>
              <div className="plan-price-note">POR 3 MESES. APÓS, R$ 109,90</div>
            </div>
            
            <button className="plan-btn">Assine</button>
          </div>

          {/* Card 4 */}
          <div className="plan-card">
            <div className="plan-badge">ULTRA MULTI: NOVIDADE</div>
            <div className="plan-header">
              <div className="plan-brand">Ultra-móvel</div>
              <div className="plan-title">200GB</div>
              <div className="plan-subtitle">com streaming</div>
            </div>
            
            <div className="plan-features">
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                <Wifi size={24} color="var(--brand-hover)" />
                Chip e Frete grátis
              </div>
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                Apps Inclusos
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                  <div style={{ background: '#25D366', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><MessageCircle size={16} /></div>
                  <div style={{ background: '#e50914', borderRadius: '50%', padding: '4px', color: 'white', display: 'flex' }}><Play size={16} /></div>
                </div>
              </div>
              <div className="feature-divider">+</div>
              <div className="plan-feature-item">
                Armazenamento na nuvem
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <Cloud size={16} /> <strong>200GB</strong> Google One
                </div>
              </div>
            </div>

            <div className="plan-price-container">
              <div className="plan-price-amount">
                <span className="plan-price-currency">R$</span>
                129
                <div className="plan-price-cents-block">
                  <span className="plan-price-cents">,90</span>
                  <span className="plan-price-month">/MÊS</span>
                </div>
              </div>
              <div className="plan-price-note">POR 3 MESES. APÓS, R$ 149,90</div>
            </div>
            
            <button className="plan-btn">Assine</button>
          </div>
        </div>
      </section>

      {/* Opções de Consórcio */}
      <section className="section bg-gray" id="consorcio">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <img src={consorcioLogo} alt="Consórcio Infinitas Possibilidades" style={{ maxWidth: '100%', height: 'auto', maxHeight: '100px', margin: '0 auto 2rem', display: 'block' }} />
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Planeje o seu futuro sem pagar juros. Consórcio de carros, motos, imóveis e serviços com as menores taxas de administração do mercado. Simule agora.
          </p>
          <a href="#contratacao" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Simular Consórcio</a>
        </div>
      </section>

      {/* Programa de Fidelidade */}
      <section className="section bg-white" id="clube">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <img src={ultraClubLogo} alt="Ultra Club" style={{ maxWidth: '100%', height: 'auto', maxHeight: '120px', margin: '0 auto 2rem', display: 'block' }} />
          <p className="section-subtitle" style={{ marginBottom: '3rem', color: 'var(--text)' }}>
            O programa de benefícios que mais recompensa no Brasil. Ganhe pontos ao usar seu cartão de crédito, pagar boletos ou assinar nossos serviços. Troque por descontos ou milhas.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Conhecer Benefícios</button>
        </div>
      </section>

      {/* Contratação de Serviços / Formulários */}
      <section className="section bg-gray" id="contratacao">
        <div className="section-header">
          <h2 className="section-title">Contrate online</h2>
          <p className="section-subtitle">Escolha o serviço desejado abaixo e preencha o formulário para darmos andamento ao seu pedido.</p>
        </div>
        
        <div className="form-card">
          <div className="tabs">
            <button 
              onClick={() => setFormType('movel')} 
              className={`tab-btn ${formType === 'movel' ? 'active' : ''}`}
            >Plano Móvel</button>
            <button 
              onClick={() => setFormType('solar')} 
              className={`tab-btn ${formType === 'solar' ? 'active' : ''}`}
            >Energia Solar</button>
            <button 
              onClick={() => setFormType('consorcio')} 
              className={`tab-btn ${formType === 'consorcio' ? 'active' : ''}`}
            >Consórcio</button>
            <button 
              onClick={() => setFormType('tv_internet')} 
              className={`tab-btn ${formType === 'tv_internet' ? 'active' : ''}`}
            >TV & Internet</button>
          </div>

          <form>
            <div className="form-row">
              <label>Nome Completo</label>
              <input type="text" placeholder="Como devemos chamar você?" required />
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div className="form-row" style={{ flex: '1 1 200px' }}>
                <label>CPF / CNPJ</label>
                <input type="text" placeholder="000.000.000-00" required />
              </div>
              <div className="form-row" style={{ flex: '1 1 200px' }}>
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" required />
              </div>
            </div>

            {formType === 'movel' && (
              <div className="form-row">
                <label>Selecione o plano desejado</label>
                <select>
                  <option>Ultra 20GB - R$ 39,90/mês</option>
                  <option>Ultra 50GB - R$ 59,90/mês</option>
                  <option>Ultra Ilimitado - R$ 99,90/mês</option>
                </select>
              </div>
            )}

            {formType === 'solar' && (
              <div className="form-row">
                <label>Valor médio da sua conta de luz</label>
                <input type="number" placeholder="R$ Ex: 250,00" />
              </div>
            )}

            {formType === 'consorcio' && (
              <div className="form-row">
                <label>Qual o seu objetivo?</label>
                <select>
                  <option>Comprar um Imóvel</option>
                  <option>Comprar um Carro</option>
                  <option>Comprar uma Moto</option>
                  <option>Contratar um Serviço (Ex: Reforma)</option>
                </select>
              </div>
            )}

            {formType === 'tv_internet' && (
              <div className="form-row">
                <label>Digite seu CEP para consultarmos cobertura</label>
                <input type="text" placeholder="00000-000" />
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem' }}>
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* Marketplace */}
      <section className="section bg-white" id="marketplace">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <ShoppingCart size={48} color="var(--brand)" style={{ marginBottom: '1.5rem' }} />
          <h2 className="section-title">Ultra Marketplace</h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Acesse o shopping dentro do seu banco. Compre celulares, notebooks, eletrodomésticos ou solicite orçamentos exclusivos com cashback na sua conta.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary">Acessar Loja</button>
            <button className="btn btn-outline">Fazer um Orçamento</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="suporte">
        <div className="footer-grid">
          <div>
            <div className="nav-brand" style={{ marginBottom: '1.5rem' }}>
              <img src={ultraBankLogo} alt="UltraBank" style={{ height: '32px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ color: '#8c9baf', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Muito além de um banco. Conectando sua vida financeira com serviços essenciais de forma simples e transparente, feito para você e seu negócio.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Institucional</h4>
            <a href="#">O UltraBank</a>
            <a href="#">Carreiras</a>
            <a href="#">Investidores</a>
            <a href="#">Imprensa</a>
          </div>

          <div className="footer-links">
            <h4>Atendimento</h4>
            <a href="#"><Headphones size={16} style={{ verticalAlign: 'text-bottom', marginRight: '6px' }} /> Me Ajuda</a>
            <a href="#">Fale com a gente</a>
            <a href="#">Ouvidoria</a>
            <a href="#">Dúvidas Frequentes</a>
          </div>

          <div className="footer-links">
            <h4>Transparência</h4>
            <a href="#">Política de Privacidade</a>
            <a href="#">Contratos e Termos</a>
            <a href="#">Segurança</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <strong>Ultra Bank S.A.</strong> - CNPJ: 00.000.000/0001-00<br/>
            Avenida Faria Lima, 1000 - São Paulo, SP - CEP 01234-567
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '0.9rem', color: '#8c9baf' }}>Uma empresa do grupo:</span>
            <img src={infinitasLogo} alt="Infinitas Possibilidades" style={{ height: '35px', filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
