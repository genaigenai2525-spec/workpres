import { Mail, Download } from 'lucide-react';

export function CTA() {
    return (
        <section id="contact" className="py-24 bg-primary relative overflow-hidden text-center text-white">
            <div className="container-custom relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    まずは、<br />
                    自社の業務が<br />
                    どれくらい圧縮できるかを<br />
                    確認してみませんか？
                </h2>

                <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mb-12 text-left md:text-center">
                    <p className="text-lg mb-6">
                        業務圧縮くんでは、<br />
                        いきなり契約や外注を前提とした<br />
                        ご提案は行っていません。
                    </p>
                    <p className="text-lg mb-6">
                        現在の業務内容とコストをもとに、
                    </p>
                    <ul className="inline-block text-left text-lg font-bold mb-8 space-y-2 mx-auto list-disc pl-6 md:pl-0">
                        <li>どの業務が外に出せるか</li>
                        <li>どれくらいコストを下げられるか</li>
                        <li>業務移行に無理がないか</li>
                    </ul>
                    <p className="text-lg">
                        を、無料で整理します。
                    </p>
                </div>

                <p className="text-xl md:text-2xl font-bold mb-10">
                    「本当に安くなるのか」<br />
                    「外に出して問題ないのか」<br />
                    <span className="inline-block mt-4 border-b-2 border-secondary pb-1">まずは、そこを確認するだけで構いません。</span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#" className="bg-white text-primary font-bold py-5 px-10 rounded-full shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg min-w-[300px]">
                        <Download size={24} />
                        資料をダウンロード
                    </a>
                    <a href="#" className="bg-secondary text-white font-bold py-5 px-10 rounded-full shadow-xl hover:bg-secondary-hover hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg min-w-[300px]">
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
