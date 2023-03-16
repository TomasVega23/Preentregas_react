import moon from "./images/moon.png";

const PromoApp = () => {
    return (
        <div className="container-fluid bg-secondary  py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={moon} alt={"moon App"} width={123} />
                            </div>
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="text-black">
                                    <h2>Moon</h2>
                                    <p>Contactanos para cualquiera de tus dudas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <button className="btn bg-light-subtle">Contactanos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoApp;