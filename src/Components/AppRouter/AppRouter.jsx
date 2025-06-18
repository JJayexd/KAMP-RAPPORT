import { Router, Routes, Route } from 'react-router-dom' 
import { HomePage } from '../../Pages/HomePage.jsx'
import { RapportDetails } from '../RapportDetails/RapportDetails.jsx'
import { FilteredRapports } from '../FilteredRapports/FilteredRapports.jsx'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/rapport/:rapportID" element={<RapportDetails />} />
            <Route path="/kategori/:category" element={<FilteredRapports />} />
        </Routes>
    )
}