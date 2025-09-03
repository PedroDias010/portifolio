import { Github, Linkedin, Youtube, Twitter, Code2, Palette, PenTool, Search, Phone, Mail, MapPin } from "lucide-react";
import path from "path";
import { title } from "process";

export const socialLinks = [
  {
    icon: Github, 
    href: "https://github.com/PedroDias010",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pedro-dias-4486a6298", 
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=pedrohdiasdev@gmail.com&su=Contato%20&body=Olá%20Pedro,%20vim%20através%20do%20seu%20portfólio!", // Lembre de colocar seu email real
    label: "E-mail"
  }
];


export const stats = [
  { number: "2", text: "Anos de Experiência" },
  { number: "3", text: "Projetos Concluídos" },
  { number: "12", text: "Tecnologias Dominadas"},

];



export const menuItems = [
  { title: "Home", path: "/" },
  { title: "Serviços", path: "/services" },
  { title: "Projetos", path: "/work" },
  { title: "Resumo", path: "/resume" },
  { title: "Contato", path: "/contact" }
  

]


export const services = [
  {
    number: "01",
    Icon: Code2,
    title: "Front-end",
    description: "Desenvolvedor Front-End especializado em criar interfaces modernas, responsivas e de alto desempenho. Transformo designs complexos em experiências web fluidas e interativas usando HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, Vue e Framer Motion. Meu foco é desenvolver aplicações responsivas (mobile-first), com animações suaves e otimizadas para SEO, entregando interfaces visualmente atraentes, funcionais e acessíveis.",   
    features: ["React", "Next.js", "Node.js", "Typescript", "Vue.js", "Frame-motion"]
  },

  {
    number: "02",
    Icon: Palette,
    title: "IU/UX Design",
    description: "Designer UI/UX focado em criar interfaces intuitivas e centradas no usuário, da pesquisa à prototipagem e design final. Atuo com pesquisa de usuário, wireframes, protótipos e design systems no Figma, Adobe XD e Sketch. Meu objetivo é unir usabilidade e estética para resolver problemas reais, criar conexões emocionais e entregar resultados eficazes.",
    features: ["Figma", "Prototyping", "Wireframing"]
  },

  {
    number: "03",
    Icon: PenTool,
    title: "Backend",
    description: "Desenvolvedor Back-End especializado na construção de APIs robustas, escaláveis e de alta performance. Utilizo JavaScript, TypeScript, Python e C# com frameworks como Node.js, Nest.js, Flask, FastAPI, .NET e Spring para desenvolver APIs RESTful, GraphQL e soluções em tempo real com WebSockets. Meu foco é criar sistemas bem estruturados, seguros, eficientes e prontos para escalar, garantindo alta qualidade e desempenho.",
    features: ["Python", "FastAPI", "C#", ".NET",".NET Core", "Postgree", "MongoDB", 
      
    ]
  },

];

export const ExperienceTabs = [

  {title: "Experiência", id: "experience"},
  {title: "Educação", id: "education"},
  {title: "Habilidades", id: "skills"},
  {title: "Sobre Mim", id: "about"},

];


export const resumeData = {
  experience: [
    {
      period: "2025 - Atual",
      title: "Desenvolvedor Full Stack",
      company: "2RP Net Data Driven Company.",
      description: "Desenvolvo aplicações em Python, C#, ASP.NET, .NET, FastAPI, React e Next.js, integrando IA (chatbot Gemini LLM) para suporte e onboarding. Crio telas com foco em UX/UI e acessibilidade, desenvolvo backend com segurança e documentação, e participo de migrações na nuvem, otimizando serviços e pipelines com boas práticas."
    },
    
  ],
  education: [
    {
      period: "2025 - 2026 (Cursando)",
      title: "Análise e Desenvolvimento de Sistemas (ADS) ",
      institution: "Faculdade de Tecnologia SENAI (Gaspar Ricardo Júnior)",
      description: "Tecnologo com foco em desenvolvimento web e sistemas distribuídos"
    },
    {
      period: "2025",
      title: "Implantação de Serviços em Nuvem - Google Cloud Foundations",
      institution: "Google Cloud Foundations",
      description: "Certificação em serviços cloud"
    },
    {
      period: "2025",
      title: "Gemini for Application Developers",
      institution: "Google",
      description: "Certificação em IA"
    },

    {
      period: "2025",
      title: "Certification to .NET",
      institution: "Dio.me",
      description: "Introdução ao .NET"
    }
  ],
  skills: [
    { name: "Frontend", items: ["React", "Next.js", "Node.js", "Typescript", "Vue.js", "Frame-motion"] },
    { name: "Backend", items: ["Python", "FastAPI", "C#", ".NET",".NET Core", "Postgree", "MongoDB"] },
    { name: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD"] },
    { name: "Soft Skills", items: ["Comunicação", "Liderança", "Trabalho em Equipe", "Organização"] }
  ],
  about: {
    description: "Especialista em engenharia de software, focado no desenvolvimento de soluções robustas e otimizadas. Domino o ciclo de vida completo de projetos, desde a concepção até a implantação, utilizando stacks modernos como [ C# , .NET , Node.js e Docker...] para garantir performance e confiabilidade.",
    interests: ["Open Source", "UI/UX Design", "Web Development", "Freelance", "Backend Developer" ]
  }
}

export const skillsData = [
  {
    name: "HTML5",
    icon: "/skills/html.svg"
  },
  {
    name: "CSS3",
    icon: "/skills/css.svg"
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.svg"
  },
  {
    name: "React",
    icon: "/skills/react.svg"
  },
  {
    name: "Next.js",
    icon: "/skills/next.svg"
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg"
  },
  {
    name: "Tailwind",
    icon: "/skills/tailwind.svg"
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg"
  },
  {
    name: "C#",
    icon: "/skills/c-sharp-logo.png"
  },
  {
    name: "Python",
    icon: "/skills/icons8-python.svg"
  },
  {
    name: "Postgree",
    icon: "/skills/postgresql-logo-svgrepo-com (1).svg"
  },
  {
    name: "Docker",
    icon: "/skills/brand-docker-svgrepo-com.svg"
  }
]

export const projects = [
  {
    number: "01",
    title: "LSD-Extrator de Dados",
    description: "Desenvolvimento de uma aplicação web robusta e escalável com FastAPI, integrada à API do Gemini para extrair automaticamente campos de notas fiscais. Suporta upload de arquivos JPG, PNG e PDF, identificando dados como número da nota, data e valor total. Ideal para automação financeira e gestão de documentos, com interface amigável, alta precisão e desempenho otimizado para grande escala.",
    image: "/work/extracao.png",
    technologies: ["Python", "fastAPI", "Google Gimini", "PostgreSQL"],
    demoLink: "https://github.com/PedroDias010/LSD.git",
    githubLink: "https://github.com/PedroDias010/LSD.git"
  },
  /*{
    number: "02",
    title: "TaskFlow",
    description: "Aplicativo de gestão de projetos e tarefas com funcionalidades de Kanban, timeline e colaboração em tempo real.",
    image: "/work/thumb2.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    demoLink: "https://taskflow.demo.com",
    githubLink: "https://github.com/seu-usuario/taskflow"
  },
  {
    number: "03",
    title: "CodeBlog",
    description: "Blog técnico com CMS headless, sistema de comentários, pesquisa avançada e analytics integrado.",
    image: "/work/thumb3.png",
    technologies: ["Next.js", "GraphQL", "Sanity.io", "MDX", "Vercel"],
    demoLink: "https://codeblog.demo.com",
    githubLink: "https://github.com/seu-usuario/codeblog"
  },
  {
    number: "04",
    title: "FitTracker",
    description: "Aplicativo mobile-first para acompanhamento de treinos e dieta, com gráficos de progresso e integração com Apple Health.",
    image: "/work/thumb4.png",
    technologies: ["React Native", "Expo", "Firebase", "Chart.js", "TypeScript"],
    demoLink: "https://fittracker.demo.com",
    githubLink: "https://github.com/seu-usuario/fittracker"
  },
  {
    number: "05",
    title: "AI Chat Assistant",
    description: "Chatbot inteligente com processamento de linguagem natural, integração com OpenAI GPT e interface conversacional.",
    image: "/work/thumb5.png",
    technologies: ["Python", "FastAPI", "OpenAI", "Redis", "React"],
    demoLink: "https://aichat.demo.com",
    githubLink: "https://github.com/seu-usuario/ai-chat"
  } */
]  

export const contactInfo = [
    {
    icon: <Phone className="w-6 h-6 text-emerald-400" />,
    title: "Phone",
    content: (
      <a 
        href="https://wa.me/5515997135106" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 transition-colors duration-200"
      >
        (+55) 15 99713-5106
      </a>
    ),
    bg: "bg-emerald-400/10"
  },
  {
    icon: <Mail className="w-6 h-6 text-emerald-400" />,
    title: "Email",
    content: (
      <a 
        href="mailto:pedrohdiasdev@gmail.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 transition-colors duration-200"
      >
        pedrohdiasdev@gmail.com
      </a>
    ),
    bg: "bg-emerald-400/10"
  }
]
