import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                <p className="h1">
                    Portfólio Juan Pinheiro com React.js
                </p>
                <img src="https://avatars.githubusercontent.com/u/101989093?s=400&u=d45c42d22d92674d4cc79fd6a963e81b1b69a806&v=4" class="img-header" alt="..."></img>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            </header>
            <div class="card">
            <div class="card-header">
              links
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a href="https://www.youtube.com/watch?v=RY7S6EgSlCI">música favorita</a>
                </li>
                <li class="list-group-item"><a href="https://github.com/juanpinheirx">github</a></li>
                <li class="list-group-item"><a href="">video resume</a></li>
              </ul>
            </div>
            </div>
    );
}

export default App;
