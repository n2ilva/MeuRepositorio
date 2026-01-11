"use client";
import { useState, useEffect, useRef } from "react";
import PageContainer from "./PageContainer";
import "./contato.css";

interface Comando {
    input: string;
    output: string | React.ReactNode;
    isLink?: boolean;
    href?: string;
}

const comandosDisponiveis = [
    { cmd: "help", desc: "Lista todos os comandos disponíveis" },
    { cmd: "email", desc: "Exibe meu endereço de e-mail" },
    { cmd: "linkedin", desc: "Link para meu perfil LinkedIn" },
    { cmd: "github", desc: "Link para meu perfil GitHub" },
    { cmd: "whatsapp", desc: "Inicia uma conversa no WhatsApp" },
    { cmd: "location", desc: "Exibe minha localização" },
    { cmd: "all", desc: "Exibe todas as informações de contato" },
    { cmd: "clear", desc: "Limpa o terminal" },
];

const contatos = {
    email: {
        valor: "natanaelsantos_silva@outlook.com",
        link: "mailto:natanaelsantos_silva@outlook.com",
        icone: "bi-envelope-fill",
        cor: "#EA4335"
    },
    linkedin: {
        valor: "linkedin.com/in/natanael2ilva",
        link: "https://www.linkedin.com/in/natanael2ilva",
        icone: "bi-linkedin",
        cor: "#0A66C2"
    },
    github: {
        valor: "github.com/n2ilva",
        link: "https://github.com/n2ilva",
        icone: "bi-github",
        cor: "#ffffff"
    },
    whatsapp: {
        valor: "+55 62 99963-3100",
        link: "https://wa.me/5562999633100",
        icone: "bi-whatsapp",
        cor: "#25D366"
    },
    location: {
        valor: "Goiânia-GO, Brasil",
        link: "https://www.google.com/maps/place/Goiânia,+GO",
        icone: "bi-geo-alt-fill",
        cor: "#FF6B6B"
    }
};

export default function Contato() {
    const [historico, setHistorico] = useState<Comando[]>([]);
    const [inputAtual, setInputAtual] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Cursor piscando
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    // Auto-scroll para o final
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [historico]);

    // Mensagem inicial
    useEffect(() => {
        const mensagemInicial: Comando = {
            input: "",
            output: (
                <div className="welcome-message">
                    <pre className="ascii-art">
{`
  _   _       _                         _   ____  _ _            
 | \\ | | __ _| |_ __ _ _ __   __ _  ___| | / ___|(_) |_   ____ _ 
 |  \\| |/ _\` | __/ _\` | '_ \\ / _\` |/ _ \\ | \\___ \\| | \\ \\ / / _\` |
 | |\\  | (_| | || (_| | | | | (_| |  __/ |  ___) | | |\\ V / (_| |
 |_| \\_|\\__,_|\\__\\__,_|_| |_|\\__,_|\\___|_| |____/|_|_| \\_/ \\__,_|
`}
                    </pre>
                    <p className="welcome-text">
                        <span className="highlight">Desenvolvedor Full Stack</span> | Goiânia-GO, Brasil
                    </p>
                    <p className="welcome-hint">
                        Digite <span className="cmd-highlight">help</span> para ver os comandos disponíveis
                    </p>
                </div>
            )
        };
        setHistorico([mensagemInicial]);
    }, []);

    const processarComando = (cmd: string) => {
        const comando = cmd.toLowerCase().trim();
        let output: string | React.ReactNode = "";

        switch (comando) {
            case "help":
                output = (
                    <div className="help-output">
                        <p className="section-title">📋 Comandos disponíveis:</p>
                        <div className="commands-grid">
                            {comandosDisponiveis.map((c) => (
                                <div key={c.cmd} className="command-item">
                                    <span className="cmd-name">{c.cmd}</span>
                                    <span className="cmd-desc">{c.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
                break;

            case "email":
            case "linkedin":
            case "github":
            case "whatsapp":
            case "location":
                const info = contatos[comando as keyof typeof contatos];
                output = (
                    <div className="contact-output">
                        <a 
                            href={info.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-link"
                            style={{ "--contact-color": info.cor } as React.CSSProperties}
                        >
                            <i className={`bi ${info.icone}`}></i>
                            <span>{info.valor}</span>
                            <i className="bi bi-box-arrow-up-right arrow-icon"></i>
                        </a>
                    </div>
                );
                break;

            case "all":
                output = (
                    <div className="all-contacts">
                        <p className="section-title">📇 Todas as informações de contato:</p>
                        {Object.entries(contatos).map(([key, info]) => (
                            <a 
                                key={key}
                                href={info.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="contact-link"
                                style={{ "--contact-color": info.cor } as React.CSSProperties}
                            >
                                <i className={`bi ${info.icone}`}></i>
                                <span>{info.valor}</span>
                                <i className="bi bi-box-arrow-up-right arrow-icon"></i>
                            </a>
                        ))}
                    </div>
                );
                break;

            case "clear":
                setHistorico([]);
                setInputAtual("");
                return;

            case "":
                return;

            default:
                output = (
                    <div className="error-output">
                        <span className="error-text">
                            Comando não reconhecido: <span className="error-cmd">{cmd}</span>
                        </span>
                        <span className="error-hint">
                            Digite <span className="cmd-highlight">help</span> para ver os comandos disponíveis
                        </span>
                    </div>
                );
        }

        setHistorico(prev => [...prev, { input: cmd, output }]);
        setInputAtual("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            processarComando(inputAtual);
        }
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <PageContainer title="Contato">
            <p className="intro-text">
                Terminal interativo para acessar minhas informações de contato.
            </p>

            <div className="terminal-container" onClick={focusInput}>
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <span className="btn-close"></span>
                        <span className="btn-minimize"></span>
                        <span className="btn-maximize"></span>
                    </div>
                    <span className="terminal-title">natanael@portfolio:~</span>
                    <div className="terminal-spacer"></div>
                </div>

                <div className="terminal-body" ref={terminalRef}>
                    {historico.map((item, index) => (
                        <div key={index} className="terminal-entry">
                            {item.input && (
                                <div className="input-line">
                                    <span className="prompt">
                                        <span className="user">natanael</span>
                                        <span className="at">@</span>
                                        <span className="host">portfolio</span>
                                        <span className="colon">:</span>
                                        <span className="path">~</span>
                                        <span className="dollar">$</span>
                                    </span>
                                    <span className="command">{item.input}</span>
                                </div>
                            )}
                            <div className="output-line">{item.output}</div>
                        </div>
                    ))}

                    <div className="input-line current">
                        <span className="prompt">
                            <span className="user">natanael</span>
                            <span className="at">@</span>
                            <span className="host">portfolio</span>
                            <span className="colon">:</span>
                            <span className="path">~</span>
                            <span className="dollar">$</span>
                        </span>
                        <div className="input-wrapper">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputAtual}
                                onChange={(e) => setInputAtual(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="terminal-input"
                                autoFocus
                                spellCheck={false}
                            />
                            <span 
                                className={`cursor ${cursorVisible ? 'visible' : ''}`}
                                style={{ left: `${inputAtual.length * 9.6}px` }}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quick-links">
                <p className="quick-title">⚡ Acesso rápido:</p>
                <div className="quick-buttons">
                    {Object.entries(contatos).map(([key, info]) => (
                        <a
                            key={key}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="quick-btn"
                            style={{ "--btn-color": info.cor } as React.CSSProperties}
                            title={info.valor}
                        >
                            <i className={`bi ${info.icone}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
}
