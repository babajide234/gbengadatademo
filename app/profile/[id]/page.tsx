'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


// async function getMemberId(id:string) {
//     const response = await fetch(`/api/members/${id}`);
    
//     return response.json();
// }

interface MemberData {
    title: string;
    surname: string;
    firstName: string;
    otherNames?: string; // Optional property
    gender: string;
    phoneNumber: string;
    emailAddress: string;
    address: string;
    state: string;
    lga: string;
    ward?: string; // Optional property (based on API response)
    wardCode?: string; // Optional property (based on API response)
    pollingUnitCode: string;
    inecVotingCardNumber: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
const Profile =  () => {
    const { id } = useParams<{ id: string;}>()
    const [data, setData] = useState<MemberData | null>(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/api/members/${id}`);
            const memberData = await response.json();
            console.log(memberData)
            setData(memberData);
          } catch (err) {
            console.error('Error fetching member data:', err);
          } finally {
          }
        };
    
        fetchData();
      }, [id]);

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
                <div className=" w-full flex flex-col py-5 items-center">
                    <div className=" w-full flex justify-between py-5 items-center">
                        <h2 className=" capitalize">name:</h2>
                        <p className=" capitalize">{data?.title}{". "}{data?.surname}{" "}{data?.firstName}{" "}{data?.otherNames}</p>
                    </div>
                    <Separator/>
                    <div className=" w-full flex justify-between py-5 items-center">
                        <h2 className=" capitalize">gender:</h2>
                        <p className=" capitalize">{data?.gender}</p>
                    </div>
                    <Separator/>
                    <div className=" w-full flex justify-between py-5 items-center">
                        <h2 className=" capitalize">phone number:</h2>
                        <p className=" capitalize">{data?.phoneNumber}</p>
                    </div>
                    <Separator/>
                    <div className=" w-full flex justify-between py-5 items-center">
                        <h2 className=" capitalize">email:</h2>
                        <p className=" capitalize">{data?.emailAddress}</p>
                    </div>
                    <Separator/>
                    <div className=" w-full flex justify-between py-5 items-center">
                        <h2 className=" capitalize">address:</h2>
                        <div className="">
                            <p className=" capitalize">{data?.address}</p>
                            <p className=" capitalize">{data?.state}</p>
                            <p className=" capitalize">{data?.lga}</p>
                        </div>
                    </div>
                    <Separator/>
                </div>
            </main>
        </div>
    );
}

export default Profile;