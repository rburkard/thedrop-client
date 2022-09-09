import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import {
  AppThemeContext,
  configureAppTheme,
} from '@foronered/web/lib/theme/theme'
import { Home } from 'pages/Home'
import { Scaffold } from 'Scaffold'

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  #root {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding:0;
  }

  h1, h2, h3, h4, p, a {
    font-family: 'Courier Prime', monospace !important;
    margin: 0;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }

  h3 {
    font-size: 22px;
  }
  p {
    font-size: 18px;
    color: white;
    margin: 0;
  }

  input {
    all: unset;
    font-size: 18px;
    color: white;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const appTheme = configureAppTheme({
  button: {
    chromeless: {},
    secondary: {},
    common: {
      backgroundColor: 'red',
      color: 'white',
    },
  },
})

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppThemeContext.Provider value={appTheme}>
        <BrowserRouter>
          <Scaffold>
            <Routes>
              <Route path={'/'} element={<Home />} />
              {/* <Route path={'/angebot'} element={<Angebot />} />
              <Route path={'/ueber-uns'} element={<UeberUns />} />
              <Route path={'/kontakt'} element={<Kontakt />} /> */}
            </Routes>
          </Scaffold>
        </BrowserRouter>
      </AppThemeContext.Provider>
    </>
  )
}
