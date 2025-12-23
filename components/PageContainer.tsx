interface PageContainerProps {
    title: string;
    children: React.ReactNode;
}

export default function PageContainer({ title, children }: PageContainerProps) {
    return (
        <div className="page-container">
            <h1 className="mb-4">{title}</h1>
            {children}
        </div>
    );
}
