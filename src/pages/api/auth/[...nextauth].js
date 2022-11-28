import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "../../../services/api";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { data } = await api.post(
          "/petTutors/autentication",
          credentials
        );

        if (data) {
          return data;
        }

        return null;
      },
    }),
  ],
  pages: {
    login: "/login",
    // error: "/404"
  },
  callbacks: {
    async signIn({ user }) {
      if (user.authenticated) return true;
      return false;
    },
  },
};

export default NextAuth(authOptions);
