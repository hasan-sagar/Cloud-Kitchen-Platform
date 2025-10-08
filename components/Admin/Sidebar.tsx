"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu,
    Home,
    ChartArea,
    Package,
    Tag,
    Settings,
} from "lucide-react";

const menuItems = [
    { icon: ChartArea, label: "Dashboard", href: "/admin/dashboard" },
    { icon: Home, label: "Restaurants", href: "/admin/restaurants" },
    { icon: Tag, label: "Menu Items", href: "/admin/menu-items" },
    { icon: Package, label: "Orders", href: "/admin/orders" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden fixed top-3 left-4 z-50 p-2 bg-primary
                 text-white rounded-full shadow-md transition-colors duration-200"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle Sidebar"
            >
                <Menu size={22} />
            </button>

            {/* Sidebar */}
            <aside
                className={`bg-white text-dark w-64 h-screen fixed 
                    top-0 left-0 transition-transform duration-300 
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 z-40 border-r shadow-sm`}
            >
                <div className="p-4 border-b">
                    <h1 className="text-lg text-primary font-semibold uppercase text-start ml-4">
                        Admin Panel
                    </h1>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-medium ${isActive
                                            ? "bg-light text-primary"
                                            : "text-textdark3"
                                            }`}
                                    >
                                        <item.icon size={16} />
                                        <span className="text-sm">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
}
