"use client";

import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const tiposAnsiedade = [
    {
        tipo: "Transtorno de Pânico",
        img: "/ImagesRetriever/panico.jpg",
    },
    {
        tipo: "Agorafobia",
        img: "/images/tiposAnsiedade2.png",
    },
    {
        tipo: "Fobias Específicas",
        img: "/images/tiposAnsiedade3.png",
    },
    {
        tipo: "Transtorno de Ansiedade Social ou fobia social",
        img: "/images/tiposAnsiedade4.png",
    },
    {
        tipo: "Transtorno de Ansiedade Generalizada",
        img: "/images/tiposAnsiedade5.png",
    },
];

export default function Home() {
    const [imagemAtual, setImagemAtual] = useState(tiposAnsiedade[0].img);

    const handleItemClick = (img: string) => {
        setImagemAtual(img);
    };

    return (
        <main className="bg-white flex flex-col min-h-screen items-center justify-between p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Head>
            <header className="w-full">
                <div
                    className="relative w-full h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('/ImagesRetriever/womanSad.png')", minHeight: "320px" }}
                >
                    <Nav />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            O que é Ansiedade?
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg">
                            A ansiedade é uma resposta natural do corpo a situações de perigo, estresse ou desafio. É uma reação adaptativa que nos prepara para lidar com ameaças percebidas. No entanto, em alguns casos, a ansiedade pode se tornar desproporcional, crônica e afetar negativamente a qualidade de vida.
                        </p>
                        <button className="mt-4 bg-purple-950 text-white px-6 py-3 rounded-full hover:bg-purple-900">
                            Saber Mais
                        </button>
                    </div>
                </div>
            </header>

            <section className="w-full p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <h1 className="text-black text-lg font-semibold">
                        Explorar
                    </h1>
                    <a href="#" className="text-purple-900">Ver mais</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/ImagesRetriever/homemdascavernas.jpg" alt="Ansiedade na pré-história" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-black text-md font-semibold">Ansiedade na pré-história</h2>
                            <p className="text-gray-600 text-sm">Foi a sensação de insegurança que criou o homem moderno. Entenda aqui as origens, a importância e os efeitos da ansiedade para nós.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/ImagesRetriever/anxietyciency.jpg" alt="Como a ciência explica a ansiedade e o estresse" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-black text-md font-semibold">Como a ciência explica a ansiedade e o estresse</h2>
                            <p className="text-gray-600 text-sm">A ansiedade e o estresse podem ser causados por uma série de fatores, entre eles a vida agitada, pressões sociais, medo, estilo de vida, etc.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/ImagesRetriever/anxiouwoman.jpg" alt="Transtornos de ansiedade em mulheres" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-black text-md font-semibold">Transtornos de ansiedade em mulheres</h2>
                            <p className="text-gray-600 text-sm">Mulheres apresentam um risco significativamente maior comparado com os homens para o desenvolvimento de transtornos de ansiedade ao longo da vida.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full p-6">
                <h1 className="text-black text-lg font-semibold">
                    Descubra os Tipos de Ansiedade
                </h1>
                <div className="flex items-center">
                    <img src={imagemAtual} alt="Tipos de Ansiedade" className="w-1/2 h-auto object-cover" />
                    <ul className="list-none">
                        {tiposAnsiedade.map((tipo, index) => (
                            <li
                                key={index}
                                className="cursor-pointer text-black text-lg"
                                onClick={() => handleItemClick(tipo.img)}
                            >
                                {tipo.tipo}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-full p-6">
                <h1 className="text-black text-lg font-semibold mb-4">
                    Saiba Mais sobre Ansiedade!
                </h1>
                <div className="flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Tv0gJTBmVuc"
                        title="Anxiety video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <Footer />
        </main>
    );
}
