import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server';
 
 
export async function GET(request: Request) {
  try {
    const members = await prisma.member.findMany();
    return NextResponse.json(members); // Return only the data
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to retrieve members' }, { status: 500 });
  }
}