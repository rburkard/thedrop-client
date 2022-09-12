export enum AuthStates {
  Unauthenticated = 'Unauthenticated',
  Loading = 'Loading',
  Authenticated = 'Authenticated',
}

export enum AuthType {
  Registration = 'Registration',
  Login = 'Login',
}

export type UserDataT = {
  username: string
}

export type RegistrationDataT = {
  // email: string
  username: string
  password: string
}

export type LoginDataT = {
  username: string
  password: string
}

export type LeaderboardT = {
  username: string
  time: number
}

export type DropDataT = {
  _id: string
  startDate: number
  hint: {
    offset: number
    text: string
  }
  question: string
  lastLeaderboard: Array<LeaderboardT>
}

export type DropSolutionT = {
  _id: string
  riddleId: string
  userId: string
  timestamp: number
  correct: boolean
}
