import Facebook from '@/assets/images/Facebook.png';
import Instagram from '@/assets/images/Instagram.png';
import LinkedIn from '@/assets/images/LinkedIn.png';
import { Link } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function AboutUs() {
    const universityLink = 'https://jspmuni.ac.in/';

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        // { name: 'Call for Papers', href: '/call-for-papers' },
        { name: 'Paper Overview', href: '/paper-overview' },
        { name: 'Committees', href: '/committee' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Pune Darshan', href: '/pune-darshan' },
    ];
    return (
        <>
            <footer className="bg-conference-blue text-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* About */}
                        <div>
                            <a href={universityLink} className="mb-4 flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                                    <span className="text-lg font-bold text-conference-blue">J</span>
                                </div>
                                <div className="text-white">
                                    <div className="text-lg font-bold">JSPM University</div>
                                    <div className="text-conference-red-100 text-sm">SMMS</div>
                                </div>
                            </a>
                            <p className="text-sm leading-relaxed text-blue-100">
                                International Conference on Emerging Trends in Mechanical Manufacturing Sciences
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                            <ul className="space-y-2">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm text-white transition-colors duration-200 hover:text-white">
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
                                {navigation.slice(2, 5).map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm text-white transition-colors duration-200 hover:text-white">
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
                                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full duration-200">
                                        <img src={Facebook} />
                                    </a>
                                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full">
                                        <img src={Instagram} />
                                    </a>
                                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full">
                                        <img src={LinkedIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 border-t border-blue-600 pt-8 text-center">
                        <p className="text-sm text-blue-100">
                            © 2025 JSPM University - School of Mechanical Manufacturing Sciences. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>{' '}
        </>
    );
}
