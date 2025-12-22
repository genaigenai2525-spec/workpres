import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
            <div className="container-custom py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#" className="text-2xl font-bold text-primary tracking-tight">
                        業務圧縮くん
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="text-text hover:text-primary transition-colors font-medium">特徴</a>
                    <a href="#flow" className="text-text hover:text-primary transition-colors font-medium">導入の流れ</a>
                    <a href="#case-study" className="text-text hover:text-primary transition-colors font-medium">事例</a>

                    <a href="#contact" className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary-light transition-colors">
                        資料ダウンロード
                    </a>
                    <a href="#contact" className="px-6 py-2 bg-secondary text-white font-bold rounded-full hover:bg-secondary-hover shadow-md transition-all transform hover:-translate-y-0.5">
                        お問い合わせ
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full p-4 shadow-lg flex flex-col space-y-4">
                    <a href="#features" className="text-text font-medium py-2" onClick={() => setIsMenuOpen(false)}>特徴</a>
                    <a href="#flow" className="text-text font-medium py-2" onClick={() => setIsMenuOpen(false)}>導入の流れ</a>
                    <a href="#case-study" className="text-text font-medium py-2" onClick={() => setIsMenuOpen(false)}>事例</a>
                    <a href="#contact" className="text-center py-3 border-2 border-primary text-primary font-bold rounded-full" onClick={() => setIsMenuOpen(false)}>
                        資料ダウンロード
                    </a>
                    <a href="#contact" className="text-center py-3 bg-secondary text-white font-bold rounded-full" onClick={() => setIsMenuOpen(false)}>
                        お問い合わせ
                    </a>
                </div>
            )}
        </header>
    );
}
