import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../app/globals.css';
import Link from "next/link";

const Types = () => {
    const [selectedType, setSelectedType] = useState<string | null>('Social');

    const handleTypeClick = (type: string) => {
        setSelectedType(type);
    };

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Tipos de Ansiedade</title>
            </Head>

            <header className="bg-purple-600 p-4 text-white">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Ansiedade</h1>
                    <Nav />
                </div>
            </header>

            <main className="container mx-auto p-4 mb-16"> 
                <section className="mb-8 text-center">
                    <h2 className="text-4xl text-black font-semibold mt-40">Ansiedade Classificada por Tipos</h2>
                    <h2 className="text-xl font-medium mb-4 text-gray-800 mt-6">
                        Todo mundo já sentiu apreensão e ansiedade em algum momento da vida. Seja pela expectativa de uma prova, a apresentação de um projeto ou algum compromisso importante. Essa é a ansiedade comum do dia a dia, da qual tanto ouvimos falar. Mas você sabia que existem diferentes tipos de ansiedade?
                    </h2>

                    <div className="flex justify-center gap-4 border-b-2 border-gray-200 mb-6">
                        {['Social', 'Pânico', 'TOC', 'TDAH'].map((type, index) => (
                            <button
                                key={index}
                                className={`p-4 text-lg transition duration-300 font-semibold ease-in-out ${
                                    selectedType === type ? 'border-b-4 border-black text-black' : 'text-white hover:text-black'
                                }`}
                                onClick={() => handleTypeClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedType === 'Social' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                                <img src="/ImagesRetriever/ansiedadesocialtypes.jpg"
                                     alt="Transtorno de Ansiedade Social"
                                     className="w-full h-64 object-cover mb-4"/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Transtorno de Ansiedade Social: o que é, sintomas e tratamento</h3>
                                    <p className="text-gray-700">Transtorno de ansiedade social.</p>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'Pânico' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                                <img src="/ImagesRetriever/panicotypes.jpg" alt="Ansiedade em Crianças"
                                     className="w-full h-64 object-cover mb-4"/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Entenda o que é ansiedade social e como se manifesta nas crianças</h3>
                                    <p className="text-gray-700">Ansiedade em crianças.</p>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'TOC' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                                <img src="/ImagesRetriever/toctypes.jpg" alt="Ansiedade e Fobia Social"
                                     className="w-full h-64 object-cover mb-4"/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
                                    <p className="text-gray-700">Ansiedade e fobia social.</p>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'TDAH' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                                <img src="/ImagesRetriever/tdahtypes.jpeg" alt="Ansiedade e Fobia Social"
                                     className="w-full h-64 object-cover mb-4"/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
                                    <p className="text-gray-700">Ansiedade e fobia social.</p>
                                </div>
                            </article>
                        </Link>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Types;
