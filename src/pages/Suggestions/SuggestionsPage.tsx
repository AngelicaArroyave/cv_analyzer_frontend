import { Header } from "../../components/Header"

export const SuggestionsPage = () => {
    return (
        <>
            <Header suggestions={true} />
            <div className="flex flex-col gap-8 w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] max-w-275 mx-auto relative z-10 -mt-4 pb-10">
                <div className="flex gap-6 md:gap-10 bg-surface p-9 rounded-2xl border-l-4 border-primary-light">
                    <div className="bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50 w-18 h-18 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20.75a1 1 0 0 0 1-1v-1.246c.004-2.806-3.974-5.004-8-5.004s-8 2.198-8 5.004v1.246a1 1 0 0 0 1 1zM15.604 6.854a3.604 3.604 0 1 1-7.208 0a3.604 3.604 0 0 1 7.208 0" />
                        </svg>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3">Resumen (Sobre mi)</h3>
                        <p className="text-muted font-medium">El resumen actual se enfoca en un perfil de 'Analista de Calidad y Automatización'. Para esta oferta, es crucial reorientado para destacar el interés y la transición hacia el desarrollo frontend, con énfasis en Angular (moderno). Menciona las habilidades transferibles de QA (comprensión de requerimientos, aseguramiento de calidad) pero enfoca cómo estas contribuyen a un desarrollo robusto. Es vital clarificar o eliminar la mención de 'AngularJS', ya que la oferta requiere 'Angular v14' (son tecnologías muy distintas). Si ya tiene experiencia con Angular moderno, debe especificarlo; de lo contrario, indicar proactivamente su compromiso a adquirir o ya estar adquiriendo dicha habilidad.</p>
                    </div>
                </div>
                <div className="flex gap-6 md:gap-10 bg-surface p-9 rounded-2xl border-l-4 border-primary-light">
                    <div className="bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50 w-18 h-18 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M19.5 6H16V5a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v1H4.5A2.5 2.5 0 0 0 2 8.5v10A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 19.5 6M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm12 13.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-6.473l5.842 1.948A.5.5 0 0 0 9 14h6a.5.5 0 0 0 .158-.025L21 12.027zm0-7.494a.5.5 0 0 0-.158.02L14.919 13H9.081l-5.923-1.975a.5.5 0 0 0-.158-.02V8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5z" />
                        </svg>

                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3">Experiencia Laboral</h3>
                        <p className="text-muted font-medium">Aunque el rol principal ha sido QA, reestructurar las descripciones para resaltar cualquier tarea que implicara colaboración con desarrollo, análisis de diseño funcional o comprensión de la arquitectura de la aplicación. Para la 'Experiencia Personal / Desarrollo web (Trabajo de Grado)', ampliar la descripción para detallar el proceso de diseño, implementación y mantenimiento, el impacto y los desafios técnicos superados, usando un lenguaje más técnico de desarrollo. Es fundamental demostrar experiencia práctica con Angular (v14); si no la tiene profesionalmente, considere proyectos personales, bootcamps o certificaciones que validen esta habilidad.</p>
                    </div>
                </div>
                <div className="flex gap-6 md:gap-10 bg-surface p-9 rounded-2xl border-l-4 border-primary-light">
                    <div className="bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50 w-18 h-18 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5" />
                        </svg>

                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3">Habilidades</h3>
                        <p className="text-muted font-medium">Actualizar la sección de habilidades. Es imprescindible diferencias claramente entre 'AngularJS' (si se mantiene, con la nota de ser una tecnología antigua) y 'Angular (v14+)'. Es vital incluir 'Angular (v14)' de forma explícita. Se recomienda añadir 'HTML5' y 'CSS3' de forma explícita. Incluir menciones a 'Ppatrones de diseño', 'código limpio', 'escalabilidad' y 'mantenibilidad' si la candidata tiene conocimientos.</p>
                    </div>
                </div>
                <div className="flex gap-6 md:gap-10 bg-surface p-9 rounded-2xl border-l-4 border-primary-light">
                    <div className="bg-secondary-hover rounded-xl p-2.5 text-primary shrink-0 border border-primary-soft/50 w-18 h-18 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.25.25 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301l2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.94.94 0 0 1-.663.275" />
                            <path fill="currentColor" d="M2.625 12A9.375 9.375 0 0 0 12 21.375A9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3c0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12S5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.4 9.4 0 0 0 12 2.625A9.375 9.375 0 0 0 2.625 12" />
                            <path fill="currentColor" d="M7.125 12a4.874 4.874 0 1 0 9.717-.569a.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253a6.376 6.376 0 0 1 5.236-10.844a.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12" />
                        </svg>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3">Genral</h3>
                        <p className="text-muted font-medium">Adaptar el lenguaje general del CV para que resuene con los términos de un 'Frontend Engineer' o 'Desarrollador Angular'. Aunque la experiencia en Java/Spring Boot es un plus para el perfil 'Deseable', la oferta es principalmente de Frontend. Investigar y, si es posible, incluir algún conocimiento o interés en el sector de la 'Administración Pública (AAPP)', aunque sea a novel de familiarización con sus procesos o sistemas, para cumplor con otro requisito deseable.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
