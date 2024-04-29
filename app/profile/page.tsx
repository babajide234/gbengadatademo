import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
    return (
        <Card className="mx-auto">
            <CardHeader>
                <div className=" flex flex-col items-center">
                    <div className=" bg-black/20 w-20 h-20 rounded-full"/>
                    <CardTitle className="text-2xl">Babajide Tomoshegbo</CardTitle>
                    <CardDescription>
                        
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className=" w-[600px]">

                </div>
            </CardContent>
        </Card>
    );
}

export default Profile;