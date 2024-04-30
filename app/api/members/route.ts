import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server';
 
 
export async function GET(request: Request) {
  try {
    const members = await prisma.members.findMany();
    return NextResponse.json(members); 
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to retrieve members' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const newMemberData = await request.json();
    console.log(newMemberData);
    // 1. Create a new User
    const user = await prisma.user.create({
      data: {
        name: newMemberData.firstName + '' + newMemberData.otherNames + '' + newMemberData.surname,
        email: newMemberData.emailAddress,
        password: '123456',
      },
    });

    // 2. Create a new Member with the created user's ID
    const member = await prisma.members.create({
      data: {
        ...newMemberData, // Include relevant member data (excluding user-specific data)
        userId: user.id, // Use the newly created user's ID
      },
    });
    

    // // Return the newly created member data
    return NextResponse.json(member);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create member' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const memberId = request.url.split('/').pop(); // Extract member ID from URL
    const updatedMemberData = await request.json();

    if (!memberId) {
      throw new Error('Missing member ID in request URL');
    }

    const member = await prisma.members.update({
      where: { id: memberId },
      data: updatedMemberData,
    });

    if (member) {
      return NextResponse.json(member);
    } else {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update member' }, { status: 500 });
  }
}


export async function PATCH(request: Request) {
  try {
    const memberId = request.url.split('/').pop(); // Extract member ID from URL
    const updatedMemberData = await request.json();

    if (!memberId) {
      throw new Error('Missing member ID in request URL');
    }

    const member = await prisma.members.update({
      where: { id: memberId },
      data: updatedMemberData,
    });

    if (member) {
      return NextResponse.json(member);
    } else {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update member' }, { status: 500 });
  }
}


export async function DELETE(request: Request) {
  try {
    const memberId = request.url.split('/').pop(); // Extract member ID from URL

    if (!memberId) {
      throw new Error('Missing member ID in request URL');
    }

    const member = await prisma.members.delete({ where: { id: memberId } });

    if (member) {
      return NextResponse.json({ message: 'Member deleted successfully' });
    } else {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete member' }, { status: 500 });
  }
}