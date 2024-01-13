const BirthdayCard = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-emerald-200 via-sky-200 to-pink-200">
            <div className="w-[90%] flex-row text-center font-Oswald">
                <div className="text-4xl font-medium tracking-tighter ">

                    <div>
                        <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-fuchsia-500 to-cyan-500 relative inline-block">
                            <span className="relative text-white">{"YO NACÍ PARA AMAR"}</span>
                        </div>
                    </div>
                    <div>
                        <span>{'MI FLAQUITA, GRACIAS POR CRUZARTE EN MI CAMINO. HOY CELEBRAMOS EN EL CIELO Y LA TIERRA LA INMENSA FORTUNA QUE ES TENERTE A NUESTRO LADO.'}</span>
                        <br />
                        <span>{'ESPERO DISFRUTES DE ESTE REGALO POR EL RESTO DE TU VIDA'}</span>
                    </div>
                </div>
                <div className="text-5xl font-semibold m-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    {/* <CountdownTimer targetDate="2024-01-13T00:01:00" /> */}
                </div>
            </div>
        </section>
    );
}

export default BirthdayCard