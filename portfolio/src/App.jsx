import React, { useReducer } from "react";
import './App.css';

//Import components
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contacts';

//Reducer function to switch between sections
const reducer = (state, action) => {
  switch (action.type) {
    case 'ABOUT':
      return {currentSection: 'about'};
    case 'SKILLS':
      return {currentSection: 'skills'};
    case 'PROJECTS':
      return {currentSection: 'projects'};
    case 'CONTACT':
      return {currentSection: 'contact'};
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    currentSection: 'about'});

  return (
    <div className="app">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <button onClick={() => dispatch({ type: 'ABOUT' })}>About Me</button>
          <button onClick={() => dispatch({ type: 'SKILLS' })}>Skills</button>
          <button onClick={() => dispatch({ type: 'PROJECTS' })}>Projects</button>
          <button onClick={() => dispatch({ type: 'CONTACT' })}>Contact</button>
        </nav>
      </header>

      <main>
        {state.currentSection ==='about' && <About/>}
        {state.currentSection === 'skills' && <Skills />}
        {state.currentsection === 'projects' && <Projects/>}
        {state.currentSection === ' contact' && <Contact />}
      </main>
     </div>
  );
}

export default App;
