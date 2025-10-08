"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden ml-0 md:ml-64">
                {/* Header */}
                <Header />

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
}