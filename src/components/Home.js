import Navbar from "./Navbar"
export default function Body (){
    return(
        <>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <Skills />
            </div>
        </>
    )
}

function Jumbotron(props){
    let urls = {
        linkedin : "https://www.linkedin.com/in/antony-injila-30a53410b/",
        twitter : "https://twitter.com/injila_antony",
        medium : "https://medium.com/@antonyshikubu",
        youtube : "https://www.youtube.com/channel/UCVuumsWaI2ws7YcZRvANbVQ",
    }
    return(
        <>
            <div className={`p-1 mt-3 body-tertiary rounded-3 border ${props.bg_dark}`}>
                <div className="container-fluid py-5">
                    <h1 className="display-1 fw-bold f2">Antony Injila</h1>
                    <div className="col-md-10">
                        <h4 className="display-6 fw-bold">
                            Software Engineer.
                        </h4>
                        <h5 className="display-6">
                            Passionate Go and Python Developer.
                        </h5>
                        <h5 className="display-6">
                            Technical Writer at Medium and Golinuxcloud.com.
                        </h5>
                        <h5 className="display-6">
                            Currently learning TypeScript, DevOps
                        </h5>
                    </div>
                    <div className="col-md-12 mt-3 pt-2">
                        <span className="">
                            <a href={urls.linkedin} style={{color:"inherit"}} target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </a>
                        </span>
                        <span className="m-3">
                            <a href={urls.twitter} style={{color:"inherit"}} target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </a>
                        </span>
                        <span className="m-3">
                            <a href={urls.medium} style={{color:"inherit"}} target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
                                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                                </svg>
                            </a>
                        </span>
                        <span>
                            <a href={urls.youtube} style={{color:"inherit"}} target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

function Skills(){
    return (
        <div>  
            <div className={`p-3 mt-2 body-tertiary rounded-3 border`}>
                <div className="container-fluid py-1">
                    <h6 className="display-6 fw-bold f2">Skills</h6>
                    <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button display-6"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse-skill-1" aria-expanded="true" aria-controls="collapse-skill-1">
                            Golang
                        </button>
                    </h2>
                    <div id="collapse-skill-1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className="display-6">
                            <li>
                                An open-source programming language supported by Google
                            </li>
                            <li>
                                Easy to learn and great for teams
                            </li>
                            <li>
                                Built-in concurrency and a robust standard library
                            </li>
                            <li>
                                Large ecosystem of partners, communities, and tools
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-skill-2" aria-expanded="false" aria-controls="collapse-skill-2">
                            Python
                        </button>
                    </h2>
                    <div id="collapse-skill-2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="display-6">
                            Python is a programming language that lets you work quickly
                            and integrate systems more effectively
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-skill-3" aria-expanded="false" aria-controls="collapse-skill-3">
                        JavaScript(TypeScript)
                    </button>
                    </h2>
                    <div id="collapse-skill-3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="display-6">
                            TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-skill-4" aria-expanded="false" aria-controls="collapse-skill-4">
                        Kubernetes
                    </button>
                    </h2>
                    <div id="collapse-skill-4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="display-6">
                            Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-skill-5" aria-expanded="false" aria-controls="collapse-skill-5">
                        Amazon Web Services (AWS)
                    </button>
                    </h2>
                    <div id="collapse-skill-5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="display-6">
                            Build, Deploy, and Manage Websites, Apps or Processes On AWS' Secure, Reliable Network. Sign Up for a Free Account & Experience AWS' Secure, Reliable, Scalable Services. Durable, Safe & Secure. Performance At Scale. No Upfront Commitment.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
                </div>

            </div>


            
        </div>
    )
}

// function Projects(){
//     return (
//         <>  
//             <h5 className="display-6">
//                 Projects
//             </h5>
//             <div className="accordion" id="accordionExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button display-6"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-1" aria-expanded="true" aria-controls="collapse-project-1">
//                             Golang
//                         </button>
//                     </h2>
//                     <div id="collapse-project-1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">
//                         <ul className="display-6">
//                             <li>
//                                 An open-source programming language supported by Google
//                             </li>
//                             <li>
//                                 Easy to learn and great for teams
//                             </li>
//                             <li>
//                                 Built-in concurrency and a robust standard library
//                             </li>
//                             <li>
//                                 Large ecosystem of partners, communities, and tools
//                             </li>
//                         </ul>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-2" aria-expanded="false" aria-controls="collapse-project-2">
//                             Python
//                         </button>
//                     </h2>
//                     <div id="collapse-project-2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">
//                         <p className="display-6">
//                             Python is a programming language that lets you work quickly
//                             and integrate systems more effectively
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                     <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-3" aria-expanded="false" aria-controls="collapse-project-3">
//                         JavaScript(TypeScript)
//                     </button>
//                     </h2>
//                     <div id="collapse-project-3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">
//                         <p className="display-6">
//                             TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                     <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-4" aria-expanded="false" aria-controls="collapse-project-4">
//                         Kubernetes
//                     </button>
//                     </h2>
//                     <div id="collapse-project-4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">
//                         <p className="display-6">
//                             Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                     <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-5" aria-expanded="false" aria-controls="collapse-project-5">
//                         Amazon Web Services (AWS)
//                     </button>
//                     </h2>
//                     <div id="collapse-project-5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                     <div className="accordion-body">
//                         <p className="display-6">
//                             Build, Deploy, and Manage Websites, Apps or Processes On AWS' Secure, Reliable Network. Sign Up for a Free Account & Experience AWS' Secure, Reliable, Scalable Services. Durable, Safe & Secure. Performance At Scale. No Upfront Commitment.
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

