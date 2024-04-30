'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";


async function getMemberId() {
    const response = await fetch('/api/members');
    
    return response.json();
}

const Profile = () => {
    const params = useParams<{ tag: string; item: string }>()

    console.log(params)
    return (
        <div className=" border border-solid w-[500px] rounded-lg min-h-[300px] overflow-hidden flex flex-col justify-start">
            <header className="flex relative bg-gray-200 w-full h-[150px] ">
                <div className=" w-20 h-20 bg-slate-600 rounded-full absolute -bottom-10 left-10" />
            </header>
            <main className=" flex flex-col py-10 px-10 ">
                <div className=" w-full flex justify-between py-5 items-center">
                    <h2 className=" capitalize"></h2>
                    <p className=""></p>
                </div>
                <Separator/>
            </main>
        </div>
    );
}

export default Profile;