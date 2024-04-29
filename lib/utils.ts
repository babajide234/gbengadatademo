import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import prisma from "./prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export async function saltAndHashPassword(password: string): Promise<string> {
//   const hashedPassword = await createHash(password, 10); // Salt factor of 10
//   return hashedPassword;
// }


export async function getUserFromDb (email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email
    },
  });
  return user;
}

export async function getMembers(){
  const response = await prisma.members.findMany({
      take: 5, 
      orderBy: {
        createdAt: 'desc'
      }
  });    
  return await response;
}


export async function compare(d1: string, d2: string) {
  return d1.toLowerCase() === d2.toLowerCase();
}


export async function generateSalt(length: number) {
  // Use a cryptographically secure random number generator
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:\'\"\'\\|,.<>/?';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function hashString(str: string, slt: number) {
  const salt = generateSalt(slt); 
  const saltedString = salt + str;

  let hash = 0;
  for (let i = 0; i < saltedString.length; i++) {
    const charCode = saltedString.charCodeAt(i);
    hash = (hash << 5) ^ charCode;
    hash += charCode;
  }
  return hash.toString(16);
}