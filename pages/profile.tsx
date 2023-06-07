import Link from "next/link";

const profile: React.FC = () => {
    return (  
        <>
        <h1>Profile</h1>
        <Link href="/api/auth/login">Login</Link>
        </>
    );
}
 
export default profile;