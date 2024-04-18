import React, { createContext } from 'react'
import './App.css'
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import Theme from './themes/Theme';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutme/AboutMe';
import MySkills from './components/skills/MySkills';
import Footer from './components/footer/Footer';

type ThemeState = {
  theme: Theme;
  toggleTheme: Function;
}

class App extends React.Component<{}, ThemeState> {
  toggleTheme = () => {
    this.setState({theme: this.state.theme === darkTheme ? lightTheme : darkTheme})
  };

  state: ThemeState = {theme: lightTheme, toggleTheme: this.toggleTheme};

  render() {
    return(
      <ThemeContext.Provider value={this.state} >
        <div style={{color: this.state.theme.textColor, backgroundColor: this.state.theme.backgroundColorPrimary}}>
          <NavBar />
          <AboutMe />
          <Projects />
          <MySkills />
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

const ThemeContext = createContext<ThemeState>({theme: lightTheme, toggleTheme: () => {}});

export {App, ThemeContext};
