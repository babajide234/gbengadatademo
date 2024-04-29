import { signIn } from '@/auth'
import { NextResponse } from 'next/server'
 
export async function POST(req: Request) {
    try {
      const { email, password } = await req.json();
      const user = await signIn('credentials', { email, password });
  
        return NextResponse.json(user);
    } catch (error) {
      console.error(error); // Log the error for debugging
      if (error.type === 'CredentialsSignin') {
        // Handle invalid credentials error
        return NextResponse.json({ error: 'Invalid credentials.' });
      } else {
        // Handle other errors more gracefully
        return NextResponse.json({ error: 'An error occurred. Please try again.' });
      }
    }
  }