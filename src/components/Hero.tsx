import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-light via-white to-white overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 rounded-l-full opacity-50 -z-10 translate-x-1/2"></div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block bg-white text-primary px-4 py-1 rounded-full text-sm font-bold border border-primary shadow-sm mb-2">
                                AI BPOサービス「業務圧縮くん」
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-text">
                                その業務コスト、<br />
                                <span className="text-primary relative inline-block">
                                    もっと安く
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200/50 -z-10 rounded-sm"></span>
                                </span>
                                外注できます。
                            </h1>
                            <p className="text-lg lg:text-xl text-text-light leading-relaxed">
                                企業の業務を <span className="text-secondary font-bold text-2xl">0.8～0.9倍</span> のコストで引き受ける<br className="hidden lg:block" />
                                AIを活用したBPOサービス
                            </p>
                        </div>

                        {/* Checkpoints */}
                        <ul className="space-y-4">
                            {[
                                "毎月の業務コストを、確実に下げられる",
                                "人件費・固定費を、外注費に置き換えられる",
                                "業務を手放しても、品質は維持できる"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                    <CheckCircle className="text-secondary mt-1 shrink-0" size={20} fill="#F7A334" color="white" />
                                    <span className="font-bold text-text">{text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="btn-secondary text-center flex items-center justify-center gap-2">
                                無料シミュレーション
                                <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn-primary text-center bg-white text-primary border-2 border-primary hover:bg-primary-light hover:text-primary pt-3">
                                資料ダウンロード
                            </a>
                        </div>
                    </div>

                    {/* Right Image (Generated Placeholder for now) */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                            {/* Abstract UI Representation of Cost Reduction */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                                    <div className="text-center w-1/3">
                                        <div className="h-32 bg-gray-300 rounded-t-lg w-full mx-auto relative group">
                                            <span className="absolute bottom-full mb-2 w-full text-center font-bold text-gray-500">現在</span>
                                        </div>
                                    </div>
                                    <div className="text-center w-1/3 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20">
                                            <ArrowRight className="text-primary font-bold" />
                                        </div>
                                    </div>
                                    <div className="text-center w-1/3">
                                        <div className="h-24 bg-primary rounded-t-lg w-full mx-auto relative group flex items-end justify-center">
                                            <span className="absolute bottom-full mb-2 w-full text-center font-bold text-primary text-xl">0.8倍</span>
                                            <span className="text-white font-bold mb-4">AI活用</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-lg">AIで業務フローを再構築</p>
                                    <p className="text-sm text-gray-500">人手のみのBPOとは違うアプローチ</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
