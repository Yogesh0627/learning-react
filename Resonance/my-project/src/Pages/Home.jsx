

const Home = () => {
  return (
    <>
        <div className="pb-10">
            <section className='bg-mainImage  bg-cover '>

            <div className='p-10 h-[800px]  w-full  flex items-center'>
                <div>
                <div className="">
                    <p className="text-white font-sans font-bold text-3xl">
                        welcome to resonance3d private limited company
                    </p>
                </div>

                <div className='text-white text-3xl lg:text-6xl mt-4 font-bold flex items-center'>
                <div className='mt-4 w-full'>
                        <div className='leading-snug'>
                            Your complete hub for all <br />{" "} your 3D solution needs. <br />
                        </div>

                        <div className='bg-red-500 hover:text-black hover:bg-gray-100 w-fit mt-8  px-8 py-4 text-xl rounded-3xl'>
                            <a href="https://api.whatsapp.com/send/?phone=%2B918809989996&text&type=phone_number&app_absent=0" target="_blank">Free consultation{" "}</a>
                        </div>
                    </div>
                </div>
                </div>  
            </div>                                         
            </section>

            <div className="px-10">
                <div className="mt-10 flex items-center justify-between">
                    <div className="flex w-full lg:w-1/2">
                        <div className="text-2xl font-bold m-auto w-fit">
                            <ul><li className="text-gray-500">Our benefits</li></ul>
                            <h2 className="text-4xl w-40 mt-4">Reasons why we are best</h2>
                        </div>
                        <div>
                            <img src="/src/assets/Resonance3D.png" alt="barCode" className="w-60"/>
                        </div>
                    </div>

                    <div></div>

                </div>
                <div className="flex flex-col mt-6 w-1/2">
                    <div className="ml-1 lg:ml-32">
                        <p className="w-48 text-lg ">
                            To View Model in Your Space Scan Qr in Your Phone or Click Bellow ↓
                        </p>
                    </div>

                    <div className="ml:1 lg:ml-32 mt-6">
                        <a href="https://elegant-sfogliatella-5bc557.netlify.app/" target="_blank"><button className="text-lg  py-2 lg:py-3 px-12 lg:px-10  font-semibold text-white bg-red-500 hover:bg-black rounded-3xl">Model Viewer</button></a>
                    </div>
                </div>
            </div>

        </div>



    </>
  )
}

export default Home