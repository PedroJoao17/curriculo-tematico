export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  status: string;
}

export const resumeProfile = {
  name: 'João Pedro Silva da Silva',
  title: 'Desenvolvedor Full Stack | Angular | Java Spring Boot | APIs REST',
  location: 'Manaus, AM',
  email: 'silvadasilvajoaopedro814@gmail.com',
  phone: '92 99609-2296 / 92 99142-6260',
  linkedin: '#',
  github: '#',
  objective:
    'Atuar como Desenvolvedor Full Stack Angular/Java, contribuindo com desenvolvimento e manutenção de aplicações web, APIs REST, interfaces responsivas, banco de dados, CI/CD, monitoramento e melhoria contínua.',
  summary: [
    'Profissional de TI com atuação full stack em Angular, TypeScript, Java, Spring Boot, APIs REST, Hibernate/JPA e banco de dados relacional.',
    'Experiência prática na construção e manutenção de APIs, interfaces web responsivas, consumo de serviços, organização de regras de negócio e correção de falhas.',
    'Vivência com Git/GitHub, GitHub Actions, Docker, n8n, GLPI, documentação técnica, troubleshooting e práticas de Kanban/Scrum.'
  ]
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Analista de TI',
    company: 'RMP ROMERO',
    period: '2025 até o momento',
    highlights: [
      'Desenvolvimento, manutenção e sustentação de soluções web internas para demandas corporativas.',
      'Construção e manutenção de APIs REST com Java, Spring Boot, POO, SOLID, Clean Code e MySQL.',
      'Criação de interfaces responsivas com Angular, TypeScript, HTML, CSS e JavaScript.',
      'Automação de build, validação e entrega com GitHub Actions, Git/GitHub e apoio a deploy com Docker.',
      'Monitoramento com n8n por endpoints das aplicações, envio de alertas e relatórios por e-mail.'
    ]
  },
  {
    role: 'Desenvolvedor PHP/Laravel',
    company: 'Projeto Freelancer',
    period: '5 meses',
    highlights: [
      'Apoio no desenvolvimento e manutenção de aplicação web com PHP/Laravel.',
      'Correção de problemas, ajustes de funcionalidades e organização de código para manutenção evolutiva.'
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'bi-window-sidebar',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsividade', 'Rotas', 'Services']
  },
  {
    title: 'Backend Java',
    icon: 'bi-cup-hot',
    items: ['Java', 'Spring Boot', 'APIs REST', 'Hibernate/JPA', 'POO', 'SOLID', 'Regras de negócio']
  },
  {
    title: 'Banco de dados',
    icon: 'bi-database',
    items: ['MySQL', 'SQL', 'Modelagem de dados', 'JPA/Hibernate', 'MongoDB fundamentos']
  },
  {
    title: 'DevOps e automação',
    icon: 'bi-diagram-3',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'n8n', 'Endpoints de saúde', 'Relatórios por e-mail']
  },
  {
    title: 'Processos e qualidade',
    icon: 'bi-kanban',
    items: ['Clean Code', 'Testes unitários', 'Documentação técnica', 'Troubleshooting', 'GLPI', 'Trello', 'Scrum']
  }
];

export const education: EducationItem[] = [
  {
    title: 'Engenharia de Software',
    institution: 'UNICESUMAR',
    status: 'Cursando, 2º período em 2026'
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UNIESBAM',
    status: 'Concluído em 2025'
  },
  {
    title: 'Inglês avançado',
    institution: 'ESBAM',
    status: '2025'
  },
  {
    title: 'Backend com Node.js e Express',
    institution: 'Samsung Ocean',
    status: '2024'
  },
  {
    title: 'Backend e Banco de Dados com MongoDB',
    institution: 'Samsung Ocean',
    status: '2024'
  },
  {
    title: 'Modelagem de Banco de Dados',
    institution: 'ESBAM',
    status: '2023'
  }
];

export const scrumBacklog = [
  'Sprint 0: criação do workspace Angular, configuração SCSS, rotas e instalação do GSAP.',
  'Sprint 1: criação da landing temática com hero, resumo profissional e seções principais.',
  'Sprint 2: componentização avançada e separação de dados do currículo.',
  'Sprint 3: animações com GSAP, scroll reveal e microinterações.',
  'Sprint 4: seção de projetos reais, deploy e otimização de performance.'
];
