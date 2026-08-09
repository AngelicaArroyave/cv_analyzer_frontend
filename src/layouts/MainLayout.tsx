import { AnalyzerPage } from "../pages/Analyzer/AnalyzerPage"

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 pb-10">
                <AnalyzerPage />
            </main>
        </div>
    )
}