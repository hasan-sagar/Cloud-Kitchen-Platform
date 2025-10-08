import { LogOutIcon } from "lucide-react";

export default function Header() {
    const adminName = "Admin";

    return (
        <header className="bg-white shadow-md p-5 flex justify-between items-center">
            <div className="flex items-center space-x-4 ml-auto">

                <span className="font-medium bg-accent px-2 
                py-1 text-white rounded-md">{adminName}</span>
                <span
                    className="text-mutedColor"
                >
                    <LogOutIcon className="text-red-600 cursor-pointer" size={20} />
                </span>
            </div>
        </header>
    );
}