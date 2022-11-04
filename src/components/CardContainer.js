import React from 'react'

const CardContainer = () => {
  return <>
    <div className="hero bg-lime-50 lg:px-20 lg:py-5 rounded-b-3xl mx-auto">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/Map.webp" className="rounded-lg shadow-2xl min-w-sm md:max-w-sm" />
    <div>
      <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 pb-2">Trabajamos en América Latina y en el mundo</p>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

      <div className='grid-flow-col mx-auto'>

      <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="mx-1 bg-blue-800 inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
      <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
      </svg>
      </button>

        <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="mx-1 bg-gradient-to-r from-amber-300 via-red-500 to-violet-500 inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
        </button>

        <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="mx-1 bg-blue-400 inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
      <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
    </svg>
  </button>

        </div>
        </div>
        </div>
    </div>


    <div className="w-screen flex justify-center items-center pt-4 shadow-inner shadow-lg">
        <div className='bg-slate-900 rounded-3xl ml-10 mb-5 pb-2 px-3'>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-base-100 py-3">Elegí nuestros servicios</p>
        </div>
    </div>



    <div className='lg:pl-20 lg:p-10 md:p-10 grid auto-cols-max items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
        
        <div className="card card-compact w-64 bg-orange-200 shadow-xl ml-4 mb-5">
            <figure><img src="card1.webp" alt="Servicio de Industrias" /></figure>
            <div className="card-body">
                <h3 className="card-title">Servicio de Industrias</h3>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-700">Saber más</button>
                </div>
            </div>
        </div>

        <div className="card card-compact w-64 bg-red-200 shadow-xl ml-4 mb-5">
            <figure><img src="card2.webp" alt="Protección contra Incendios" /></figure>
            <div className="card-body">
                <h3 className="card-title">Protección contra Incendios</h3>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-700">Saber más</button>
                </div>
            </div>
        </div>

        <div className="card card-compact w-64 bg-blue-200 shadow-xl ml-4 mb-5">
            <figure><img src="card3.webp" alt="Mediciones" /></figure>
            <div className="card-body">
                <h3 className="card-title">Mediciones</h3>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-700">Saber más</button>
                </div>
            </div>
        </div>

        <div className="card card-compact w-64 bg-yellow-100 shadow-xl ml-4 mb-5">
            <figure><img src="card4.webp" alt="Obras en Construcción" /></figure>
            <div className="card-body">
                <h3 className="card-title">Obras en Construcción</h3>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-700">Saber más</button>
                </div>
            </div>
        </div>

        <div className="card card-compact w-64 bg-green-200 shadow-xl ml-4 mb-5">
            <figure><img src="card5.webp" alt="Medioambiente" /></figure>
            <div className="card-body">
                <h3 className="card-title">Medioambiente</h3>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-700">Saber más</button>
                </div>
            </div>
        </div>

        <div className="card card-compact w-64 bg-blue-400 shadow-xl ml-4 mb-5">
            <figure><img src="card6.webp" alt="Cotización" /></figure>
            <div className="card-body">
                <h3 className="card-title">Pida una cotización</h3>
                <div className="card-actions justify-end">
                    <button className="btn bg-blue-600">Contacto</button>
                </div>
            </div>
        </div>
    </div>
  </>;
}

export default CardContainer