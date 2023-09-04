import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username"
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password"
        }
      },
      async authorize(credentials) {
        //retriev proper user data here.
        //to verify creds. Hard-coed for testing
        const user = {name: process.env.USERNAME, password: process.env.USERSECRET}

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user
        }
        else {
          return null
        }
      }
    })
  ]
}

