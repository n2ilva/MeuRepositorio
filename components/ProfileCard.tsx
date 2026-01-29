import Image from "next/image";
import { profile } from "../config/site.config";

// Helper para corrigir caminho de imagens no GitHub Pages
const getImagePath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/MeuPortifolio' : '';
    return `${basePath}${path}`;
};

interface ProfileCardProps {
    onClick: (e: React.MouseEvent) => void;
}

export default function ProfileCard({ onClick }: ProfileCardProps) {
    return (
        <a
            href="/"
            className="d-flex flex-column align-items-center align-items-sm-start pb-4 mb-3 w-100 text-white text-decoration-none profile-section"
            onClick={onClick}
        >
            <div className="mb-3 d-flex align-items-center justify-content-center overflow-hidden profile-photo">
                <Image
                    src={getImagePath(profile.photo)}
                    alt={profile.photoAlt}
                    width={180}
                    height={180}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    priority
                />
            </div>
            <span className="fs-5 fw-bold d-none d-sm-inline profile-name">
                {profile.name}
            </span>
            <small className="d-none d-sm-inline profile-subtitle">
                {profile.role}
            </small>
        </a>
    );
}
