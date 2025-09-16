import { Button } from '@/components/ui/button';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
interface LayoutProps {
    children: React.ReactNode;
}

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Call for Papers', href: '/call-for-papers' },
    { name: 'Paper Overview', href: '/paper-overview' },
    { name: 'Committees', href: '/committee' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Pune Darshan', href: '/pune-darshan' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage(); // gives current URL

    return (
        <>
            <nav className="mx-auto max-w-7xl border-black px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-conference-blue">
                                <span className="text-xl font-bold text-white">J</span>
                            </div>
                            <div className="hidden md:block">
                                <div className="text-lg font-bold text-conference-blue">JSPM University</div>
                                <div className="text-sm font-medium text-conference-red">SMMS Conference</div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-1 lg:flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href} // ✅ use href (not "to")
                                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    url === item.href ? 'bg-red-50 text-conference-red' : 'text-gray-700 hover:bg-blue-50 hover:text-conference-blue'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden items-center space-x-4 md:flex">
                        <Button asChild className="bg-conference-red font-semibold text-white hover:bg-conference-red/90">
                            <Link to="/call-for-papers">Submit Paper</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="space-y-1 border-t bg-white px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                        location.pathname === item.href
                                            ? 'bg-red-50 text-conference-red'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-conference-blue'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {/* <div className="pt-4">
                                <Button asChild className="w-full bg-conference-red font-semibold text-white hover:bg-conference-red/90">
                                    <Link to="/call-for-papers" onClick={() => setMobileMenuOpen(false)}>
                                        Submit Paper
                                    </Link>
                                </Button>
                            </div> */}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
