import { Link } from 'react-router'
import bannerImg from '../../assets/illustrations/banner.png'
import { Header } from '../../components/Header'

export const AnalysisResultsPage = () => {
    return (
        <>
            <Header results={true} />
            <div className="flex flex-col gap-8 w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] max-w-275 mx-auto relative z-10 -mt-4">
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
                    <div className='mt-10'>
                        <div className='flex gap-3 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 48 48" className='bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50'>
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="currentColor" fillRule="evenodd" d="M29.032 15.093C28.178 14.682 27.181 14.33 26 14c1.18-.331 2.178-.682 3.032-1.093c1.822-.876 2.988-2.03 3.875-3.864C33.319 8.189 33.67 7.189 34 6c.33 1.189.68 2.19 1.093 3.043c.887 1.835 2.053 2.988 3.875 3.864c.853.411 1.851.762 3.032 1.093c-1.18.331-2.178.682-3.032 1.093c-1.822.877-2.988 2.03-3.875 3.864c-.412.854-.764 1.854-1.093 3.043c-.33-1.189-.68-2.19-1.093-3.043c-.887-1.835-2.053-2.988-3.875-3.864m3.69.146A9.5 9.5 0 0 0 31.173 14a9.5 9.5 0 0 0 1.55-1.24A9.5 9.5 0 0 0 34 11.18a9.4 9.4 0 0 0 1.278 1.582c.474.47.99.878 1.549 1.239a9.5 9.5 0 0 0-1.55 1.24A9.5 9.5 0 0 0 34 16.82a9.5 9.5 0 0 0-1.278-1.582M9.304 29.064A41 41 0 0 0 6 28a41 41 0 0 0 3.304-1.064c5.083-1.906 7.707-4.477 9.632-9.612A40 40 0 0 0 20 14a40 40 0 0 0 1.064 3.324c1.925 5.135 4.55 7.706 9.632 9.612c1.002.376 2.098.726 3.304 1.064a41 41 0 0 0-3.304 1.064c-5.083 1.906-7.707 4.477-9.632 9.612A40 40 0 0 0 20 42a40 40 0 0 0-1.064-3.324c-1.925-5.135-4.55-7.706-9.632-9.612m7.403 2.17c-1.343-1.334-2.916-2.37-4.765-3.234c1.849-.864 3.422-1.9 4.765-3.233c1.355-1.345 2.412-2.93 3.293-4.808c.88 1.878 1.938 3.463 3.293 4.808c1.343 1.333 2.916 2.369 4.765 3.233c-1.849.864-3.422 1.9-4.765 3.233c-1.355 1.345-2.412 2.93-3.293 4.808c-.88-1.878-1.938-3.463-3.293-4.807" clipRule="evenodd" />
                            </svg>

                            <div>
                                <h3 className='text-2xl font-bold'>Sugerencias de mejora</h3>
                                <p className='text-muted'>La IA identificó oportunidades clave para optimizar tu CV. Aquí tienes un adelanto:</p>
                            </div>
                        </div>
                        <div className='mt-8 pl-8'>
                            <div className='flex gap-10 items-center bg-surface-muted p-6 rounded-xl border border-border-strong cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16" className='bg-secondary-hover rounded-2xl p-4 text-primary shrink-0 border border-primary-soft/50'>
                                    <path d="M0 0h16v16H0z" fill="none" />
                                    <path fill="currentColor" fillRule="evenodd" d="M12.5 6v8.5h-9v-13H8v2.75C8 5.216 8.784 6 9.75 6zm-.121-1.5L9.5 1.621V4.25c0 .138.112.25.25.25zM2 1a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm3.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 11.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h4 className='text-lg font-bold pb-2'>Resumen (Sobre mi)</h4>
                                    <p className='text-muted font-semibold text-sm'>Reorientar el resumen para destacar el interés en desarrollo frontend con Angular (moderno), mencionando habilidades transferibles de QA y cómo contribuyen a un desarrollo robusto. Es clave incluir 'Angular v14' de forma explícita y clarificar tu compromiso con este stack.</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 1024 1024" className='text-primary'>
                                    <path d="M0 0h1024v1024H0z" fill="none" />
                                    <path fill="currentColor" d="M338.8 104.7a64 64 0 0 0 0 90.5L655.6 512L338.8 828.8a64 64 0 0 0 90.4 90.5l362.1-362a64 64 0 0 0 0-90.5l-362-362.1a64 64 0 0 0-90.5 0" />
                                </svg>
                            </div>
                            <div className='flex gap-10 items-center bg-surface-muted p-6 mt-4 rounded-xl border border-border-strong cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" className='bg-secondary-hover rounded-2xl p-4 text-primary shrink-0 border border-primary-soft/50'>
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" fill-rule="evenodd" d="M10.82 13.02a2.8 2.8 0 0 0 1.18.265a2.7 2.7 0 0 0 1.18-.265l8.19-3.89c.44-.21.715-.64.715-1.13s-.275-.92-.715-1.13l-8.19-3.89a2.75 2.75 0 0 0-2.36 0L2.63 6.87c-.44.21-.715.64-.715 1.13s.275.92.715 1.13zm1.715-1.355c-.34.16-.73.16-1.07 0L3.75 8l7.715-3.665c.34-.16.73-.16 1.07 0L20.25 8zM10.82 17.02c.375.18.78.27 1.18.27s.805-.09 1.18-.27L22 12.83v-1.66l-9.465 4.495c-.34.16-.73.16-1.07 0L2 11.17v1.66zm.645 2.645L2 15.17v1.66l8.82 4.19c.375.18.775.265 1.18.265s.805-.09 1.18-.265L22 16.83v-1.66l-9.465 4.495c-.34.16-.73.16-1.07 0" clip-rule="evenodd" />
                                </svg>

                                <div>
                                    <h4 className='text-lg font-bold pb-2'>Habilidades</h4>
                                    <p className='text-muted font-semibold text-sm'>Actualizar la sección de habilidades diferenciando entre 'AngularJS' y 'Angular (v14+)'. Añadir 'HTML5' y 'CSS3' explícitamente, e incluir menciones a 'patrones de diseño', 'código limpio', 'escalabilidad' y 'mantenibilidad'.</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 1024 1024" className='text-primary'>
                                    <path d="M0 0h1024v1024H0z" fill="none" />
                                    <path fill="currentColor" d="M338.8 104.7a64 64 0 0 0 0 90.5L655.6 512L338.8 828.8a64 64 0 0 0 90.4 90.5l362.1-362a64 64 0 0 0 0-90.5l-362-362.1a64 64 0 0 0-90.5 0" />
                                </svg>
                            </div>
                        </div>
                        <Link to={`/suggestions`} className='flex gap-3 mx-auto items-center justify-center cursor-pointer text-primary font-semibold mt-8 hover:bg-primary-soft/50 py-2.5 px-6 rounded-full transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M8.154 9.116q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143H19.5q.213 0 .356.143q.144.144.144.357t-.144.356t-.356.144zm0 3.384q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0 3.385q-.213 0-.356-.144q-.144-.144-.144-.357t.144-.356t.356-.144H19.5q.213 0 .356.145t.144.356t-.144.356t-.356.144zM4.616 9.23q-.262 0-.439-.183Q4 8.866 4 8.596q0-.253.177-.424Q4.354 8 4.616 8q.261 0 .438.172q.177.17.177.424q0 .27-.177.452q-.177.183-.439.183m0 3.365q-.261 0-.438-.171T4 12q0-.29.177-.462t.439-.173t.438.172t.177.463q0 .253-.177.425t-.439.171m0 3.404q-.261 0-.438-.182Q4 15.635 4 15.366q0-.254.177-.425q.177-.172.439-.172q.261 0 .438.172t.177.425q0 .269-.177.452q-.177.182-.439.182" />
                            </svg>
                            <span>Ver sugerencias completas</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path strokeDasharray="20" d="M3 12h17.5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
                                    </path>
                                    <path strokeDasharray="12" strokeDashoffset="12" d="M21 12l-7 7M21 12l-7 -7">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0" />
                                    </path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
