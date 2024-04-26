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
export async function POST(request: Request) {
  try {
    const newMemberData = await request.json();
    console.log(newMemberData);

    // Create a new member in Prisma
    const member = await prisma.member.create({
      data: newMemberData,
    });

    // // Return the newly created member data
    return NextResponse.json(member);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create member' }, { status: 500 });
  }
}