import Link from "next/link";

const profile: React.FC = () => {
    return (  
        <>
        <h1>Profile</h1>
        <a href="/api/auth/login">Login</a>
        </>
    );
}
 
export default profile;