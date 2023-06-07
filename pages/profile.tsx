import Link from "next/link";

const profile = () => {
    return (  
        <>
        <h1>Profile</h1>
        <Link href="/api/auth/login">Login</Link>
        </>
    );
}
 
export default profile;