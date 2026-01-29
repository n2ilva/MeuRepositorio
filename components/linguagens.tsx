"use client";
import { useState } from "react";
import PageContainer from "./PageContainer";
import "./linguagens.css";

interface Tecnologia {
    nome: string;
    icone: string;
    cor: string;
    descricao: string;
    categoria: "linguagem" | "framework" | "banco";
}

const tecnologias: Tecnologia[] = [
    {
        nome: "JavaScript",
        icone: "devicon-javascript-plain",
        cor: "#F7DF1E",
        descricao: "Linguagem de programação versátil, essencial para desenvolvimento web. Permite criar interatividade em páginas e aplicações modernas.",
        categoria: "linguagem"
    },
    {
        nome: "TypeScript",
        icone: "devicon-typescript-plain",
        cor: "#3178C6",
        descricao: "Superset do JavaScript que adiciona tipagem estática. Melhora a manutenibilidade e reduz erros em projetos grandes.",
        categoria: "linguagem"
    },
    {
        nome: "Node.js",
        icone: "devicon-nodejs-plain",
        cor: "#339933",
        descricao: "Runtime JavaScript para server-side. Permite criar APIs, servidores e aplicações backend de alta performance.",
        categoria: "framework"
    },
    {
        nome: "Next.js",
        icone: "devicon-nextjs-plain",
        cor: "#ffffff",
        descricao: "Framework React para produção. Oferece SSR, SSG, rotas automáticas e otimizações de performance.",
        categoria: "framework"
    },
    {
        nome: "React",
        icone: "devicon-react-original",
        cor: "#61DAFB",
        descricao: "Biblioteca JavaScript para construir interfaces de usuário. Componentes reutilizáveis e estado reativo.",
        categoria: "framework"
    },
    {
        nome: "React Native",
        icone: "devicon-react-original",
        cor: "#61DAFB",
        descricao: "Framework para desenvolvimento mobile nativo usando React. Uma base de código para iOS e Android.",
        categoria: "framework"
    },
    {
        nome: "Tailwind CSS",
        icone: "devicon-tailwindcss-plain",
        cor: "#06B6D4",
        descricao: "Framework completo para aplicações web enterprise. TypeScript nativo, injeção de dependências e arquitetura robusta.",
        categoria: "framework"
    },
    {
        nome: "Bootstrap",
        icone: "devicon-bootstrap-plain",
        cor: "#563D7C",
        descricao: "Framework para desenvolvimento web. Permite criar interfaces de usuário modernas e responsivas.",
        categoria: "framework"
    },
    {
        nome: "Firebase",
        icone: "devicon-firebase-plain",
        cor: "#FFCA28",
        descricao: "Plataforma do Google para desenvolvimento de aplicativos. Oferece autenticação, banco de dados em tempo real, storage e hospedagem.",
        categoria: "banco"
    },
    {
        nome: "Supabase",
        icone: "devicon-supabase-plain",
        cor: "#3ECF8E",
        descricao: "Alternativa open-source ao Firebase. PostgreSQL como backend, autenticação, storage e APIs em tempo real.",
        categoria: "banco"
    },
    {
        nome: "PostgreSQL",
        icone: "devicon-postgresql-plain",
        cor: "#336791",
        descricao: "Banco de dados relacional. Permite consultar, manipular e gerenciar dados estruturados.",
        categoria: "banco"
    },
    {
        nome: "MongoDB",
        icone: "devicon-mongodb-plain",
        cor: "#47A248",
        descricao: "Bancos de dados não-relacionais como MongoDB. Flexibilidade de esquema e alta escalabilidade para dados não estruturados.",
        categoria: "banco"
    },
    {
        nome: "MySQL",
        icone: "devicon-mysql-plain",
        cor: "#429756",
        descricao: "Banco de dados relacional. Permite consultar, manipular e gerenciar dados estruturados.",
        categoria: "banco"
    },
];

const categorias = {
    linguagem: { titulo: "Linguagens", icone: "bi-code-slash" },
    framework: { titulo: "Frameworks & Runtimes", icone: "bi-boxes" },
    banco: { titulo: "Banco de Dados", icone: "bi-database" }
};

export default function Linguagens() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const [clickedTech, setClickedTech] = useState<string | null>(null);

    const getTecnologiasPorCategoria = (categoria: Tecnologia["categoria"]) => {
        return tecnologias.filter(tech => tech.categoria === categoria);
    };

    const handleTechClick = (techNome: string) => {
        // Toggle para mobile: se já está clicado, desclica; senão, clica
        setClickedTech(clickedTech === techNome ? null : techNome);
    };

    // Verifica se a tech está ativa (por hover OU por clique)
    const isTechActive = (techNome: string) => {
        return hoveredTech === techNome || clickedTech === techNome;
    };

    return (
        <PageContainer title="Linguagens & Tecnologias">
            <p className="intro-text">
                Tecnologias que estou estudando há <strong>1 ano</strong> e possuo experiência prática em desenvolvimento.
            </p>

            {(Object.keys(categorias) as Array<keyof typeof categorias>).map((categoriaKey) => (
                <div key={categoriaKey} className="categoria-section">
                    <h2 className="categoria-titulo">
                        <i className={`bi ${categorias[categoriaKey].icone} me-2`}></i>
                        {categorias[categoriaKey].titulo}
                    </h2>
                    
                    <div className="tech-grid">
                        {getTecnologiasPorCategoria(categoriaKey).map((tech) => (
                            <div
                                key={tech.nome}
                                className={`tech-card ${isTechActive(tech.nome) ? 'active' : ''}`}
                                onClick={() => handleTechClick(tech.nome)}
                                onMouseEnter={() => setHoveredTech(tech.nome)}
                                onMouseLeave={() => setHoveredTech(null)}
                                style={{ '--tech-color': tech.cor } as React.CSSProperties}
                            >
                                <div className="tech-icon-wrapper">
                                    <i className={`${tech.icone} tech-icon`} style={{ color: tech.cor }}></i>
                                </div>
                                <h3 className="tech-nome">{tech.nome}</h3>
                                
                                {/* Tooltip para desktop (aparece acima) */}
                                <div className={`tech-tooltip ${isTechActive(tech.nome) ? 'visible' : ''}`}>
                                    <div className="tooltip-content">
                                        <div className="tooltip-header">
                                            <i className={`${tech.icone}`} style={{ color: tech.cor }}></i>
                                            <span>{tech.nome}</span>
                                        </div>
                                        <p>{tech.descricao}</p>
                                    </div>
                                </div>

                                {/* Descrição inline para mobile (aparece dentro do card) */}
                                <div className={`tech-description-mobile ${clickedTech === tech.nome ? 'visible' : ''}`}>
                                    <p>{tech.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </PageContainer>
    );
}
