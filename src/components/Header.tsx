import bannerImg from '../assets/illustrations/banner.png'

interface HeaderProps {
    results: boolean
}

export const Header = ({ results }: HeaderProps) => {
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto pt-10">
            {!results && (
                <>
                    <div className="flex flex-col gap-6 max-w-2xl w-full">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 flex-wrap">
                                <h1 className="text-4xl md:text-5xl font-black text-ink tracking-tight">Analizador de CV con IA</h1>
                                <span className="text-primary font-semibold text-sm flex gap-2 items-center bg-primary-soft rounded-lg px-3 py-1.5 border border-primary-soft/50 shadow-sm whitespace-nowrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                                        <path d="M0 0h48v48H0z" fill="none" />
                                        <path fill="currentColor" fillRule="evenodd" d="M29.032 15.093C28.178 14.682 27.181 14.33 26 14c1.18-.331 2.178-.682 3.032-1.093c1.822-.876 2.988-2.03 3.875-3.864C33.319 8.189 33.67 7.189 34 6c.33 1.189.68 2.19 1.093 3.043c.887 1.835 2.053 2.988 3.875 3.864c.853.411 1.851.762 3.032 1.093c-1.18.331-2.178.682-3.032 1.093c-1.822.877-2.988 2.03-3.875 3.864c-.412.854-.764 1.854-1.093 3.043c-.33-1.189-.68-2.19-1.093-3.043c-.887-1.835-2.053-2.988-3.875-3.864m3.69.146A9.5 9.5 0 0 0 31.173 14a9.5 9.5 0 0 0 1.55-1.24A9.5 9.5 0 0 0 34 11.18a9.4 9.4 0 0 0 1.278 1.582c.474.47.99.878 1.549 1.239a9.5 9.5 0 0 0-1.55 1.24A9.5 9.5 0 0 0 34 16.82a9.5 9.5 0 0 0-1.278-1.582M9.304 29.064A41 41 0 0 0 6 28a41 41 0 0 0 3.304-1.064c5.083-1.906 7.707-4.477 9.632-9.612A40 40 0 0 0 20 14a40 40 0 0 0 1.064 3.324c1.925 5.135 4.55 7.706 9.632 9.612c1.002.376 2.098.726 3.304 1.064a41 41 0 0 0-3.304 1.064c-5.083 1.906-7.707 4.477-9.632 9.612A40 40 0 0 0 20 42a40 40 0 0 0-1.064-3.324c-1.925-5.135-4.55-7.706-9.632-9.612m7.403 2.17c-1.343-1.334-2.916-2.37-4.765-3.234c1.849-.864 3.422-1.9 4.765-3.233c1.355-1.345 2.412-2.93 3.293-4.808c.88 1.878 1.938 3.463 3.293 4.808c1.343 1.333 2.916 2.369 4.765 3.233c-1.849.864-3.422 1.9-4.765 3.233c-1.355 1.345-2.412 2.93-3.293 4.808c-.88-1.878-1.938-3.463-3.293-4.807" clipRule="evenodd" />
                                    </svg>
                                    Potenciado por IA
                                </span>
                            </div>
                            <p className="text-lg text-muted-light font-medium leading-relaxed max-w-xl">
                                Adapta tu currículum a cualquier oferta de trabajo usando IA para identificar coincidencias y oportunidades de mejora.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-4">
                            <div className="flex gap-3 items-center">
                                <div className="bg-primary-soft rounded-xl p-2.5 text-primary shrink-0 shadow-sm border border-primary-soft/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                        <path d="M0 0h16v16H0z" fill="none" />
                                        <path fill="currentColor" d="M8 0q.552.001 1.09.074c.337.047.499.424.324.716L9.4.814a.52.52 0 0 1-.517.243A6.995 6.995 0 0 0 1.003 8c0 3.87 3.13 7 7 7a6.995 6.995 0 0 0 6.944-7.88a.52.52 0 0 1 .243-.517l.022-.014c.292-.175.67-.013.716.324q.075.532.075 1.09c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8z" />
                                        <path fill="currentColor" d="M8 4c.177 0 .253.211.128.336l-.592.592a.7.7 0 0 1-.312.173a3 3 0 0 0-2.22 2.9c0 1.66 1.34 3 3 3c1.39 0 2.56-.944 2.9-2.22a.7.7 0 0 1 .173-.312l.592-.592c.126-.126.337-.05.337.128c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4z" />
                                        <path fill="currentColor" d="M12.6.008a.5.5 0 0 1 .405.395l.435 2.17l2.17.435a.5.5 0 0 1 .159.919l-2.5 1.5a.5.5 0 0 1-.257.071h-1.79l-2.35 2.35a.5.5 0 0 1-.707-.707l2.35-2.35v-1.79l.005-.067a.5.5 0 0 1 .066-.19l1.5-2.5l.044-.062A.5.5 0 0 1 12.6.01z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-ink-soft font-semibold leading-tight">Detecta coincidencias<br className="hidden md:block" /> clave con la oferta</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="bg-primary-soft rounded-xl p-2.5 text-primary shrink-0 shadow-sm border border-primary-soft/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                                        <path d="M0 0h48v48H0z" fill="none" />
                                        <path fill="currentColor" fillRule="evenodd" d="M29.032 15.093C28.178 14.682 27.181 14.33 26 14c1.18-.331 2.178-.682 3.032-1.093c1.822-.876 2.988-2.03 3.875-3.864C33.319 8.189 33.67 7.189 34 6c.33 1.189.68 2.19 1.093 3.043c.887 1.835 2.053 2.988 3.875 3.864c.853.411 1.851.762 3.032 1.093c-1.18.331-2.178.682-3.032 1.093c-1.822.877-2.988 2.03-3.875 3.864c-.412.854-.764 1.854-1.093 3.043c-.33-1.189-.68-2.19-1.093-3.043c-.887-1.835-2.053-2.988-3.875-3.864m3.69.146A9.5 9.5 0 0 0 31.173 14a9.5 9.5 0 0 0 1.55-1.24A9.5 9.5 0 0 0 34 11.18a9.4 9.4 0 0 0 1.278 1.582c.474.47.99.878 1.549 1.239a9.5 9.5 0 0 0-1.55 1.24A9.5 9.5 0 0 0 34 16.82a9.5 9.5 0 0 0-1.278-1.582M9.304 29.064A41 41 0 0 0 6 28a41 41 0 0 0 3.304-1.064c5.083-1.906 7.707-4.477 9.632-9.612A40 40 0 0 0 20 14a40 40 0 0 0 1.064 3.324c1.925 5.135 4.55 7.706 9.632 9.612c1.002.376 2.098.726 3.304 1.064a41 41 0 0 0-3.304 1.064c-5.083 1.906-7.707 4.477-9.632 9.612A40 40 0 0 0 20 42a40 40 0 0 0-1.064-3.324c-1.925-5.135-4.55-7.706-9.632-9.612m7.403 2.17c-1.343-1.334-2.916-2.37-4.765-3.234c1.849-.864 3.422-1.9 4.765-3.233c1.355-1.345 2.412-2.93 3.293-4.808c.88 1.878 1.938 3.463 3.293 4.808c1.343 1.333 2.916 2.369 4.765 3.233c-1.849.864-3.422 1.9-4.765 3.233c-1.355 1.345-2.412 2.93-3.293 4.808c-.88-1.878-1.938-3.463-3.293-4.807" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-sm text-ink-soft font-semibold leading-tight">Recibe sugerencias<br className="hidden md:block" /> personalizadas</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="bg-primary-soft rounded-xl p-2.5 text-primary shrink-0 shadow-sm border border-primary-soft/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                                        <path d="M0 0h48v48H0z" fill="none" />
                                        <path fill="currentColor" fillRule="evenodd" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v1.172L36.172 8zm4 0l-5 5v2.172l6-6V9a1 1 0 0 0-1-1m1 4l-6 6v2.172l6-6zm0 5l-6 6v2.172l6-6zm0 5l-6 6v2.172l6-6zm0 5l-6 6v2.172l6-6zm0 5l-6 6v1c0 .32.15.605.384.788L40 34.172zm0 5l-3 3h2a1 1 0 0 0 1-1zM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm5-1h2q.081 0 .159.013L21 25.172V23zm-3 10.172V28l6-6v2.172zm6-1V27l-6 6v2.172zM21 39v-1l6-6v2.172l-5.616 5.616A1 1 0 0 1 21 39m3 1l3-3v2a1 1 0 0 1-1 1zM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 1-1h2.172L8 35.172zm0 5l5.707-5.707A1 1 0 0 1 14 33v1.172l-5.616 5.616A1 1 0 0 1 8 39zm3 2h2a1 1 0 0 0 1-1v-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-sm text-ink-soft font-semibold leading-tight">Mejora tu CV y aumenta tus oportunidades</p>
                            </div>
                        </div>
                    </div>

                    <div className="shrink-0 flex justify-center md:justify-end flex-1 w-full mt-8 lg:mt-0">
                        <img src={bannerImg} alt="CV Analyzer" className="max-w-137.5 w-full object-contain" style={{ maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 45%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 45%, transparent 80%)" }} />
                    </div>
                </>
            )}
            {results && (
                <div className="flex gap-16 w-full">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl md:text-5xl font-black text-ink tracking-tight">Resultados del análisis</h1>
                        <p className="text-lg text-muted-light font-medium leading-relaxed max-w-xl">Observa el nivel de coincidencia y las oportunidades de mejora detectadas por la IA.</p>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <button className="flex gap-3 items-center text-primary font-semibold bg-primary-soft rounded-xl py-3 px-6 cursor-pointer border border-primary-light hover:bg-primary hover:text-primary-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16m-1-4C2 6 6.39 2 11.807 2C16.208 2 19.758 4.335 21 8" />
                                    <path d="m7 17l-4-1l-1 4M17 7l4 1l1-4" />
                                </g>
                            </svg>

                            <span className='text-sm'>Analizar otra oferta</span>
                        </button>
                        <button className="flex gap-3 items-center text-primary-soft bg-primary rounded-xl py-3 px-6 cursor-pointer font-semibold hover:text-primary hover:bg-primary-soft hover:border hover:border-primary-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M11.625 15.513q-.175-.063-.325-.213l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062t-.375-.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z" />
                            </svg>

                            <span className='text-sm'>Descargar PDF</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
