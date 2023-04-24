export default function Body (){
    const style = {
        bg_dark : "text-bg-dark",
        bg_default : "text-bg-light",
        p_size : "f4"
    }
    return(
        <>
            <div className="container">
                <Jumbotron style={style.bg_default}/>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <Jumbotron bg_dark={style.bg_dark} p_size={style.p_size}/>
                    </div>
                    <div className="col-md-6">
                        <Jumbotron bg_dark={style.bg_dark}/>
                    </div>
                </div>
            </div>
        </>
    )
}

function Jumbotron(props){
    return(
        <div className={`p-5 mb-4 mt-3 body-tertiary rounded-3 border ${props.bg_dark}`}>
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Antony Injila</h1>
                <p className={`col-md-8 ${props.p_size}` }>
                    Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
                </p>
                <button className="btn btn-primary btn-lg">More ...</button>
            </div>
        </div>
    )
}