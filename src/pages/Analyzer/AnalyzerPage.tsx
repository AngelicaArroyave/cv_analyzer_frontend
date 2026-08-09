import { Link } from "react-router"
import { Header } from "../../components/Header"

export const AnalyzerPage = () => {
    return (
        <>
            <Header results={false} />
            <div className="flex flex-col gap-8 w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] max-w-[1100px] mx-auto p-8 md:p-12 lg:p-16 bg-surface rounded-[2rem] shadow-card border border-border-strong relative z-10 -mt-4">
                <div className="flex gap-6 md:gap-10">
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-surface font-bold bg-primary-light rounded-full w-12 h-12 flex items-center justify-center text-lg shrink-0">1</div>
                        <div className="bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                <path d="M0 0h512v512H0z" fill="none" />
                                <path fill="currentColor" d="m346.231 284.746l-90.192-90.192l-90.192 90.192l22.627 22.627l51.565-51.565V496h32V255.808l51.565 51.565z" />
                                <path fill="currentColor" d="M400 161.453V160c0-79.4-64.6-144-144-144S112 80.6 112 160v2.491A122.3 122.3 0 0 0 49.206 195.2A109.4 109.4 0 0 0 16 273.619c0 31.119 12.788 60.762 36.01 83.469C74.7 379.275 105.338 392 136.07 392H200v-32h-63.93C89.154 360 48 319.635 48 273.619c0-42.268 35.64-77.916 81.137-81.155L144 191.405V160a112 112 0 0 1 224 0v32.04l15.8.2c46.472.588 80.2 34.813 80.2 81.379C464 322.057 428.346 360 382.83 360H312v32h70.83a109.75 109.75 0 0 0 81.14-35.454c20.655-22.207 32.03-51.657 32.03-82.927c0-58.437-40.284-104.227-96-112.166" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-ink mb-1">Sube tu CV (Formato PDF)</h3>
                        <p className="text-muted mb-6 text-sm md:text-base">Tu información está segura y solo se usará para este análisis.</p>
                        <div className="flex gap-4 md:gap-10 items-center p-6 md:p-8 bg-primary-soft/50 rounded-xl border-2 border-primary-light border-dashed transition-colors hover:bg-primary-soft">
                            <button className="flex items-center gap-3 bg-primary-light hover:bg-primary text-white font-semibold text-md rounded-xl py-3 px-6 cursor-pointer transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20zm5-12.15L9.125 9.725q-.3.3-.712.288T7.7 9.7q-.275-.3-.288-.7t.288-.7l3.6-3.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L13 7.85V15q0 .425-.288.713T12 16t-.712-.288T11 15z" />
                                </svg>
                                <span>Seleccionar archivo</span>
                            </button>
                            <p className="text-muted-light font-medium truncate">Ningún archivo seleccionado</p>
                        </div>
                        <div className="pt-4 text-muted shrink-0 flex gap-2 items-center text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" fillRule="evenodd" d="M12.5 6v8.5h-9v-13H8v2.75C8 5.216 8.784 6 9.75 6zm-.121-1.5L9.5 1.621V4.25c0 .138.112.25.25.25zM2 1a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm3.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 11.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
                            </svg>
                            <p>Formato PDF • Máx. 10 MB</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border-strong my-2"></div>

                <div className="flex gap-6 md:gap-10">
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-surface font-bold bg-primary-light rounded-full w-12 h-12 flex items-center justify-center text-lg shrink-0">2</div>
                        <div className="bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" fillRule="evenodd" d="M12.5 6v8.5h-9v-13H8v2.75C8 5.216 8.784 6 9.75 6zm-.121-1.5L9.5 1.621V4.25c0 .138.112.25.25.25zM2 1a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm3.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 11.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-ink mb-1">Pega la descripción de la oferta laboral</h3>
                        <p className="text-muted mb-6 text-sm md:text-base">Incluye todos los detalles relevantes del puesto para un análisis más preciso.</p>
                        <textarea name="description" id="description" rows={5} className="w-full rounded-xl border-2 border-border-strong p-4 md:p-5 text-sm md:text-base text-ink-soft focus:outline-none focus:border-primary-light focus:ring-4 focus:ring-primary-soft transition-all resize-none bg-surface-soft/30" placeholder="Pega aquí el texto de la oferta de trabajo..." required></textarea>
                        <div className="pt-4 text-muted shrink-0 flex gap-2 items-center text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                <path d="M0 0h32v32H0z" fill="none" />
                                <path fill="currentColor" d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03q-.495.004-1 .064h-.03c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.24 5.24 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.8 7.8 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a7 7 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z" />
                            </svg>
                            <p>Consejo: Incluye responsabilidades, requisitos, habilidades y tecnologías mencionadas en la oferta.</p>
                        </div>
                    </div>
                </div>

                <Link to={`/results`} className="flex gap-3 items-center justify-center bg-primary-light hover:bg-primary transition-colors rounded-xl py-4 mt-4 text-white font-bold text-lg cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                        <path d="M0 0h48v48H0z" fill="none" />
                        <path fill="currentColor" fillRule="evenodd" d="M29.032 15.093C28.178 14.682 27.181 14.33 26 14c1.18-.331 2.178-.682 3.032-1.093c1.822-.876 2.988-2.03 3.875-3.864C33.319 8.189 33.67 7.189 34 6c.33 1.189.68 2.19 1.093 3.043c.887 1.835 2.053 2.988 3.875 3.864c.853.411 1.851.762 3.032 1.093c-1.18.331-2.178.682-3.032 1.093c-1.822.877-2.988 2.03-3.875 3.864c-.412.854-.764 1.854-1.093 3.043c-.33-1.189-.68-2.19-1.093-3.043c-.887-1.835-2.053-2.988-3.875-3.864m3.69.146A9.5 9.5 0 0 0 31.173 14a9.5 9.5 0 0 0 1.55-1.24A9.5 9.5 0 0 0 34 11.18a9.4 9.4 0 0 0 1.278 1.582c.474.47.99.878 1.549 1.239a9.5 9.5 0 0 0-1.55 1.24A9.5 9.5 0 0 0 34 16.82a9.5 9.5 0 0 0-1.278-1.582M9.304 29.064A41 41 0 0 0 6 28a41 41 0 0 0 3.304-1.064c5.083-1.906 7.707-4.477 9.632-9.612A40 40 0 0 0 20 14a40 40 0 0 0 1.064 3.324c1.925 5.135 4.55 7.706 9.632 9.612c1.002.376 2.098.726 3.304 1.064a41 41 0 0 0-3.304 1.064c-5.083 1.906-7.707 4.477-9.632 9.612A40 40 0 0 0 20 42a40 40 0 0 0-1.064-3.324c-1.925-5.135-4.55-7.706-9.632-9.612m7.403 2.17c-1.343-1.334-2.916-2.37-4.765-3.234c1.849-.864 3.422-1.9 4.765-3.233c1.355-1.345 2.412-2.93 3.293-4.808c.88 1.878 1.938 3.463 3.293 4.808c1.343 1.333 2.916 2.369 4.765 3.233c-1.849.864-3.422 1.9-4.765 3.233c-1.355 1.345-2.412 2.93-3.293 4.808c-.88-1.878-1.938-3.463-3.293-4.807" clipRule="evenodd" />
                    </svg>
                    <span>Analizar perfil</span>
                </Link>

                <div className="flex gap-3 justify-center items-center text-muted font-medium mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" />
                    </svg>
                    <span className="text-sm">Tu información es confidencial y no será compartida con terceros.</span>
                </div>
            </div>
        </>
    )
}