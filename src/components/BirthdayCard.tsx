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
                    <div className="mt-5">
                        <span className="font-light text-3xl text-gray-500">{'Dirígete a tu cuarto; allí, si buscas bien, encontrarás a alguien que te acompaña en todo momento y te hará sonreír en los momentos más difíciles. Estoy seguro de que te dará ánimo para seguir siendo esa mujer tan especial que eres.'}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-3xl">{'🩵 TE AMO MUCHO MÁS ARRIBA DEL CIELO 🩵'}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BirthdayCard