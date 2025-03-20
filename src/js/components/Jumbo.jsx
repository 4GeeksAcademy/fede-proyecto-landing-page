import React from "react";

const Jumbo = () => {
    return (
        <div className="m-5 p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Adopta un gatito</h1>
                <p className="col-md-8 fs-4">En I LOVE CAT, creemos que cada gato merece una segunda oportunidad y un hogar lleno de amor. Somos un refugio dedicado a rescatar, cuidar y encontrar familias responsables para gatos en busca de una nueva vida.
                    Si estás pensando en adoptar, aquí encontrarás adorables compañeros de todas las edades, personalidades y colores, listos para llenar tu vida de alegría y ronroneos. Además, te ofrecemos asesoramiento y recursos para garantizar que la adopción sea un proceso exitoso tanto para ti como para tu nuevo amigo felino.
                    ¡Descubre a tu próximo mejor amigo y ayúdanos a cambiar vidas, una adopción a la vez! 🏡💙🐱</p>
                <button className="btn btn-primary btn-lg">Adoptar</button>
            </div>
        </div>
    )
}

export default Jumbo;