"use client";
import { useEffect, useState } from "react";
import "./main.css";

// Configurações
import { menuItems, MenuItem } from "../../config/site.config";

// Componentes reutilizáveis
import ProfileCard from "../../components/ProfileCard";
import NavMenuItem from "../../components/NavMenuItem";

// Componentes de página
import Home from "../../components/home";
import Linguagens from "../../components/linguagens";
import Portifolio from "../../components/portifolio";
import Contato from "../../components/contato";

// Tipos das páginas disponíveis
type PageType = MenuItem["page"];

// Mapeamento de páginas para componentes
const pageComponents: Record<PageType, React.ComponentType> = {
    home: Home,
    linguagens: Linguagens,
    projetos: Portifolio,
    contato: Contato
};

export default function Main() {
    const [currentPage, setCurrentPage] = useState<PageType>("home");

    useEffect(() => {
        // Import bootstrap JS only on the client side
        const loadBootstrap = async () => {
            await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        };
        loadBootstrap();
    }, []);

    // Função para renderizar o conteúdo baseado na página atual
    const renderContent = () => {
        const PageComponent = pageComponents[currentPage] || pageComponents.home;
        return <PageComponent />;
    };

    // Função para navegar entre páginas
    const handleNavigation = (page: PageType, e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    return (
        <div className="container-fluid p-0 main-container">
            <div className="row g-0 flex-nowrap">
                {/* Sidebar / Menu Lateral */}
                <div className="col-auto col-md-3 col-xl-2 px-0 sidebar">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white sidebar-content">
                        {/* Perfil / Logo */}
                        <ProfileCard onClick={(e) => handleNavigation("home", e)} />

                        {/* Menu de Navegação */}
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 w-100" id="menu">
                            {menuItems.map((item) => (
                                <NavMenuItem
                                    key={item.id}
                                    item={item}
                                    isActive={currentPage === item.page}
                                    onClick={handleNavigation}
                                />
                            ))}
                            
                            {/* Botão Download para Mobile (aparece na navbar) */}
                            <li className="nav-item mb-2 nav-menu-item download-nav-item">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=17p9LjgR_Q38dc1SRoMMPRBsP5QC_8foO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link download-nav-link"
                                >
                                    <i className="bi bi-file-earmark-arrow-down fs-5"></i>
                                    <span className="ms-2 d-none d-sm-inline">Currículo</span>
                                </a>
                            </li>
                        </ul>

                        {/* Botão Download Currículo (Desktop) */}
                        <div className="mt-auto w-100 pt-3 pb-4 download-desktop">
                            <a
                                href="https://drive.google.com/uc?export=download&id=17p9LjgR_Q38dc1SRoMMPRBsP5QC_8foO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 download-btn"
                            >
                                <i className="bi bi-download"></i>
                                <span className="d-none d-sm-inline">Baixar Currículo</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Área de Conteúdo Principal */}
                <div className="col py-4 px-4 content-area">
                    <div className="rounded-4 p-4 content-card">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
