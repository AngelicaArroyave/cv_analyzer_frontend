import bannerImg from '../../assets/illustrations/banner.png'

export const AnalysisResultsPage = () => {
    return (
        <div className="flex flex-col gap-8 w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] max-w-275 mx-auto p-6 md:p-10 lg:p-14 relative z-10 -mt-4">
            <div className="flex lg:flex-row gap-8 lg:gap-10 items-center w-full p-8 md:p-10 lg:p-12 bg-surface rounded-lg shadow-card">
                <div aria-valuemin={0} aria-valuemax={100} aria-valuenow={25} role="progress" aria-label="Progreso del análisis" className="relative grid h-36 w-36 md:h-40 md:w-40 shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(#5B3DF5 0% ${25}%,#F0ECFF ${25}% 100%)` }}>
                    <div className="grid h-28 w-28 md:h-31 md:w-31 place-items-center rounded-full bg-surface">
                        <span className="text-3xl md:text-4xl text-primary font-bold">25%</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">Porcentaje de coincidencia</h3>
                    <p className="text-muted mb-2 mt-5 text-sm md:text-base">Este porcentaje indica qué tan alineado está tu perfil actual con lo que busca la empresa.</p>
                    <p className="text-muted mb-4 text-sm md:text-base">¡Revisa las sugerencias para mejorar tu perfil!</p>
                    <button className="flex gap-3 items-center text-primary font-semibold bg-primary-soft p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M2.425 17q0-.425.325-.75l5.325-5.325q.575-.575 1.425-.575t1.425.575L13.5 13.5l6.4-7.225q.275-.325.713-.325t.737.3q.275.275.288.662t-.263.688L14.9 14.9q-.575.65-1.425.688T12 15l-2.5-2.5l-5.25 5.25q-.325.325-.75.325t-.75-.325t-.325-.75" />
                        </svg>

                        <span>Baja coincidencia</span>
                    </button>
                </div>
                <div className="relative hidden lg:block shrink-0 ml-auto h-67 w-80 xl:w-100">
                    <img src={bannerImg} alt="CV Analyzer" className="absolute inset-0 h-full w-full max-w-none object-cover object-[60%_center] scale-[1.4]" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 92%, transparent 100%)" }} />
                </div>
            </div>
            <div>
                <div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50'>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                        </svg>

                        <div>
                            <h3 className='text-2xl font-bold'>Palabras clave faltantes</h3>
                            <p className='text-muted'>Considera agregar estos términos a tu CV si tienes la experiencia.</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-3 md:gap-4 mt-6 pl-10'>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Angular v14</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Frontend Engineer</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Analista Programador Angular</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Diseño técnico</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Arquitectura de componentes</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Código limpio</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Escalable</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Mantenible</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Patrones de diseño modernos</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Administración Pública (AAPP)</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Implementar aplicaciones web</span>
                        </div>
                        <div className='text-primary font-semibold flex gap-2.5 items-center px-5 py-2.5 bg-primary-soft/50 hover:bg-primary-soft transition-colors rounded-xl text-sm md:text-base border border-transparent shadow-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path d="M0 0h16v16H0z" fill="none" />
                                <path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6" />
                                <path fill="currentColor" d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5" />
                                <path fill="currentColor" d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5" />
                            </svg>
                            <span>Mantenimiento de aplicaciones web</span>
                        </div>
                    </div>
                </div>
                <div>Sugerencias de mejora</div>
            </div>
        </div>
    )
}
