import Footer from '@/pages/Footer';
import Navbar from '@/pages/Navbar';
interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="">
            <Navbar />
            <main className="">{children}</main>
            <Footer />
        </div>
    );
}
