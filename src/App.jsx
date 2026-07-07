import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  Award,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  FileText,
  Gift,
  HandCoins,
  Headphones,
  Landmark,
  LockKeyhole,
  Mail,
  MonitorPlay,
  PlayCircle,
  PlusCircle,
  Router,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Signal,
  Smartphone,
  Sun,
  Tv,
  WalletCards,
  Wifi,
  Zap,
} from 'lucide-react';
import happyCustomers from './assets/happy_customers.png';
import ultraBankLogo from './assets/ultra_bank_logo.svg';
import badgeAppStore from './assets/badge_appstore_ptbr.svg';
import badgePlayStore from './assets/badge_playstore.png';
import ultraBankLogoFooter from './assets/ultra_bank_new.png';
import consorcioImage from './assets/consorcio.png';
import ultraClubImage from './assets/ultra_club.png';
import infinitasLogo from './assets/infinitas_possibilidades.png';
import outdoorLogo from './assets/infinity_banner.png';
import bgContaDigital from './assets/bg_conta_digital.png';
import bgUltraConnect from './assets/bg_ultra_connect.png';
import bgUltraExperience from './assets/bg_ultra_experience.png';
import bgEnergiaSolar from './assets/bg_energia_solar.png';
import bgConsorcio from './assets/bg_consorcio.png';
import bgSimMovel from './assets/bg_sim_movel.png';
import bgUltraClub from './assets/bg_ultra_club.png';
import bgUltraStream from './assets/bg_ultra_stream.png';

function InstagramIcon({ size = 24, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const serviceBg = {
  'conta-digital': bgContaDigital,
  'ultra-connect': bgUltraConnect,
  'ultra-experience': bgUltraExperience,
  'energia-solar': bgEnergiaSolar,
  'consorcio': bgConsorcio,
  'sim-movel': bgSimMovel,
  'ultra-club': bgUltraClub,
  'ultra-stream': bgUltraStream,
};

const navItems = [
  { label: 'Soluções', href: '#solucoes-ultra' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Contratar', href: '#contratacao' },
];

const quickLinks = [
  ['Conta digital', Landmark, '/conta-digital'],
  ['Ultra Connect', Wifi, '/ultra-connect'],
  ['TV na Fibra', Tv, '/ultra-experience'],
  ['Energia Solar', Sun, '/energia-solar'],
  ['Consórcio', Car, '/consorcio'],
  ['SIM Móvel', Smartphone, '/sim-movel'],
];

const accountFeatures = [
  { icon: Landmark, title: 'Conta digital', text: 'Pix, cartão, pagamentos e contratação de serviços em um só fluxo.' },
  { icon: CreditCard, title: 'Cartão Ultra', text: 'Compras, benefícios, controle pelo app e relacionamento com o Ultra Club.' },
  { icon: ShieldCheck, title: 'Segurança', text: 'Camadas de proteção, atendimento próximo e jornadas com dados protegidos.' },
];

const solutions = [
  {
    id: 'ultra-connect',
    icon: Wifi,
    eyebrow: 'Fibra',
    title: 'Ultra Connect',
    text: 'Conexão essencial com 700 Mb de internet na fibra e estabilidade para toda a casa.',
    path: '/ultra-connect',
    formKey: 'fibra_tv',
  },
  {
    id: 'fibra-tv',
    icon: Tv,
    eyebrow: 'Internet + entretenimento',
    title: 'Ultra Experience',
    text: 'Fibra 700 Mb, TV com 60 canais e canais como Sportv, Premiere e Telecine.',
    path: '/ultra-experience',
    formKey: 'fibra_tv',
  },
  {
    id: 'energia-solar',
    icon: Sun,
    eyebrow: 'Economia',
    title: 'Energia Solar',
    text: 'Modelo por assinatura para reduzir a conta de luz sem instalar painéis.',
    path: '/energia-solar',
    formKey: 'solar',
  },
  {
    id: 'consorcio',
    icon: Car,
    eyebrow: 'Planejamento',
    title: 'Consórcio',
    text: 'Carro, moto, imóvel ou serviço com simulação online e acompanhamento simples.',
    path: '/consorcio',
    formKey: 'consorcio',
  },
];

const extraServices = [
  { icon: Smartphone, title: 'SIM Móvel', text: 'Ofertas, orçamentos e compras com vantagens para clientes Ultra.', path: '/sim-movel', formKey: 'cobertura' },
  { icon: Award, title: 'Ultra Club', text: 'Pontos, cashback e benefícios que crescem com o uso dos serviços.', path: '/ultra-club', formKey: 'fibra_tv' },
  { icon: MonitorPlay, title: 'Ultra Stream', text: 'Plataforma de streaming com conteúdo exclusivo e canais ao vivo.', path: '/ultra-stream', formKey: 'fibra_tv' },
];

const plans = [
  {
    badge: 'Conexão essencial',
    title: 'Ultra Connect',
    summary: '700 Mb de internet na fibra para uma casa mais rápida e estável.',
    price: '89',
    cents: ',90',
    note: 'Taxa de serviço. Consulte disponibilidade técnica.',
    apps: ['Internet na fibra 700 Mb', 'Ideal para streaming e jogos', 'Conexão estável para toda a casa'],
  },
  {
    badge: 'Experiência completa',
    title: 'Ultra Experience',
    summary: 'Internet 700 Mb com entretenimento completo para toda a família.',
    price: '119',
    cents: ',90',
    note: 'Canais e serviços sujeitos a alteração sem aviso prévio.',
    apps: ['Internet na fibra 700 Mb', 'TV com 60 canais', 'Inclui Sportv, Premiere e Telecine'],
    featured: true,
  },
  {
    badge: 'Crescimento e visibilidade',
    title: 'Ultra Experience Negócios',
    summary: 'Fibra, TV e propaganda no canal próprio do Ultra Bank para dar visibilidade ao negócio.',
    price: '299',
    cents: ',90',
    note: 'Inclui propaganda no canal próprio do Ultra Bank. Consulte disponibilidade técnica.',
    apps: ['Internet na fibra 700 Mb', 'TV com 60 canais', 'Propaganda no canal próprio do Ultra Bank'],
  },
];

const whatsappNumber = '5573933005654';

function getWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const benefitStories = [
  {
    id: 'consorcio',
    image: consorcioImage,
    eyebrow: 'Consórcio Ultra',
    title: 'Planeje grandes conquistas com menos burocracia.',
    text: 'Simule online e acompanhe a jornada pelo atendimento digital do Ultra Bank.',
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

const transparencyLinks = [
  { label: 'Política de privacidade', path: '/politica-de-privacidade' },
  { label: 'Contratos e termos', path: '/contratos-e-termos' },
  { label: 'Segurança', path: '/seguranca' },
];

const supportLinks = [
  { label: 'Me ajuda', path: '/me-ajuda', icon: Headphones },
  { label: 'Fale com a gente', path: '/fale-com-a-gente' },
  { label: 'Ouvidoria', path: '/ouvidoria' },
  { label: 'Dúvidas frequentes', path: '/duvidas-frequentes' },
];

const transparencyPages = {
  privacy: {
    icon: FileText,
    eyebrow: 'Transparência',
    title: 'Política de privacidade',
    intro:
      'Entenda como o Ultra Bank trata dados pessoais nos canais digitais, nas solicitações de atendimento e na contratação de produtos e serviços.',
    sections: [
      {
        title: 'Dados que podemos tratar',
        paragraphs: [
          'Podemos tratar dados cadastrais, documentos, informações de contato, dados de navegação, registros de atendimento e informações necessárias para análise, contratação e suporte dos serviços solicitados.',
          'Quando o cliente contrata soluções financeiras, de conectividade, energia, consórcio ou benefícios, também podemos registrar informações relacionadas ao produto escolhido e ao histórico de relacionamento.',
        ],
      },
      {
        title: 'Como usamos as informações',
        paragraphs: [
          'Utilizamos os dados para identificar o cliente, responder solicitações, executar contratos, prevenir fraudes, cumprir obrigações legais e melhorar a experiência nos canais do Ultra Bank.',
          'Comunicações comerciais podem ser enviadas para apresentar produtos, vantagens e atualizações do ecossistema, respeitando as preferências de contato informadas pelo cliente.',
        ],
      },
      {
        title: 'Compartilhamento e proteção',
        paragraphs: [
          'O compartilhamento ocorre apenas quando necessário para operação dos serviços, cumprimento regulatório, prevenção de riscos, suporte técnico ou integração com parceiros envolvidos na jornada contratada.',
          'Aplicamos controles técnicos e administrativos para proteger os dados contra acessos indevidos, perdas, alterações e usos incompatíveis com as finalidades informadas.',
        ],
      },
      {
        title: 'Direitos do titular',
        paragraphs: [
          'O titular pode solicitar confirmação de tratamento, acesso, correção, portabilidade, revisão de decisões automatizadas, informações sobre compartilhamento e eliminação de dados, conforme a legislação aplicável.',
          'As solicitações são avaliadas pelos canais oficiais de atendimento e podem depender de validação de identidade para proteger o próprio titular.',
        ],
      },
    ],
    commitments: ['Tratamento com finalidade clara', 'Acesso restrito aos dados', 'Canais para solicitações LGPD'],
  },
  terms: {
    icon: Scale,
    eyebrow: 'Transparência',
    title: 'Contratos e termos',
    intro:
      'Consulte as condições gerais de uso dos canais digitais e os princípios que orientam a contratação dos produtos e serviços do ecossistema Ultra.',
    sections: [
      {
        title: 'Uso dos canais digitais',
        paragraphs: [
          'Os canais digitais do Ultra Bank devem ser utilizados com informações verdadeiras, dispositivos seguros e respeito às regras de cadastro, autenticação e atendimento.',
          'O cliente é responsável pela guarda de senhas, códigos de acesso e informações usadas para validar operações ou solicitações realizadas em seu nome.',
        ],
      },
      {
        title: 'Contratação de produtos',
        paragraphs: [
          'Cada produto pode possuir condições comerciais, prazos, elegibilidade, cobertura, disponibilidade regional e documentação própria, apresentada antes da contratação.',
          'Propostas, simulações e benefícios podem variar conforme análise cadastral, parceiro operacional, campanha vigente e regras do serviço escolhido.',
        ],
      },
      {
        title: 'Responsabilidades',
        paragraphs: [
          'A Ultra atua para manter informações claras, atendimento adequado e funcionamento contínuo dos canais, observadas manutenções, integrações de parceiros e eventos fora de controle operacional.',
          'O cliente deve acompanhar as comunicações oficiais, manter seus dados atualizados e comunicar rapidamente qualquer suspeita de acesso indevido.',
        ],
      },
      {
        title: 'Atualizações dos termos',
        paragraphs: [
          'Os termos podem ser atualizados para refletir mudanças legais, regulatórias, operacionais ou comerciais. Alterações relevantes serão comunicadas pelos canais disponíveis.',
          'Contratos específicos, propostas aceitas e documentos assinados prevalecem sobre esta página resumida sempre que tratarem do mesmo produto ou serviço.',
        ],
      },
    ],
    commitments: ['Condições antes da contratação', 'Regras por produto ou serviço', 'Comunicação de mudanças relevantes'],
  },
  security: {
    icon: LockKeyhole,
    eyebrow: 'Transparência',
    title: 'Segurança',
    intro:
      'Veja como o Ultra Bank orienta o uso seguro dos canais digitais e quais cuidados ajudam a proteger sua conta, seus dados e suas contratações.',
    sections: [
      {
        title: 'Proteção nos canais digitais',
        paragraphs: [
          'Utilizamos camadas de controle para autenticação, monitoramento de riscos, prevenção a fraudes e proteção de dados durante o acesso aos canais digitais.',
          'Operações sensíveis podem exigir validações adicionais para confirmar a identidade do cliente e reduzir tentativas de uso indevido.',
        ],
      },
      {
        title: 'Cuidados do cliente',
        paragraphs: [
          'Nunca compartilhe senhas, códigos, tokens, links de acesso ou fotos de documentos por canais não oficiais. O Ultra Bank não solicita dados sigilosos por mensagens inesperadas.',
          'Mantenha seus dispositivos atualizados, use senhas fortes e confira sempre se está acessando canais e contatos oficiais antes de informar dados pessoais.',
        ],
      },
      {
        title: 'Golpes e comunicações suspeitas',
        paragraphs: [
          'Desconfie de promessas urgentes, ofertas fora do padrão, pedidos de pagamento antecipado ou mensagens que pressionem você a agir sem conferir as informações.',
          'Ao identificar qualquer tentativa suspeita, interrompa o contato e procure imediatamente o atendimento oficial para orientação.',
        ],
      },
      {
        title: 'Suporte e bloqueios preventivos',
        paragraphs: [
          'Em caso de perda de dispositivo, suspeita de fraude ou acesso desconhecido, solicite suporte para análise, orientação e eventual bloqueio preventivo dos canais afetados.',
          'Quanto mais rápido o contato, maior a capacidade de reduzir riscos e preservar a segurança da sua experiência com o Ultra Bank.',
        ],
      },
    ],
    commitments: ['Validações em operações sensíveis', 'Monitoramento de acessos suspeitos', 'Orientação contra golpes digitais'],
  },
};

const supportPages = {
  help: {
    icon: Headphones,
    eyebrow: 'Atendimento',
    title: 'Me ajuda',
    intro:
      'Encontre orientações para resolver dúvidas de acesso, acompanhar solicitações e usar os serviços do Ultra Bank com mais tranquilidade.',
    sections: [
      {
        title: 'Acesso e conta',
        paragraphs: [
          'Se você precisa de ajuda para acessar sua conta, atualizar dados cadastrais ou entender uma etapa de validação, reúna seus documentos e procure os canais oficiais do Ultra Bank.',
          'Para proteger sua segurança, algumas solicitações podem exigir confirmação de identidade antes de qualquer alteração cadastral ou liberação de acesso.',
        ],
      },
      {
        title: 'Produtos e serviços',
        paragraphs: [
          'O atendimento também orienta sobre conta digital, cartão, planos móveis, internet, TV, energia solar, consórcio, marketplace e benefícios do Ultra Club.',
          'Ao entrar em contato, informe o serviço desejado e descreva o que aconteceu para que o direcionamento seja mais rápido e preciso.',
        ],
      },
      {
        title: 'Acompanhamento de solicitações',
        paragraphs: [
          'Pedidos de contratação, análise, suporte técnico ou atualização de dados podem ser acompanhados pelos canais digitais informados durante o atendimento.',
          'Guarde protocolos, mensagens e comprovantes relacionados à sua solicitação. Eles ajudam a localizar o histórico e acelerar novas interações.',
        ],
      },
      {
        title: 'Atendimento seguro',
        paragraphs: [
          'O Ultra Bank não solicita senhas, códigos de autenticação ou dados sigilosos por contatos inesperados. Desconfie de mensagens com urgência exagerada ou links desconhecidos.',
          'Quando tiver dúvida sobre a origem de um contato, interrompa a conversa e retome o atendimento pelos canais oficiais.',
        ],
      },
    ],
    commitments: ['Orientação para acesso e cadastro', 'Suporte por tipo de serviço', 'Atendimento com validação segura'],
  },
  contact: {
    icon: Smartphone,
    eyebrow: 'Atendimento',
    title: 'Fale com a gente',
    intro:
      'Use este canal para iniciar uma conversa com o Ultra Bank, tirar dúvidas comerciais, solicitar suporte ou receber orientação sobre produtos e serviços.',
    contacts: [
      {
        icon: Smartphone,
        label: 'WhatsApp',
        value: '(73) 93300-5654',
        href: 'https://wa.me/5573933005654',
      },
      {
        icon: Mail,
        label: 'E-mail',
        value: 'suporte@ultrabankinvestiments.com.br',
        href: 'mailto:suporte@ultrabankinvestiments.com.br',
      },
      {
        icon: InstagramIcon,
        label: 'Instagram',
        value: '@_ultrabank',
        href: 'https://www.instagram.com/_ultrabank?igsh=bDY5amR0eXFncHA3&utm_source=qr',
      },
    ],
    sections: [
      {
        title: 'Antes de entrar em contato',
        paragraphs: [
          'Tenha em mãos nome completo, CPF ou CNPJ, e-mail, telefone e informações sobre o serviço que você quer contratar ou sobre a solicitação em andamento.',
          'Se o assunto envolver uma compra, cobrança, contrato ou atendimento anterior, inclua o protocolo ou qualquer comprovante disponível.',
        ],
      },
      {
        title: 'Assuntos atendidos',
        paragraphs: [
          'Você pode buscar orientação sobre abertura de conta, planos móveis, fibra e TV, energia solar, consórcio, benefícios, marketplace e dúvidas institucionais.',
          'Demandas sensíveis, como suspeita de fraude ou acesso indevido, devem ser informadas com prioridade para que o time avalie medidas preventivas.',
        ],
      },
      {
        title: 'Retorno da equipe',
        paragraphs: [
          'As solicitações são analisadas conforme o tipo de assunto, complexidade e necessidade de validação de identidade ou consulta a parceiros operacionais.',
          'A Ultra poderá retornar pelos dados de contato cadastrados ou informados na solicitação, sempre evitando pedir informações sigilosas fora de canais seguros.',
        ],
      },
      {
        title: 'Depois do atendimento',
        paragraphs: [
          'Acompanhe o status da sua solicitação e mantenha seus dados atualizados para receber avisos, confirmações e orientações de continuidade.',
          'Se a resposta recebida não resolver o problema, registre o protocolo e consulte a Ouvidoria quando o caso atender aos critérios desse canal.',
        ],
      },
    ],
    commitments: ['Triagem por assunto', 'Retorno pelos canais informados', 'Registro do histórico de atendimento'],
  },
  ombudsman: {
    icon: ShieldCheck,
    eyebrow: 'Atendimento',
    title: 'Ouvidoria',
    intro:
      'A Ouvidoria é o canal para reavaliar manifestações que já passaram pelo atendimento inicial e ainda precisam de uma análise mais aprofundada.',
    sections: [
      {
        title: 'Quando acionar',
        paragraphs: [
          'Acione a Ouvidoria quando você já tiver buscado atendimento, recebido uma resposta ou aguardado o prazo informado, mas considerar que a solução não foi adequada.',
          'Esse canal é indicado para reclamações, reavaliações, apontamentos recorrentes e situações que exigem uma revisão independente do atendimento inicial.',
        ],
      },
      {
        title: 'O que informar',
        paragraphs: [
          'Informe seus dados de identificação, o produto ou serviço envolvido, o protocolo anterior e um resumo objetivo do que aconteceu.',
          'Também é útil anexar comprovantes, mensagens, datas e qualquer evidência que ajude a compreender o histórico da manifestação.',
        ],
      },
      {
        title: 'Análise da manifestação',
        paragraphs: [
          'A Ouvidoria avalia o histórico, consulta áreas responsáveis e busca uma resposta clara sobre o caso apresentado.',
          'Quando a manifestação envolver parceiros, integrações ou documentos adicionais, o retorno pode depender de validações complementares.',
        ],
      },
      {
        title: 'Compromisso de resposta',
        paragraphs: [
          'O objetivo da Ouvidoria é oferecer uma resposta conclusiva, transparente e compatível com as regras do serviço contratado.',
          'Guarde o número de protocolo e acompanhe as comunicações oficiais até o encerramento da análise.',
        ],
      },
    ],
    commitments: ['Revisão de casos já atendidos', 'Análise com histórico e protocolo', 'Resposta clara sobre a manifestação'],
  },
  faq: {
    icon: FileText,
    eyebrow: 'Atendimento',
    title: 'Dúvidas frequentes',
    intro:
      'Veja respostas rápidas para perguntas comuns sobre contratação, cadastro, segurança e uso dos produtos do ecossistema Ultra Bank.',
    sections: [
      {
        title: 'Como abrir minha conta?',
        paragraphs: [
          'Você pode iniciar a solicitação pelos formulários do site, informando seus dados básicos e o serviço de interesse.',
          'Após o envio, o Ultra Bank orienta as próximas etapas de validação, análise cadastral e ativação conforme o produto solicitado.',
        ],
      },
      {
        title: 'Quais serviços posso contratar?',
        paragraphs: [
          'O ecossistema reúne conta digital, cartão, planos móveis, fibra e TV, energia solar, consórcio, marketplace, benefícios e outras soluções conectadas.',
          'A disponibilidade pode variar conforme análise, região, cobertura, campanha comercial e regras de parceiros operacionais.',
        ],
      },
      {
        title: 'Como acompanhar uma solicitação?',
        paragraphs: [
          'Use os canais de atendimento e informe os dados cadastrados, o serviço solicitado e o protocolo recebido, quando houver.',
          'Se você ainda não recebeu protocolo, descreva a data do envio e os dados usados no formulário para facilitar a localização do atendimento.',
        ],
      },
      {
        title: 'Como me proteger de golpes?',
        paragraphs: [
          'Nunca compartilhe senhas, códigos, tokens ou links de acesso. Confirme a origem de mensagens antes de clicar, responder ou enviar documentos.',
          'Em caso de suspeita, pare a conversa e procure imediatamente os canais oficiais do Ultra Bank para receber orientação.',
        ],
      },
    ],
    commitments: ['Respostas rápidas por assunto', 'Orientação sobre contratação', 'Cuidados de segurança digital'],
  },
};

const servicePages = {
  'conta-digital': {
    icon: Landmark,
    heroVariant: 'banner',
    eyebrow: 'Conta Digital',
    title: 'Sua vida financeira em um só lugar.',
    subtitle:
      'Abra sua conta digital PF ou PJ com Pix, pagamentos, cartão Ultra e acesso completo ao ecossistema de serviços do Ultra Bank.',
    featuresTitle: 'Tudo que você precisa na sua conta',
    features: [
      { icon: Zap, label: 'Pix gratuito e ilimitado' },
      { icon: CreditCard, label: 'Cartão Ultra com benefícios' },
      { icon: ShieldCheck, label: 'Segurança em camadas' },
      { icon: Smartphone, label: 'Gestão completa pelo app' },
      { icon: Headphones, label: 'Atendimento digital humanizado' },
      { icon: HandCoins, label: 'Disponível para PF e PJ' },
    ],
    cta: 'Abrir minha conta',
    ctaHref: '/abrir-conta',
    whatsappMsg: 'Olá! Quero abrir minha conta digital no Ultra Bank. Podem me ajudar?',
  },
  'ultra-connect': {
    icon: Wifi,
    eyebrow: 'Internet na Fibra',
    title: 'Ultra Connect — Velocidade que transforma sua casa.',
    subtitle:
      '700 Mb de internet na fibra óptica com conexão estável, ideal para streaming, jogos online e home office.',
    featuresTitle: 'Conexão sem concessões',
    features: [
      { icon: Zap, label: '700 Mb de velocidade' },
      { icon: ShieldCheck, label: 'Conexão estável e segura' },
      { icon: Tv, label: 'Ideal para streaming e jogos' },
      { icon: Wifi, label: 'Wi-Fi para toda a casa' },
      { icon: Headphones, label: 'Suporte técnico dedicado' },
      { icon: CheckCircle2, label: 'Instalação profissional' },
    ],
    plans: [
      {
        title: 'Ultra Connect',
        price: 'R$ 89,90/mês',
        items: ['Internet na fibra 700 Mb', 'Conexão estável para toda a casa', 'Ideal para streaming e jogos'],
      },
    ],
    cta: 'Contratar Ultra Connect',
    whatsappMsg: 'Olá! Tenho interesse no plano Ultra Connect de 700 Mb. Gostaria de mais informações.',
  },
  'ultra-experience': {
    icon: Tv,
    eyebrow: 'Internet + Entretenimento',
    title: 'Ultra Experience — Fibra e TV em uma única assinatura.',
    subtitle:
      'Internet 700 Mb na fibra com TV por assinatura de 60 canais, incluindo Sportv, Premiere e Telecine — tudo em um só plano.',
    featuresTitle: 'A combinação perfeita para a família',
    features: [
      { icon: Wifi, label: '700 Mb de internet na fibra' },
      { icon: Tv, label: 'TV com 60 canais inclusos' },
      { icon: PlayCircle, label: 'Sportv, Premiere e Telecine' },
      { icon: ShieldCheck, label: 'Conexão estável e segura' },
      { icon: Headphones, label: 'Suporte técnico dedicado' },
      { icon: CheckCircle2, label: 'Instalação profissional' },
    ],
    plans: [
      {
        title: 'Ultra Experience',
        price: 'R$ 119,90/mês',
        items: ['Internet na fibra 700 Mb', 'TV com 60 canais', 'Inclui Sportv, Premiere e Telecine'],
      },
      {
        title: 'Ultra Experience Negócios',
        price: 'R$ 299,90/mês',
        items: ['Internet na fibra 700 Mb', 'TV com 60 canais', 'Propaganda no canal do Ultra Bank'],
      },
    ],
    cta: 'Contratar Ultra Experience',
    whatsappMsg: 'Olá! Tenho interesse no Ultra Experience (Fibra + TV). Gostaria de mais informações.',
  },
  'energia-solar': {
    icon: Sun,
    eyebrow: 'Energia Solar',
    title: 'Reduza sua conta de luz sem instalar nada.',
    subtitle:
      'Modelo por assinatura que garante economia mensal na conta de energia elétrica sem necessidade de instalar painéis solares.',
    featuresTitle: 'Economia limpa e sem complicação',
    features: [
      { icon: Zap, label: 'Sem instalação de painéis' },
      { icon: CheckCircle2, label: 'Desconto mensal na conta de luz' },
      { icon: ShieldCheck, label: 'Tecnologia limpa e sustentável' },
      { icon: Headphones, label: 'Suporte e acompanhamento' },
      { icon: HandCoins, label: 'Sem obras ou manutenção' },
      { icon: Smartphone, label: 'Controle pelo aplicativo' },
    ],
    cta: 'Consultar economia',
    whatsappMsg: 'Olá! Quero saber mais sobre o plano de Energia Solar do Ultra Bank. Podem me ajudar?',
  },
  consorcio: {
    icon: Car,
    eyebrow: 'Consórcio',
    title: 'Planeje sua grande conquista com o Ultra Bank.',
    subtitle:
      'Consórcio para carro, moto, imóvel ou serviço com simulação online, sem juros e acompanhamento pelo atendimento digital.',
    featuresTitle: 'Consórcio para cada objetivo',
    features: [
      { icon: Car, label: 'Carro e moto' },
      { icon: Building2, label: 'Imóveis' },
      { icon: CheckCircle2, label: 'Contratação de serviços' },
      { icon: HandCoins, label: 'Sem juros, apenas taxa de administração' },
      { icon: CalendarCheck, label: 'Simulação online' },
      { icon: Headphones, label: 'Acompanhamento digital' },
    ],
    cta: 'Simular consórcio',
    whatsappMsg: 'Olá! Quero simular um consórcio no Ultra Bank. Podem me ajudar?',
  },
  'sim-movel': {
    icon: Smartphone,
    eyebrow: 'SIM Móvel',
    title: 'Telefonia móvel integrada ao ecossistema Ultra.',
    subtitle:
      'Planos de celular com ofertas exclusivas para clientes Ultra Bank, cobertura nacional e controle completo pelo aplicativo.',
    featuresTitle: 'Conectado onde estiver',
    features: [
      { icon: Signal, label: 'Cobertura nacional' },
      { icon: Smartphone, label: 'Planos flexíveis por perfil' },
      { icon: ShieldCheck, label: 'Controle pelo app Ultra Bank' },
      { icon: CheckCircle2, label: 'Portabilidade simplificada' },
      { icon: Gift, label: 'Chip gratuito para clientes Ultra' },
      { icon: Zap, label: 'Ofertas exclusivas para o ecossistema' },
    ],
    cta: 'Consultar planos',
    whatsappMsg: 'Olá! Quero saber mais sobre o SIM Móvel do Ultra Bank. Podem me informar?',
  },
  'ultra-club': {
    icon: Award,
    eyebrow: 'Ultra Club',
    title: 'Seu relacionamento com o Ultra vira vantagem real.',
    subtitle:
      'Acumule pontos, cashback e benefícios exclusivos usando a conta digital, o cartão e os serviços do ecossistema Ultra Bank.',
    featuresTitle: 'Quanto mais você usa, mais você ganha',
    features: [
      { icon: Award, label: 'Acúmulo de pontos por uso' },
      { icon: HandCoins, label: 'Cashback em compras' },
      { icon: Gift, label: 'Benefícios e descontos exclusivos' },
      { icon: CheckCircle2, label: 'Categorias de relacionamento' },
      { icon: Smartphone, label: 'Tudo integrado ao app' },
      { icon: ShieldCheck, label: 'Programa com regras claras' },
    ],
    cta: 'Quero fazer parte',
    whatsappMsg: 'Olá! Quero saber mais sobre o Ultra Club e seus benefícios. Podem me informar?',
  },
  'ultra-stream': {
    icon: MonitorPlay,
    eyebrow: 'Ultra Stream',
    title: 'Entretenimento sem limite, direto na sua tela.',
    subtitle:
      'Plataforma de streaming do ecossistema Ultra Bank com conteúdo exclusivo, canais ao vivo e integração com o Ultra Experience.',
    featuresTitle: 'Uma nova forma de assistir',
    features: [
      { icon: PlayCircle, label: 'Conteúdo exclusivo Ultra' },
      { icon: Tv, label: 'Canais ao vivo incluídos' },
      { icon: MonitorPlay, label: 'Filmes, séries e documentários' },
      { icon: Smartphone, label: 'Compatível com todos os dispositivos' },
      { icon: ShieldCheck, label: 'Qualidade HD e 4K' },
      { icon: CheckCircle2, label: 'Integrado ao Ultra Experience' },
    ],
    cta: 'Quero conhecer o Ultra Stream',
    whatsappMsg: 'Olá! Quero saber mais sobre o Ultra Stream. Podem me informar?',
  },
};

const pageRoutes = {
  '/abrir-conta': 'download',
  '/sobre': 'sobre',
  '/me-ajuda': 'help',
  '/fale-com-a-gente': 'contact',
  '/ouvidoria': 'ombudsman',
  '/duvidas-frequentes': 'faq',
  '/politica-de-privacidade': 'privacy',
  '/contratos-e-termos': 'terms',
  '/seguranca': 'security',
  '/conta-digital': 'conta-digital',
  '/ultra-connect': 'ultra-connect',
  '/ultra-experience': 'ultra-experience',
  '/energia-solar': 'energia-solar',
  '/consorcio': 'consorcio',
  '/sim-movel': 'sim-movel',
  '/ultra-club': 'ultra-club',
  '/ultra-stream': 'ultra-stream',
};

const formOptions = {
  fibra_tv: {
    label: 'Fibra + TV',
    fieldLabel: 'Selecione o plano desejado',
    field: (
      <select name="requestDetail">
        <option>Ultra Connect - 700 Mb - R$ 89,90</option>
        <option>Ultra Experience - 700 Mb + TV 60 canais - R$ 119,90</option>
        <option>Ultra Experience Negócios - 700 Mb + TV + propaganda - R$ 299,90</option>
      </select>
    ),
  },
  solar: {
    label: 'Energia Solar',
    fieldLabel: 'Valor médio da sua conta de luz',
    field: <input name="requestDetail" type="number" placeholder="R$ Ex: 250,00" required />,
  },
  consorcio: {
    label: 'Consórcio',
    fieldLabel: 'Qual o seu objetivo?',
    field: (
      <select name="requestDetail">
        <option>Comprar um imóvel</option>
        <option>Comprar um carro</option>
        <option>Comprar uma moto</option>
        <option>Contratar um serviço</option>
      </select>
    ),
  },
  cobertura: {
    label: 'SIM Móvel',
    fieldLabel: 'Digite seu CEP para consultarmos cobertura',
    field: <input name="requestDetail" type="text" placeholder="00000-000" required />,
  },
};

function maskCpfCnpj(value) {
  const digits = value.replace(/\D/g, '').slice(0, 14);

  if (digits.length > 11) {
    return digits
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }

  return digits
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function isValidCpf(value) {
  const cpf = value.replace(/\D/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  const calculateDigit = (base) => {
    const sum = base.split('').reduce((total, digit, index) => total + Number(digit) * (base.length + 1 - index), 0);
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const firstDigit = calculateDigit(cpf.slice(0, 9));
  const secondDigit = calculateDigit(cpf.slice(0, 10));

  return firstDigit === Number(cpf[9]) && secondDigit === Number(cpf[10]);
}

function getCurrentPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return pageRoutes[path] ?? 'home';
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));

  const [, hash] = path.split('#');

  window.requestAnimationFrame(() => {
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function DownloadPage() {
  return (
    <main className="download-page">
      <div className="download-card">
        <span className="eyebrow">Ultra Bank</span>
        <h1>Abra sua conta pelo app</h1>
        <p>Escolha sua loja e baixe o Ultra Bank gratuitamente.</p>
        <div className="download-buttons">
          <a
            className="store-badge-link"
            href="https://apps.apple.com/br/app/ultrabank/id6737122931"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={badgeAppStore} alt="Baixar na App Store" />
          </a>
          <a
            className="store-badge-link"
            href="https://play.google.com/store/apps/details?id=br.com.acessobackoffice.ultrabank&hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={badgePlayStore} alt="Disponível no Google Play" />
          </a>
        </div>
        <button className="ghost-button" style={{marginTop: '24px'}} onClick={() => navigateTo('/')}>
          Voltar para o início
        </button>
      </div>
    </main>
  );
}

function MobileFab() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const mobileServiceLinks = [
    { label: 'Conta Digital', path: '/conta-digital', icon: Landmark },
    { label: 'Ultra Connect', path: '/ultra-connect', icon: Wifi },
    { label: 'Fibra e TV', path: '/ultra-experience', icon: Tv },
    { label: 'Energia Solar', path: '/energia-solar', icon: Sun },
    { label: 'Consórcio', path: '/consorcio', icon: Car },
    { label: 'SIM Móvel', path: '/sim-movel', icon: Smartphone },
    { label: 'Ultra Club', path: '/ultra-club', icon: Award },
    { label: 'Ultra Stream', path: '/ultra-stream', icon: MonitorPlay },
  ];

  const close = (path) => {
    setOpen(false);
    setServicesExpanded(false);
    if (path) navigateTo(path);
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="mobile-fab-wrap">
        <button
          className={`mobile-fab-btn ${open ? 'open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <>
          {open && <div className="mobile-overlay" onClick={() => close()} aria-hidden="true" />}
          <div className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`} aria-hidden={!open}>
            <div className="mobile-drawer-header">
          <img src={ultraBankLogo} alt="Ultra Bank" className="mobile-drawer-logo" />
          <button className="mobile-drawer-close" onClick={() => close()} aria-label="Fechar menu">
            ✕
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="mobile-drawer-link"
              onClick={(e) => { e.preventDefault(); close(`/${item.href}`); }}
            >
              {item.label}
            </a>
          ))}

          <div className="mobile-drawer-group">
            <button
              className="mobile-drawer-link mobile-drawer-link--group"
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
            >
              Serviços
              <ChevronRight
                size={16}
                className={`mobile-drawer-chevron ${servicesExpanded ? 'open' : ''}`}
              />
            </button>

            {servicesExpanded && (
              <div className="mobile-drawer-services">
                {mobileServiceLinks.map((link) => {
                  const SIcon = link.icon;
                  return (
                    <button
                      key={link.path}
                      type="button"
                      className="mobile-drawer-service-item"
                      onClick={() => close(link.path)}
                    >
                      <span className="mobile-drawer-service-icon">
                        <SIcon size={15} />
                      </span>
                      {link.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            className="mobile-drawer-link"
            type="button"
            onClick={() => close('/sobre')}
          >
            Sobre nós
          </button>

          <a
            className="mobile-drawer-link"
            href="/fale-com-a-gente"
            onClick={(e) => { e.preventDefault(); close('/fale-com-a-gente'); }}
          >
            Atendimento
          </a>
        </nav>

        <div className="mobile-drawer-ctas">
          <a
            className="mobile-drawer-cta mobile-drawer-cta--secondary"
            href="https://ultra.acontadigital.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Internet Banking
          </a>
          <button
            className="mobile-drawer-cta"
            type="button"
            onClick={() => close('/abrir-conta')}
          >
            Abrir conta
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      </>,
      document.body
    )}
    </>
  );
}

function App() {
  const [formType, setFormType] = useState('fibra_tv');
  const [page, setPage] = useState(getCurrentPage);
  const selectedForm = formOptions[formType];
  const isAboutPage = page === 'sobre';
  const isDownloadPage = page === 'download';
  const contentPage = supportPages[page] ?? transparencyPages[page];
  const servicePage = servicePages[page];
  const isInternalPage = page !== 'home';

  useEffect(() => {
    const syncPage = () => setPage(getCurrentPage());
    window.addEventListener('popstate', syncPage);
    return () => window.removeEventListener('popstate', syncPage);
  }, []);

  return (
    <>
      <Header isInternalPage={isInternalPage} />

      {isDownloadPage ? (
        <DownloadPage />
      ) : isAboutPage ? (
        <AboutPage />
      ) : servicePage ? (
        <ServicePage
          pageData={servicePage}
          bgImage={serviceBg[page]}
        />
      ) : contentPage ? (
        <TransparencyPage pageData={contentPage} />
      ) : (
        <HomePage formType={formType} selectedForm={selectedForm} setFormType={setFormType} />
      )}

      <Footer />
    </>
  );
}

function Header({ isInternalPage }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks = [
    { label: 'Conta Digital', path: '/conta-digital', icon: Landmark },
    { label: 'Ultra Connect', path: '/ultra-connect', icon: Wifi },
    { label: 'Fibra e TV', path: '/ultra-experience', icon: Tv },
    { label: 'Energia Solar', path: '/energia-solar', icon: Sun },
    { label: 'Consórcio', path: '/consorcio', icon: Car },
    { label: 'SIM Móvel', path: '/sim-movel', icon: Smartphone },
    { label: 'Ultra Club', path: '/ultra-club', icon: Award },
    { label: 'Ultra Stream', path: '/ultra-stream', icon: MonitorPlay },
  ];

  return (
    <header className="site-header">
      <button className="brand-link" type="button" onClick={() => navigateTo('/')}>
        <img src={ultraBankLogo} alt="Ultra Bank" />
      </button>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a
            href={isInternalPage ? `/${item.href}` : item.href}
            key={item.label}
            onClick={
              isInternalPage
                ? (event) => {
                    event.preventDefault();
                    navigateTo(`/${item.href}`);
                  }
                : undefined
            }
          >
            {item.label}
          </a>
        ))}

        <div
          className="nav-services-wrap"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button type="button" className="nav-services-trigger">
            Serviços
            <ChevronRight size={14} className={`nav-chevron ${servicesOpen ? 'open' : ''}`} />
          </button>

          {servicesOpen && (
            <div className="nav-services-dropdown" role="menu">
              {serviceLinks.map((link) => {
                const SIcon = link.icon;
                return (
                  <button
                    key={link.path}
                    type="button"
                    role="menuitem"
                    className="nav-services-item"
                    onClick={() => { setServicesOpen(false); navigateTo(link.path); }}
                  >
                    <span className="nav-services-icon">
                      <SIcon size={16} />
                    </span>
                    {link.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <button type="button" onClick={() => navigateTo('/sobre')}>
          Sobre nós
        </button>
      </nav>

      <div className="header-actions">
        <a
          href="/fale-com-a-gente"
          onClick={(event) => { event.preventDefault(); navigateTo('/fale-com-a-gente'); }}
        >
          Atendimento
        </a>
        <a
          className="header-cta header-cta--secondary"
          href="https://ultra.acontadigital.com.br/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Internet Banking
        </a>
        <a
          className="header-cta"
          href={isInternalPage ? '/' : '/abrir-conta'}
          onClick={(event) => {
            event.preventDefault();
            navigateTo(isInternalPage ? '/' : '/abrir-conta');
          }}
        >
          {isInternalPage ? 'Voltar para home' : 'Abrir conta'}
        </a>
      </div>

      <MobileFab />
    </header>
  );
}

function HomePage({ formType, selectedForm, setFormType }) {
  const [heroDocument, setHeroDocument] = useState('');
  const [leadDocument, setLeadDocument] = useState('');
  const heroDigits = heroDocument.replace(/\D/g, '');
  const heroCpfIsComplete = heroDigits.length === 11;
  const heroCpfIsValid = isValidCpf(heroDocument);
  const heroFeedback = heroCpfIsComplete
    ? heroCpfIsValid
      ? 'CPF válido. Vamos continuar com seu cadastro.'
      : 'Confira o CPF digitado para continuar.'
    : heroDigits.length > 0
      ? 'Continue digitando os 11 números do CPF.'
      : '';

  const handleHeroSubmit = (event) => {
    event.preventDefault();

    if (!heroCpfIsValid) {
      return;
    }

    setLeadDocument(heroDocument);
    setFormType('fibra_tv');
    document.getElementById('contratacao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLeadSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      `Olá! Quero solicitar atendimento para ${selectedForm.label}.`,
      `Nome: ${formData.get('name')}`,
      `CPF/CNPJ: ${formData.get('document')}`,
      `E-mail: ${formData.get('email')}`,
      `${selectedForm.fieldLabel}: ${formData.get('requestDetail')}`,
    ].join('\n');

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <main>
      <section className="hero-section" id="top">
        <img className="hero-image" src={happyCustomers} alt="" aria-hidden="true" />
        <div className="hero-content">
          <span className="eyebrow">Ultra Bank</span>
          <h1>Um Banco Digital com serviços essenciais em um só ecossistema.</h1>
          <p>
            Conta PJ ou PF, Cartão, Internet na Fibra, Tv na fibra, Telefonia Móvel, Consórcio e outros benefícios para simplificar sua rotina.
          </p>

          <form className="hero-form" onSubmit={handleHeroSubmit}>
            <label htmlFor="cpf-hero">Abra agora, sua conta</label>
            <div>
              <input
                id="cpf-hero"
                aria-describedby={heroFeedback ? 'cpf-hero-feedback' : undefined}
                aria-invalid={heroCpfIsComplete && !heroCpfIsValid}
                type="text"
                inputMode="numeric"
                maxLength={14}
                placeholder="Digite seu CPF"
                value={heroDocument}
                onChange={(event) => setHeroDocument(maskCpfCnpj(event.target.value).slice(0, 14))}
              />
              <button disabled={!heroCpfIsValid} type="submit">
                {heroCpfIsValid ? 'Continuar' : 'Começar'}
                <ArrowRight size={18} />
              </button>
            </div>
            {heroFeedback && (
              <p
                className={`hero-form-feedback ${heroCpfIsValid ? 'success' : 'error'}`}
                id="cpf-hero-feedback"
              >
                {heroFeedback}
              </p>
            )}
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
      </section>

      <section className="quick-nav" aria-label="Atalhos de produtos">
        {quickLinks.map(([label, Icon, path]) => (
          <a
            href={path}
            key={label}
            onClick={(e) => { e.preventDefault(); navigateTo(path); }}
          >
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
            O Ultra Bank entra como banco digital, mas entrega uma camada completa de conveniência:
            finanças, conectividade, economia e relacionamento.
          </p>
        </div>

        <div className="account-layout">
          <div className="app-showcase">
            <div className="app-screen" aria-label="Print do aplicativo Ultra Bank">
              <div className="app-screen-top">
                <div className="app-status">
                  <span>20:25</span>
                  <span>5G</span>
                </div>
                <strong className="app-logo-text">ultra bank</strong>
                <p>Olá, Ana Paula</p>
              </div>

              <div className="app-balance-card">
                <span>Saldo disponível</span>
                <strong>*****</strong>
                <a href="#contratacao">
                  Extrato
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="app-actions" aria-label="Atalhos do app Ultra">
                <span>
                  <Zap size={17} />
                  Pix
                </span>
                <span>
                  <CreditCard size={17} />
                  Pagar
                </span>
                <span>
                  <Smartphone size={17} />
                  Recarga
                </span>
              </div>

              <div className="app-service app-service-wide">
                <CreditCard size={22} />
                <span>Meus cartões</span>
                <ChevronRight size={20} />
              </div>

              <div className="app-service-grid">
                <div className="app-service">
                  <ArrowRight size={20} />
                  <span>Depositar</span>
                </div>
                <div className="app-service">
                  <ArrowRight size={20} />
                  <span>TED</span>
                </div>
                <div className="app-service">
                  <PlusCircle size={20} />
                  <span>Mais Serviços</span>
                </div>
              </div>

              <div className="app-banner">
                <span>A melhor conexão para você e sua família!</span>
              </div>

              <div className="app-service app-service-wide">
                <Landmark size={22} />
                <span>
                  Internet Banking
                  <small>Acesse sua conta digital através do seu navegador</small>
                </span>
                <ChevronRight size={20} />
              </div>
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

      <section className="section solutions-section" id="solucoes-ultra">
        <div className="section-intro compact">
          <span className="eyebrow">Soluções Ultra</span>
          <h2>Mais do que serviços. Experiências completas.</h2>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article className="solution-card" id={solution.id} key={solution.title}>
                <Icon size={26} />
                <span>{solution.eyebrow}</span>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <div className="solution-card-actions">
                  <button
                    className="solution-detail-btn"
                    type="button"
                    onClick={() => navigateTo(solution.path)}
                  >
                    Saiba mais
                    <ChevronRight size={14} />
                  </button>
                  <a
                    className="solution-hire-btn"
                    href="#contratacao"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormType(solution.formKey);
                      setTimeout(() => document.getElementById('contratacao')?.scrollIntoView({ behavior: 'smooth' }), 50);
                    }}
                  >
                    Contratar
                  </a>
                </div>
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
                <div className="solution-card-actions">
                  <button
                    className="solution-detail-btn"
                    type="button"
                    onClick={() => navigateTo(service.path)}
                  >
                    Saiba mais
                    <ChevronRight size={14} />
                  </button>
                  <a
                    className="solution-hire-btn"
                    href="#contratacao"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormType(service.formKey);
                      setTimeout(() => document.getElementById('contratacao')?.scrollIntoView({ behavior: 'smooth' }), 50);
                    }}
                  >
                    Contratar
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section plans-section" id="planos">
        <div className="section-intro">
          <span className="eyebrow">Ultra Fibra + TV</span>
          <h2>Conectividade e entretenimento em um só lugar.</h2>
          <p>
            Navegue com até 700 Mb de internet fibra, aproveite uma programação completa de TV e
            descubra soluções que mantêm você sempre conectado com a qualidade Ultra.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? 'featured' : ''}`} key={plan.title}>
              <div className="plan-card-body">
                <span className="plan-badge">{plan.badge}</span>
                <h3>{plan.title}</h3>
                <p className="plan-summary">{plan.summary}</p>
                <div className="price-row">
                  <small>R$</small>
                  <strong>{plan.price}</strong>
                  <span>{plan.cents}</span>
                </div>
                <ul>
                  {plan.apps.map((app) => (
                    <li key={app}>
                      <CheckCircle2 size={16} />
                      {app}
                    </li>
                  ))}
                </ul>
                <p className="plan-note">{plan.note}</p>
              </div>
              <a
                href={getWhatsAppUrl(
                  `Olá! Tenho interesse no plano ${plan.title} de R$ ${plan.price}${plan.cents}. Gostaria de mais informações.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Contratar plano
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="section-intro compact">
          <span className="eyebrow">Benefícios e planejamento</span>
          <h2>Planeje seu futuro. Aproveite cada conquista.</h2>
          <p>
            Do consórcio aos benefícios exclusivos do Ultra Club, encontre soluções para realizar
            objetivos, acumular vantagens e aproveitar uma experiência completa em um só lugar.
          </p>
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
          <h2>Seu próximo passo começa agora.</h2>
          <p>
            Abra sua conta, contrate internet, energia solar, consórcio ou outros serviços com
            atendimento digital rápido e seguro.
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

        <form className="lead-form" onSubmit={handleLeadSubmit}>
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
            <input id="name" name="name" type="text" placeholder="Como devemos chamar você?" required />
          </div>

          <div className="form-columns">
            <div className="form-row">
              <label htmlFor="document">CPF / CNPJ</label>
              <input
                id="document"
                name="document"
                type="text"
                inputMode="numeric"
                maxLength={18}
                placeholder="000.000.000-00"
                value={leadDocument}
                onChange={(event) => setLeadDocument(maskCpfCnpj(event.target.value))}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" placeholder="seu@email.com" required />
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
            O Ultra Bank conecta serviços financeiros, tecnologia, benefícios e soluções essenciais para
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

function TransparencyPage({ pageData }) {
  const Icon = pageData.icon;

  return (
    <main>
      <section className="about-hero transparency-hero">
        <div>
          <span className="eyebrow">{pageData.eyebrow}</span>
          <h1>{pageData.title}</h1>
          <p>{pageData.intro}</p>
          {pageData.contacts && (
            <div className="contact-links" aria-label="Canais de atendimento">
              {pageData.contacts.map((contact) => {
                const ContactIcon = contact.icon;

                return (
                  <a href={contact.href} key={contact.href} target="_blank" rel="noreferrer">
                    <ContactIcon size={18} />
                    <span>{contact.label}</span>
                    <strong>{contact.value}</strong>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="section about-grid transparency-grid">
        <div className="about-main">
          {pageData.sections.map((section) => (
            <article className="about-card transparency-card" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <aside className="about-side">
          <article className="about-card transparency-summary">
            <Icon size={28} />
            <h2>Compromissos</h2>
            <ul>
              {pageData.commitments.map((commitment) => (
                <li key={commitment}>
                  <CheckCircle2 size={18} />
                  {commitment}
                </li>
              ))}
            </ul>
          </article>

          <article className="about-card promise-card">
            <span className="eyebrow">Canais oficiais</span>
            <h3>Fale com o Ultra Bank antes de informar dados ou confirmar uma solicitação.</h3>
            <div>
              <span>
                <Headphones size={18} />
                Atendimento digital
              </span>
              <span>
                <ShieldCheck size={18} />
                Validação de identidade
              </span>
              <span>
                <Building2 size={18} />
                Ultra Negócios Financeiros e Empresariais LTDA
              </span>
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}

function ServicePage({ pageData, bgImage }) {
  const Icon = pageData.icon;

  return (
    <main>
      {pageData.heroVariant === 'banner' ? (
        <a
          className="service-hero-banner"
          href={pageData.ctaHref ?? getWhatsAppUrl(pageData.whatsappMsg)}
          target={pageData.ctaHref ? undefined : '_blank'}
          rel={pageData.ctaHref ? undefined : 'noreferrer'}
          onClick={pageData.ctaHref ? (e) => { e.preventDefault(); navigateTo(pageData.ctaHref); } : undefined}
        >
          <img src={bgImage} alt={pageData.title} />
        </a>
      ) : (
        <section className="service-hero">
          {bgImage && (
            <img
              className="service-hero-image"
              src={bgImage}
              alt=""
              aria-hidden="true"
            />
          )}
          <div className="service-hero-content">
            <div className="service-hero-icon">
              <Icon size={36} />
            </div>
            <span className="eyebrow">{pageData.eyebrow}</span>
            <h1>{pageData.title}</h1>
            <p>{pageData.subtitle}</p>
            <a
              href={pageData.ctaHref ?? getWhatsAppUrl(pageData.whatsappMsg)}
              target={pageData.ctaHref ? undefined : '_blank'}
              rel={pageData.ctaHref ? undefined : 'noreferrer'}
              className="service-hero-cta"
              onClick={pageData.ctaHref ? (e) => { e.preventDefault(); navigateTo(pageData.ctaHref); } : undefined}
            >
              {pageData.cta}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      )}

      <section className="section service-features-section">
        <div className="section-intro compact">
          <span className="eyebrow">{pageData.eyebrow}</span>
          <h2>{pageData.featuresTitle}</h2>
        </div>
        <div className="service-features-grid">
          {pageData.features.map((feature) => {
            const FIcon = feature.icon;
            return (
              <div key={feature.label} className="service-feature-card">
                <div className="service-feature-icon">
                  <FIcon size={20} />
                </div>
                <span>{feature.label}</span>
              </div>
            );
          })}
        </div>

        {pageData.plans && (
          <div className="service-plans-grid">
            {pageData.plans.map((plan) => (
              <div key={plan.title} className="service-plan-card">
                <h3>{plan.title}</h3>
                <strong className="service-plan-price">{plan.price}</strong>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppUrl(`Olá! Tenho interesse no plano ${plan.title}. Gostaria de mais informações.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contratar plano
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="service-cta-band">
        <div>
          <h2>Pronto para começar com o Ultra Bank?</h2>
          <p>Fale com nossa equipe e descubra como contratar de forma simples e rápida.</p>
        </div>
        <a
          href={getWhatsAppUrl(pageData.whatsappMsg)}
          target="_blank"
          rel="noreferrer"
          className="service-hero-cta service-hero-cta--dark"
        >
          <Headphones size={18} />
          Falar com especialista
        </a>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer id="suporte">
      <div className="footer-grid">
        <div className="footer-brand">
          <button className="footer-brand-logo" aria-label="Ultra Bank Infinitas Possibilidades" type="button" onClick={() => navigateTo('/')}>
            <span className="footer-brand-mark">
              <img src={ultraBankLogoFooter} alt="" />
            </span>
          </button>
          <p>
            Um banco digital com Infinitas Possibilidades em um só clique.
          </p>
        </div>

        <div className="footer-links">
          <h4>Institucional</h4>
          <button type="button" onClick={() => navigateTo('/sobre')}>
            O Ultra Bank
          </button>
          <a
            href="/#solucoes"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('/#solucoes');
            }}
          >
            Soluções
          </a>
          <a
            href="/#planos"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('/#planos');
            }}
          >
            Planos
          </a>
          <a
            href="/#beneficios"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('/#beneficios');
            }}
          >
            Benefícios
          </a>
        </div>

        <div className="footer-links">
          <h4>Serviços</h4>
          <button type="button" onClick={() => navigateTo('/conta-digital')}>Conta Digital</button>
          <button type="button" onClick={() => navigateTo('/ultra-connect')}>Ultra Connect</button>
          <button type="button" onClick={() => navigateTo('/ultra-experience')}>Fibra e TV</button>
          <button type="button" onClick={() => navigateTo('/energia-solar')}>Energia Solar</button>
          <button type="button" onClick={() => navigateTo('/consorcio')}>Consórcio</button>
          <button type="button" onClick={() => navigateTo('/sim-movel')}>SIM Móvel</button>
          <button type="button" onClick={() => navigateTo('/ultra-club')}>Ultra Club</button>
          <button type="button" onClick={() => navigateTo('/ultra-stream')}>Ultra Stream</button>
        </div>

        <div className="footer-links">
          <h4>Atendimento</h4>
          {supportLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                href={link.path}
                key={link.path}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(link.path);
                }}
              >
                {Icon ? <Icon size={16} /> : null}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="footer-links">
          <h4>Transparência</h4>
          {transparencyLinks.map((link) => (
            <a
              href={link.path}
              key={link.path}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(link.path);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <strong>Ultra Negócios Financeiros e Empresariais LTDA</strong> - CNPJ:
          53.635.395/0001-65
          <br />
          R. Sergipe, 216 - Jardim VitoriaItabuna - BA, 45605-460
        </p>
        <div className="footer-group">
          <div className="footer-logo-box">
            <img src={outdoorLogo} alt="Ultra Bank Infinitas Possibilidades" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
