import { useEffect, useState } from "react"


export default function Body (){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8081/api/v1/projects/');
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData(); // Call the function to fetch data when the component mounts
    }, []);
   
    const skills = [
        {
            "id": 1,
            "name" : "Go Programming",
            "items" : [
                "Gin, Fiber microservice development",
                "Golang technical writing.",
                "RESTful APIs development.",
                // "gRPC APIs development."
            ],
        },
        {
            "id": 2,
            "name" : "Python",
            "items" : [
                "Flask microservice development",
                "REST API development.",
                "Building Backend RESTful for my portfolio"
            ],
        },
        {
            "id": 3,
            "name" : "AWS",
            "items" : [
                "AWS IOT Core",
                "Simple Queue Service (SQS)",
                "Simple Notification Service (SNS)",
            ],
        }
    ]

    const certifications =[
        {
            "id": 1,
            "title" : "Ultimate AWS Certified Solutions Architect SAA-C03",
            "institution" : "Udemy",
            "issued": "July 6, 2023",
            "hours": "27 total hours",
            "link" : "https://www.udemy.com/certificate/UC-862e9ceb-c675-43db-b93c-6902dc6982f6/",
        },
        {
            "id": 2,
            "title" : "Data structures, Algorithms and Design Patterns With Go",
            "institution" : "Udemy",
            "hours": "10 hours",
            "issued": "May 18th, 2023",
            "link" : "https://www.udemy.com/certificate/UC-1d097f04-3fcc-4868-b1d7-8ab378ddb071",
        },
        {
            "id": 3,
            "title" : "The Complete Developer's Guide (Go programming)",
            "institution" : "Udemy",
            "hours": "9 hours",
            "issued": "July 20th  2023",
            "link" : "https://www.udemy.com/certificate/UC-50def0ce-e8eb-406a-9df2-6a47690374c4",
        },
       
    ]
    return(
        <>
            <div className="container">
                <Jumbotron />
                {/* <Skills skills={skills}  users= {data} /> */}
                <Certifications certifications={certifications} />
                
                <Projects projects={projects} />
            </div>
        </>
    )
}

function Jumbotron(props){
    let urls = {
        github : "https://github.com/AntonyIS",
        linkedin : "https://www.linkedin.com/in/antony-injila-30a53410b/",
        twitter : "https://twitter.com/injila_antony",
        medium : "https://medium.com/@antonyshikubu",
        youtube : "https://www.youtube.com/channel/UCVuumsWaI2ws7YcZRvANbVQ",
        golinuxcloud : "https://www.golinuxcloud.com/author/antonyshikubu/"
    }
    return(
        <>
            <div className={`p-3 mt-3 body-tertiary rounded-3 border ${props.bg_dark}`}>
                <div className="container-fluid py-5 ">
                    <h1 className="display-1 fw-bold f2">Antony Injila</h1>
                    <div className="col-md-10">
                        <h4 className="display-6 fw-bold">
                            Software Engineer.
                        </h4>
                        <h5 className="display-6">
                            Passionate Go and Python Developer.
                        </h5>
                        <h5 className="display-6">
                            Technical Writer at <a href={urls.medium} style={{color:"inherit"}} target="_blank"  rel="noopener noreferrer">Medium</a> and <a href={urls.golinuxcloud} style={{color:"inherit"}} target="_blank"  rel="noopener noreferrer">Golinuxcloud.com</a>.
                        </h5>
                        <h5 className="display-6">
                            Currently learning TypeScript & Kubernetes
                        </h5>
                    </div>
                    <div className="col-md-12 mt-3 pt-2">
                        <span className="">
                            <a href={urls.github} style={{color:"inherit"}} target="_blank" className="bg-body rounded"  rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github " viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            </a>
                        </span>
                        <span className="m-3 ">
                            <a href={urls.linkedin} style={{color:"inherit"}}  className="bg-body rounded" target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </a>
                        </span>
                        <span className="m-3">
                            <a href={urls.twitter} style={{color:"inherit"}}  className="bg-body rounded" target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </a>
                        </span>
                        <span className="m-3">
                            <a href={urls.medium} style={{color:"inherit"}} className="bg-body rounded"  target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-medium" viewBox="0 0 16 16">
                                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                                </svg>
                            </a>
                        </span>
                        <span>
                            <a href={urls.youtube} style={{color:"inherit"}} className="bg-body rounded"  target="_blank"  rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
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

function SkillsCard({id,name,items}){

    return (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl- 4">
            <div className="card p-3 bg-body rounded" key={id}>
                <h5 className="display-6">{name}</h5>
                {items.map(myItem => (
                    <p className="fw-light">{myItem}</p>
                ))}
            </div>
        </div>
        
    )
 }

function CertificationsCard({id,title,institution,hours,issued,link}){
    const cardStyle = {
        height: '260px',
    };
    
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl- 4">
            <div className="card p-3  bg-body rounded" key={id} style={cardStyle}>
            <h5 className="">{title}</h5>
                <p className="fw-light">Institution : {institution}</p>
                <p className="fw-light">Hours : {hours}</p>
                <p className="fw-light">Issued : {issued}</p>
                <a href={link} className="btn btn-dark">View</a>
            </div>
        </div>
        
    )
}


function Skills({skills}){
    return (
        <div>  
            <div className={`p-3 mt-2 body-tertiary rounded-3 border`}>
                <div className="container-fluid py-1">
                    <h6 className="display-6 fw-bold f2">Skills</h6>
                    <div className="row">
                        {skills.map(item => (
                             <SkillsCard key={item.id} name={item.name} items={item.items} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Certifications({certifications}){
   
    return (
        <div>  
            <div className={`p-3 mt-2 body-tertiary rounded-3 border`}>
                <div className="container-fluid py-1">
                    <h6 className="display-6 fw-bold f2">Certifications</h6>
                    <div className="row">
                        {certifications.map(item => (
                            <CertificationsCard key={item.id} title={item.title} institution={item.institution} hours={item.hours} issued={item.issued} link={item.link}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
function Projects({projects}){
    return (
        <div>  
            <div className={`p-3 mt-2 body-tertiary rounded-3 border`}>
                <div className="container-fluid py-1">
                    <h6 className="display-6 fw-bold f2">Projects</h6>
                    <div className="row">
                        {projects.map(item => (
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl- 4">
                            <div className="card p-3  bg-body rounded" key={item.id} >
                            <h5 className="">{item.title}</h5>
                                
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

