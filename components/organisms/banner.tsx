"use client";
import { useEffect, useState } from "react";
import Icon from "../atoms/icon";
import SideMenu from "./sidemenu";
import IconKind from "../types/enums/iconkind";
import SearchForm from "./searchform";
import Link from "next/link";
import JobForm from "./jobform";
import Image from "next/image";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface BannerProps {
    user: UserProfile | undefined;
}

const Banner = ({ user }: BannerProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
    const [isJobFormOpen, setIsJobFormOpen] = useState(false);

    useEffect(() => {
        console.log("Banner user", user);
    }, [user]);

    const handleLogout = () => {
        window.location.href = "/api/auth/logout";
    };

    const handleToggleSideMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleToggleSearchForm = () => {
        setIsSearchFormOpen(!isSearchFormOpen);
    };
    const handleToggleJobForm = () => {
        setIsJobFormOpen(!isJobFormOpen);
    };

    return (
        <header className=" w-full sticky top-3 justify-between items-center mb-7 h-10">
            <nav className="flex p-4 m-auto w-full sticky top-0  mb-7 items-center justify-center h-10">
                {isSearchFormOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 m-auto">
                        <SearchForm
                            handleToggleSearchForm={handleToggleSearchForm}
                        />
                    </div>
                )}
                {isJobFormOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-20">
                        <JobForm
                            handleToggleJobForm={handleToggleJobForm}
                            user={user}
                        />
                    </div>
                )}

                <SideMenu isMenuOpen={isMenuOpen} />
                <Icon iconKind={IconKind.Menu} onClick={handleToggleSideMenu} />
                <Icon
                    iconKind={IconKind.Search}
                    onClick={handleToggleSearchForm}
                />
                <Icon iconKind={IconKind.Add} onClick={handleToggleJobForm} />
                <Icon iconKind={IconKind.Logout} onClick={handleLogout} />
                <Link href="/">
                    <Image
                        src="/shark.png"
                        alt="Shark"
                        width={35}
                        height={35}
                    />
                </Link>
            </nav>
        </header>
    );
};

export default Banner;
