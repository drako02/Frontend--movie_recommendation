'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function TiTleBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        // router.push('/login');
    }

    return (
        <header className="bg-[#1A1D1F] border-b-[]">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        Logo here
                        
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={ () => setMobileMenuOpen(true) }
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    

                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-50">
                        Home
                    </Link>
                    <Link href="/explore" className="text-sm font-semibold leading-6 text-gray-50">
                        Explore
                    </Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-50">
                        Features
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/login" onClick={handleLogout} className="text-sm font-semibold leading-6 text-gray-50">
                        Log out <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog open={ mobileMenuOpen } onClose={ setMobileMenuOpen } className="lg:hidden ">
                <div className="fixed inset-0 z-10 " />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#1A1D1F] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            Logo here
                        </Link>
                        <button
                            type="button"
                            onClick={ () => setMobileMenuOpen(false) }
                            className="-m-2.5 rounded-md p-2.5 text-[#8f9194]"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-[#8f9194]"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-[#8f9194]"
                                >
                                    Explore
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-[#8f9194]"
                                >
                                    Features
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/login"
                                    onClick={handleLogout}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-[#8f9194]"
                                >
                                    Log out
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
