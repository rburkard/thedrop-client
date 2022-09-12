import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import {
  AppThemeContext,
  configureAppTheme,
} from '@foronered/web/lib/theme/theme'
import { Home } from 'pages/Home'
import { Scaffold } from 'Scaffold'
import {
  AuthStates,
  AuthType,
  LoginDataT,
  RegistrationDataT,
  UserDataT,
} from 'constants/types'

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
    font-size: 28px;
  }
  p, input {
    all: unset;
    font-size: 24px;
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

// const authServer = Constants.manifest?.extra?.authServer
// const appServer = Constants.manifest?.extra?.appServer

const appServer = 'http://localhost:3000/api'
const authServer = 'http://localhost:3001/api'

const registrationInputs: Array<{
  key: keyof RegistrationDataT
  label: string
}> = [
  {
    key: 'username',
    label: 'Username',
  },
  {
    key: 'password',
    label: 'Password',
  },
]

const loginInputs: Array<{
  key: keyof LoginDataT
  label: string
}> = [
  {
    key: 'username',
    label: 'Username',
  },
  {
    key: 'password',
    label: 'Password',
  },
]

export const App = () => {
  const [loginData, setLoginData] = useState<LoginDataT>({
    username: 'lukezirngibl',
    password: '123abc',
  })

  const [registrationData, setRegistrationData] = useState<RegistrationDataT>({
    // email: 'luke@foronered.com',
    username: 'lukezirngibl',
    password: '123abc',
  })

  const [authState, setAuthState] = useState<AuthStates>(AuthStates.Loading)
  const [token, setToken] = useState<string>()
  const [user, setUser] = useState<UserDataT>()
  const [authType, setAuthType] = useState<AuthType>(AuthType.Registration)

  const register = async () => {
    try {
      const res = await fetch(`${authServer}/register_user`, {
        method: 'POST',
        body: JSON.stringify(registrationData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await res.json()

      await localStorage.setItem('@token', json.token)
      setToken(json.token)
    } catch (err) {
      // Roman - registration error
      console.log(err)
    }
  }

  const login = async () => {
    try {
      const loginRes = await fetch(`${authServer}/authenticate`, {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const loginJson = await loginRes.json()
      await localStorage.setItem('@token', loginJson.token)

      setToken(loginJson.token)
    } catch (err) {
      // Roman - handle login error
      console.log(err)
    }
  }

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
