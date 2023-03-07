function Bilgi(props){
    return (
        <>
        <div className="m-3">
        <h4>{props.bilgi_ismi}</h4>
        <span>{props.deger}</span>
        </div>
        </>
    );
}

export default Bilgi;