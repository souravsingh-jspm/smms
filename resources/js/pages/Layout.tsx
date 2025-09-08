import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Mail, MapPin, Menu, Phone, Twitter, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Call for Papers', href: '/call-for-papers' },
    { name: 'Paper Overview', href: '/paper-overview' },
    { name: 'Committees', href: '/committees' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Pune Darshan', href: '/pune-darshan' },
];

export default function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <header className="border-b-4 border-conference-blue bg-white shadow-lg">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-conference-blue">
                                    <span className="text-xl font-bold text-white">J</span>
                                </div>
                                <div className="hidden md:block">
                                    <div className="text-lg font-bold text-conference-blue">JSPM University</div>
                                    <div className="text-sm font-medium text-conference-red">SMMS Conference</div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center space-x-1 lg:flex">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                        location.pathname === item.href
                                            ? 'bg-red-50 text-conference-red'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-conference-blue'
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
                                        to={item.href}
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
                                <div className="pt-4">
                                    <Button asChild className="w-full bg-conference-red font-semibold text-white hover:bg-conference-red/90">
                                        <Link to="/call-for-papers" onClick={() => setMobileMenuOpen(false)}>
                                            Submit Paper
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="bg-conference-blue text-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* About */}
                        <div>
                            <div className="mb-4 flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                                    <span className="text-lg font-bold text-conference-blue">J</span>
                                </div>
                                <div>
                                    <div className="text-lg font-bold">JSPM University</div>
                                    <div className="text-conference-red-100 text-sm">SMMS</div>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-blue-100">
                                International Conference on Emerging Trends in Mechanical Manufacturing Sciences
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                            <ul className="space-y-2">
                                {navigation.slice(0, 4).map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.href} className="text-sm text-blue-100 transition-colors duration-200 hover:text-white">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* More Links */}
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Conference</h3>
                            <ul className="space-y-2">
                                {navigation.slice(4).map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.href} className="text-sm text-blue-100 transition-colors duration-200 hover:text-white">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <MapPin size={16} className="mt-1 text-blue-200" />
                                    <div className="text-sm text-blue-100">
                                        <p>JSPM University</p>
                                        <p>School of Mechanical Manufacturing Sciences</p>
                                        <p>Pune, Maharashtra, India</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail size={16} className="text-blue-200" />
                                    <span className="text-sm text-blue-100">conference@jspm.edu.in</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone size={16} className="text-blue-200" />
                                    <span className="text-sm text-blue-100">+91 20 1234 5678</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-6">
                                <h4 className="mb-3 font-medium">Follow Us</h4>
                                <div className="flex space-x-3">
                                    <a
                                        href="#"
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition-colors duration-200 hover:bg-blue-500"
                                    >
                                        <Facebook size={16} />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition-colors duration-200 hover:bg-blue-500"
                                    >
                                        <Twitter size={16} />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition-colors duration-200 hover:bg-blue-500"
                                    >
                                        <Linkedin size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 border-t border-blue-600 pt-8 text-center">
                        <p className="text-sm text-blue-100">
                            © 2024 JSPM University - School of Mechanical Manufacturing Sciences. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
