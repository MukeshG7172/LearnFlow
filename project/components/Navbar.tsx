import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = async () =>{
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <p className="flex z-40 font-semibold">
                    LINK<span className="text-green-600">FLOW</span>
                </p>
                <div className="h-full flex items-center space-x-4">
                    {user ? (
                        <>
                            <Link href='/api/auth/logout' className={buttonVariants({
                                size: 'sm', 
                                variant: 'ghost',
                            })}>Sign Out</Link>
                        </>
                    ):(
                        <>
                            <Link href='/api/auth/register' className={buttonVariants({
                                size: 'sm', 
                                variant: 'ghost',
                            })}>Sign Up</Link>
                            <Link href='/api/auth/login' className={buttonVariants({
                                size: 'sm', 
                                variant: 'ghost',
                            })}>Login</Link>
                        </>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
    )
}
export default Navbar