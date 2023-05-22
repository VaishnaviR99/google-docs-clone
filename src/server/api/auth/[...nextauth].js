import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {FirebaseAdapter} from "@next-auth/firebase-adapter"
import {db} from "../../../firebase"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
    // ...add more providers here
  ],





  adapter : FirebaseAdapter(db),
}

export default NextAuth(authOptions)