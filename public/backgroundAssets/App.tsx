import { StatusBar } from 'expo-status-bar'
import { ReactNode, useEffect, useState } from 'react'
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import styled from 'styled-components'
// @ts-ignore
import CountDown from 'react-native-countdown-component'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  AuthStates,
  AuthType,
  DropDataT,
  DropSolutionT,
  LoginDataT,
  RegistrationDataT,
  UserDataT,
} from './src/types'
import { CustomButton } from './src/components/CustomButton'

const LogoSrc = require('./assets/icon.png')

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

export default function App() {
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

      await AsyncStorage.setItem('@token', json.token)
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
      await AsyncStorage.setItem('@token', loginJson.token)

      setToken(loginJson.token)
    } catch (err) {
      // Roman - handle login error
      console.log(err)
    }
  }

  const [dropData, setDropData] = useState<DropDataT>({
    _id: 'abc',
    startDate: new Date().getTime(),
    hint: {
      offset: 1000 * 60 * 30,
      text: 'anything',
    },
    question: 'Anything?',
    lastLeaderboard: [
      {
        username: 'Luke',
        time: 2000,
      },
      {
        username: 'Roman',
        time: 10000,
      },
    ],
  })

  const [solutionData, setSolutionData] = useState<DropSolutionT>()

  const [solution, setSolution] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('@token').then((t) => {
      if (t) {
        setToken(t)
      } else {
        setAuthState(AuthStates.Unauthenticated)
      }
    })
  }, [])

  const getAuthUser = async (accessToken: string) => {
    try {
      const authRes = await fetch(`${appServer}/app-user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': accessToken,
        },
      })

      if (authRes.status !== 200) {
        throw new Error('failed')
      }

      const authJson = await authRes.json()
      setAuthState(AuthStates.Authenticated)
      setUser(authJson)
    } catch (err) {
      setAuthState(AuthStates.Unauthenticated)
      await AsyncStorage.clear()
    }
  }

  useEffect(() => {
    if (token) {
      AsyncStorage.setItem('@token', token)
      getAuthUser(token)
    }
  }, [token])

  console.log('token: ', token)

  const renderAppView = (): ReactNode => {
    if (solutionData && solutionData.correct) {
      return (
        <>
          <Logo source={LogoSrc} />
          <Text>Correct</Text>
          <Text>+ 200 XP</Text>
          <CustomButton onPress={() => {}} label="Access Location" />
          <Text>0 members reached the location, 6900 XP available</Text>
          <CustomButton onPress={() => {}} label="Scan QR Code" />
        </>
      )
    }

    if (solutionData && !solutionData.correct) {
      return (
        <>
          <Logo source={LogoSrc} />
          <Text>{dropData.question}</Text>
          <SolutionInput
            value={solution}
            onChangeText={setSolution}
          ></SolutionInput>
          <CustomButton onPress={() => {}} label="Hint" />
          <CustomButton onPress={() => {}} label="Submit" />
        </>
      )
    }

    if (dropData && dropData.startDate > new Date().getTime()) {
      return (
        <>
          <Logo source={LogoSrc} />
          <CountDown
            until={200}
            style={{ marginTop: 24 }}
            digitStyle={{ backgroundColor: 'red' }}
            digitTxtStyle={{ color: 'white' }}
            timeLabelStyle={{ display: 'none' }}
          />
          <Text>Last Leaderboard</Text>
          <View style={{ marginTop: 48, marginBottom: 48 }}>
            {dropData.lastLeaderboard.map((u) => (
              <View>
                <Text>{u.username}</Text>
                <Text>{u.time} ms</Text>
              </View>
            ))}
          </View>
          {/* Roman - 2 ways to make a button */}

          <CustomButton onPress={() => {}} label="Set Reminder" />
          <CustomButton onPress={() => {}} label="Access Riddle" />
        </>
      )
    }

    if (dropData && dropData.startDate < new Date().getTime()) {
      return (
        <>
          <Logo source={LogoSrc} />
          <Text>Drop ongoing</Text>
          <CustomButton onPress={() => {}} label="Access Riddle" />
        </>
      )
    }

    return (
      <>
        <Text>Drop Loading...</Text>
      </>
    )
  }

  const renderAuthView = (): ReactNode => {
    switch (authState) {
      case AuthStates.Unauthenticated:
        return (
          <>
            {[AuthType.Login, AuthType.Registration].map((type) => (
              <TouchableOpacity key={type} onPress={() => setAuthType(type)}>
                <Text>{type}</Text>
              </TouchableOpacity>
            ))}
            <View>
              {authType === AuthType.Registration ? (
                <>
                  {registrationInputs.map((i) => (
                    <RegistrationItem key={i.key}>
                      <RegistrationLabel>{i.label}</RegistrationLabel>
                      <RegistrationInput
                        value={registrationData[i.key]}
                        onChangeText={(value) => {
                          setRegistrationData({
                            ...registrationData,
                            [i.key]: value,
                          })
                        }}
                      />
                    </RegistrationItem>
                  ))}
                  <CustomButton
                    onPress={() => {
                      register()
                    }}
                    label="Register"
                  />
                </>
              ) : (
                <>
                  {loginInputs.map((i) => (
                    <RegistrationItem key={i.key}>
                      <RegistrationLabel>{i.label}</RegistrationLabel>
                      <RegistrationInput
                        value={registrationData[i.key]}
                        onChangeText={(value) => {
                          setRegistrationData({
                            ...registrationData,
                            [i.key]: value,
                          })
                        }}
                      />
                    </RegistrationItem>
                  ))}
                  <CustomButton
                    onPress={() => {
                      login()
                    }}
                    label="Login"
                  />
                </>
              )}
            </View>
          </>
        )

      case AuthStates.Authenticated:
        return renderAppView()
    }
  }

  return (
    <SafeAreaView>
      <Wrapper>{renderAuthView()}</Wrapper>
    </SafeAreaView>
  )
}

const SolutionInput = styled(TextInput)`
  width: 100%;
  height: 48px;
  border: 1px solid red;
  margin: 24px 0;
`

const RegistrationLabel = styled(Text)``
const RegistrationItem = styled(View)``
const RegistrationInput = styled(TextInput)`
  border: 1px solid red;
`

const Wrapper = styled(View)`
  width: 100%;
  padding: 48px 16px;
  height: 100%;
  align-items: center; ;
`

const Logo = styled(Image)`
  width: 145px;
  height: 170px;
`
