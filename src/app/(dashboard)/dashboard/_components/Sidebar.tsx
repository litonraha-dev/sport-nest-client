'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Building2, CalendarCheck, Plus, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const dashboardLinks = [
    {
        href: '/dashboard/add-facility',
        label: 'Add Facility',
        icon: Plus,
    },
    {
        href: '/dashboard/my-bookings',
        label: 'My Bookings',
        icon: CalendarCheck,
    },
    {
        href: '/dashboard/my-facilities',
        label: 'My Facilities',
        icon: Building2,
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className='flex h-screen w-64 shrink-0 flex-col border-r bg-white'>
            <div className='flex h-16 items-center gap-2 border-b px-5'>
                <span className='flex size-8 items-center justify-center rounded-lg bg-black text-white'>
                    <Trophy className='size-4' />
                </span>
                <span className='text-lg font-semibold tracking-tight'>
                    SportNest
                </span>
            </div>

            <nav className='flex flex-col gap-1 p-3'>
                {dashboardLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900',
                                isActive && 'bg-slate-900 text-white hover:bg-slate-900 hover:text-white'
                            )}
                        >
                            <link.icon className='size-4' />
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            <div className='mt-auto border-t p-3'>
                <Link
                    href='/'
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900'
                >
                    <ArrowLeft className='size-4' />
                    Back to site
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
