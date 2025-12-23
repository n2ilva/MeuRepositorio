import { MenuItem } from "../config/site.config";

interface NavMenuItemProps {
    item: MenuItem;
    isActive: boolean;
    onClick: (page: MenuItem["page"], e: React.MouseEvent) => void;
}

export default function NavMenuItem({ item, isActive, onClick }: NavMenuItemProps) {
    return (
        <li className="nav-item mb-2 nav-menu-item">
            <a
                href="#"
                className={`nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link ${isActive ? "active" : ""}`}
                onClick={(e) => onClick(item.page, e)}
            >
                <i className={`bi ${item.icon} fs-5`}></i>
                <span className="ms-2 d-none d-sm-inline">{item.label}</span>
            </a>
        </li>
    );
}
