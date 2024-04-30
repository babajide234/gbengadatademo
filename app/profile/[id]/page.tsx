'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useParams } from "next/navigation";


async function getMemberId(id:string) {
    const response = await fetch(`/api/members/${id}`);
    
    return response.json();
}

const Profile = () => {
    const { id } = useParams<{ id: string;}>()
    const data = getMemberId(id)

    return (
        <div className=" border border-solid w-[500px] rounded-lg min-h-[300px] overflow-hidden flex flex-col justify-start">
            <header className="flex relative bg-gray-200 w-full h-[150px] ">
                <div className=" w-20 h-20 bg-slate-600 rounded-full absolute -bottom-10 left-10 overflow-hidden" >
                    <Image
                        src={'/profile.jpeg'}
                        alt={'profile picture'}
                        fill={true}
                    />
                </div>
            </header>
            <main className=" flex flex-col py-10 px-10 ">
                <div className=" w-full flex flex-col justify-start py-5 items-center">
                    <h2 className=" capitalize">babajide tomoshegbo</h2>
                    <p className="">email@email.com</p>
                    <Separator/>
                </div>
            </main>
        </div>
    );
}

export default Profile;