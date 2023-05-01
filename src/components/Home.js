import Navbar from "./Navbar"
export default function Body (){
    const style = {
        bg_dark : "text-bg-dark",
        bg_default : "text-bg-light",
        p_size : "f1"
    }
    return(
        <>
            <Navbar />
            <div className="container">
                <Jumbotron style={style.bg_default}/>
            </div>
        </>
    )
}

function Jumbotron(props){
    return(
        <>
            <div className={`p-5 mb-1 mt-3 body-tertiary rounded-3 border ${props.bg_dark}`}>
                <div className="container-fluid py-5">
                    <h1 className="display-1 fw-bold f2">Antony Injila</h1>
                    <div className="col-md-10">
                        <h4 className="display-6 fw-bold">
                            Software Engineer at Ariya Finergy Limited.
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
                </div>
            </div>

            <div className={`mb-1 mt-1 body-tertiary rounded-3  ${props.bg_dark}`}>
                <div className="container-fluid py-5">
                    <div className="col-md-12">
                        
                        <Skills />
                        
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    )
}

function Skills(){
    return (
        <div>  
            <h5 className="display-6">
                Skills
            </h5>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button display-6"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse-skill-1" aria-expanded="true" aria-controls="collapse-skill-1">
                            Golang
                        </button>
                    </h2>
                    <div id="collapse-skill-1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
    )
}


function Projects(){
    return (
        <>  
            <h5 className="display-6">
                Projects
            </h5>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button display-6"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-1" aria-expanded="true" aria-controls="collapse-project-1">
                            Golang
                        </button>
                    </h2>
                    <div id="collapse-project-1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                        <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-2" aria-expanded="false" aria-controls="collapse-project-2">
                            Python
                        </button>
                    </h2>
                    <div id="collapse-project-2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                    <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-3" aria-expanded="false" aria-controls="collapse-project-3">
                        JavaScript(TypeScript)
                    </button>
                    </h2>
                    <div id="collapse-project-3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="display-6">
                            TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-4" aria-expanded="false" aria-controls="collapse-project-4">
                        Kubernetes
                    </button>
                    </h2>
                    <div id="collapse-project-4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="display-6">
                            Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button display-6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-project-5" aria-expanded="false" aria-controls="collapse-project-5">
                        Amazon Web Services (AWS)
                    </button>
                    </h2>
                    <div id="collapse-project-5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className="display-6">
                            Build, Deploy, and Manage Websites, Apps or Processes On AWS' Secure, Reliable Network. Sign Up for a Free Account & Experience AWS' Secure, Reliable, Scalable Services. Durable, Safe & Secure. Performance At Scale. No Upfront Commitment.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}