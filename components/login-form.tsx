'use client';

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { FormEvent } from "react";
import { useRouter } from 'next/navigation'




export default function LoginForm() {
    
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { data: session, status } = useSession();
//     const [isLoading, setIsLoading] = useState(false);
    
//     const mutation = useMutation({
//       mutationFn: login, 
//       onSuccess: (data : any) => {
//         console.log('Member created:', data);
//         // Handle success scenario (e.g., clear form, show success message)
//       },
//       onError: (error: any) => {
//         console.error('Error creating member:', error);
//         // Handle error scenario (e.g., display error message)
//       },
//   });
//     const onSubmit = async (data: any) => {
//         mutation.mutate(data)  
//     };

    const router = useRouter()
    
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            router.push('/dashboard')
        } else {
            // Handle errors
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4">

            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                </Link>
                </div>
                <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                />
            </div>
            <Button type="submit" className="w-full" >
                {/* {mutation.isPending ? <Loader2 className="animate-spin" /> : "Login"} */}
                Login
            </Button>
            </div>
            <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="underline">
                Sign up
            </Link>
            </div>
        </form>
    )
}