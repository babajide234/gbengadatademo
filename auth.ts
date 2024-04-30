import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { compare, getUserFromDb } from "@/lib/utils"
import { signInSchema } from "@/lib/zod"
import { authConfig } from '@/auth.config';
import { z } from 'zod';
import { User } from "@/lib/definations"

async function getUser(email: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      return user;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      throw new Error("Failed to fetch user.");
    }
  }

export const { handlers: { GET, POST}, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
      Credentials({
        name:'credentials',
        async authorize(credentials) {
            const parsedCredentials = z
              .object({ email: z.string().email(), password: z.string().min(6) })
              .safeParse(credentials);

              console.log("parsed", parsedCredentials);
              
              if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;

                const user = await getUser(email);
                console.log("user",user)

                if (!user) return null;
                
                // const passwordsMatch = await compare(password, user.password);
                // console.log("pmatch",passwordsMatch)
                // if (passwordsMatch) return user;
              }
       
              console.log('Invalid credentials');
              return null;
          },
    }),
  ],
});
 


