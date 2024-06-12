import { Routes, Route } from 'react-router-dom'
import { Navbar } from './pages/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Profile } from './pages/Profile/Profile'
import { Scanner } from './pages/Scanner/Scanner'

function App() {
    return (
        <div className="flex flex-col h-screen">
            <div className="grow overflow-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/scan" element={<Scanner />} />
                </Routes>
            </div>
            <Navbar />
        </div>
    )
}

export default App
