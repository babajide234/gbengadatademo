import { PrismaAdapter } from '@auth/prisma-adapter';
import type { NextAuthConfig } from 'next-auth';
import prisma from './lib/prisma';

export const authConfig = {
  adapter: PrismaAdapter(prisma),

  callbacks: {

  },
  providers:[],
} satisfies NextAuthConfig;