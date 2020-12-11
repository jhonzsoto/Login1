import React from 'react'
const Hero =({handleLogOut})=>{
    return(
        <section className="hero">
            <nav>

                  <button onClick={handleLogOut}>
                      salir</button>
                <h2>bienvenido </h2>
              
            </nav>
        </section>
    );
};

export default Hero;