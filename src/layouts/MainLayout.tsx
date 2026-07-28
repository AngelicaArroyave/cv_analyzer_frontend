import { Header } from "../components/Header"
import { AnalyzerPage } from "../pages/Analyzer/AnalyzerPage"

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pb-10">
                <AnalyzerPage />
            </main>
        </div>
    )
}