import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { DisenoPer,DisenoVol,Fragmentacion,MedTaladros,Sismografia,Vod,Voladuras,Densidad } from '../pages';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src='' alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/voladuras" className={({ isActive }) => isActive ? 'nav-active' : ''}>Voladuras</NavLink>
                        </li>
                        <li>
                            <NavLink to="/disenoper" className={({ isActive }) => isActive ? 'nav-active' : ''}>Diseño de Perforacion</NavLink>
                        </li>
                        <li>
                            <NavLink to="/disenovol" className={({ isActive }) => isActive ? 'nav-active' : ''}>Diseño de Voladura</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sismografia" className={({ isActive }) => isActive ? 'nav-active' : ''}>Sismografia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vod" className={({ isActive }) => isActive ? 'nav-active' : ''}>VOD</NavLink>
                        </li>
                        <li>
                            <NavLink to="/densidad" className={({ isActive }) => isActive ? 'nav-active' : ''}>Densidad</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fragmentacion" className={({ isActive }) => isActive ? 'nav-active' : ''}>Fragmentacion</NavLink>
                        </li>
                        <li>
                            <NavLink to="/medtaladros" className={({ isActive }) => isActive ? 'nav-active' : ''}>Medicion de Taladros</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="voladuras" element={<Voladuras />} />
                    <Route path="disenoper" element={<DisenoPer/>} />
                    <Route path="disenovol" element={<DisenoVol/>} />
                    <Route path="sismografia" element={<Sismografia/>} />
                    <Route path="vod" element={<Vod/>} />
                    <Route path="densidad" element={<Densidad/>} />
                    <Route path="fragmentacion" element={<Fragmentacion/>} />
                    <Route path="medtaladros" element={<MedTaladros/>} />

                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}