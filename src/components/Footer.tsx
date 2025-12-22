import { Mail, Download } from 'lucide-react';

export function CTA() {
    return (
        <section id="contact" className="py-20 bg-primary relative overflow-hidden text-center">
            <div className="container-custom relative z-10 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    まずは、自社の業務がどれくらい圧縮できるか<br />確認してみませんか？
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-12">
                    相談・シミュレーションは無料です。お気軽にお問い合わせください。
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#" className="bg-white text-primary font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg min-w-[280px]">
                        <Download size={24} />
                        資料をダウンロード
                    </a>
                    <a href="#" className="bg-secondary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-secondary-hover hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg min-w-[280px]">
                        <Mail size={24} />
                        無料シミュレーション
                    </a>
                </div>
            </div>

            {/* Background circles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-text text-white py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="text-2xl font-bold mb-4 md:mb-0">業務圧縮くん</div>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">運営会社</a>
                        <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
                        <a href="#" className="hover:text-white transition-colors">利用規約</a>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Siemple Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
