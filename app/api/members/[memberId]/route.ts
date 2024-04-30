import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server';

 
export async function GET(request: Request, {params}:{params: any}) {
  try {
    const { memberId } = params;

    const members = await prisma.user.findUnique({
        where: {
          id: memberId,
        },
      })
    console.log(members);
    return NextResponse.json(members); // Return only the data
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to retrieve members' }, { status: 500 });
  }
}