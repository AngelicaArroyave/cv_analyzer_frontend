import { Route, Routes } from "react-router"
import { MainLayout } from "../layouts/MainLayout"
import { AnalysisResultsPage } from "../pages/AnalysisResults/AnalysisResultsPage"
import { SuggestionsPage } from "../pages/Suggestions/SuggestionsPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/results" element={<AnalysisResultsPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
        </Routes>
    )
}