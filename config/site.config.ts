// Configurações do Perfil
export const profile = {
    name: "Natanael Ramos",
    role: "Desenvolvedor Full Stack",
    photo: "/photo.jpg",
    photoAlt: "Foto de perfil - Natanael Ramos"
};

// Configurações do Menu de Navegação
export interface MenuItem {
    id: string;
    label: string;
    icon: string;
    page: "home" | "linguagens" | "projetos" | "contato";
}

export const menuItems: MenuItem[] = [
    {
        id: "home",
        label: "Início",
        icon: "bi-house-fill",
        page: "home"
    },
    {
        id: "linguagens",
        label: "Linguagens",
        icon: "bi-code-slash",
        page: "linguagens"
    },
    {
        id: "projetos",
        label: "Projetos",
        icon: "bi-folder-fill",
        page: "projetos"
    },
    {
        id: "contato",
        label: "Contato",
        icon: "bi-envelope-fill",
        page: "contato"
    }
];

// Configurações de Redes Sociais (para uso futuro)
export const socialLinks = {
    github: "https://github.com/n2ilva",
    linkedin: "https://www.linkedin.com/in/natanael2ilva",
    email: "natanaelsantos_silva@outlook.com"
};
