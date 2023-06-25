function Loader (props) {

    if(props.data.length>0){
        return(
            <div className="loader-box">
                <h3>Nenhum jogo foi encontrado</h3>
            </div>
        );
    } else {
        return(
            <div className="loader-box">
                <div className="loader"></div>
                <h3>Aguardando dados...</h3>
            </div>
        );
    };
};

export default Loader;