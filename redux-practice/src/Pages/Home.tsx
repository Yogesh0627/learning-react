import React from 'react'
import Button from '../Component/Button'
// import "./customCss.css"
const Home = () => {
  return(
    <>
    <section className="bg-red-500 text-6xl ">
        <div>
            <div>
                <p className='text-2xl'>
                    welcome to resonance3d private limited company
                </p>
            </div>
            <div>
                <p>
                    welcome to resonance3d private limited company
                    Your complete hub for all your 3D solution needs.
                </p>
            </div>
            <div>
                <Button buttonTitle={"Free consultation"} styleClasses={"rounded-md"}/>
            </div>
        </div>
   
    </section>
    </>
  )
}
// src\assets\backgroundImage.png
export default Home