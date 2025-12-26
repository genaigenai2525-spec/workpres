import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-light via-white to-white overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 rounded-l-full opacity-50 -z-10 translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-yellow-50 rounded-r-full opacity-30 -z-10 -translate-x-1/2"></div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="lg:w-3/5 space-y-8">
                        <div className="space-y-6">
                            {/* Main Catch */}
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-text">
                                その業務コスト、<br />
                                <span className="text-primary relative inline-block">
                                    もっと安く
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200/50 -z-10 rounded-sm"></span>
                                </span>
                                外注できます。
                            </h1>

                            {/* Sub Catch */}
                            <div className="text-xl lg:text-2xl font-bold text-text-light">
                                企業の業務を
                                <span className="text-secondary text-2xl lg:text-3xl mx-2">0.8～0.9倍</span>
                                のコストで引き受ける<br />
                                AIを活用したBPOサービス「業務圧縮くん」
                            </div>

                            {/* Body Text */}
                            <div className="text-gray-600 leading-relaxed text-base lg:text-lg space-y-4 border-l-4 border-primary/20 pl-4">
                                <p>
                                    毎月かかり続ける業務コスト。
                                    人で回している限り、固定費は簡単には下がりません。
                                    業務圧縮くんは、業務をそのまま外注する”よくあるBPO”ではありません。
                                </p>
                                <p>
                                    AIを前提に業務を組み替えることで、
                                    同じ業務を、より安いコストで引き受けます。
                                    だからこれまで1000万円かかっていた業務を、
                                    800万円から900万円で受託することができます。
                                </p>
                                <p className="font-bold text-primary">
                                    つまり…！<br />
                                    企業は、固定費を下げながら、その業務を丸ごと外注でき、
                                    自社で回す工数から解放されるのです！
                                </p>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <ul className="space-y-4">
                                {[
                                    "毎月の業務コストを確実に下げられる",
                                    "人件費や固定費を外注費に置き換えられる",
                                    "業務を手放しつつ、品質を維持できる"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <CheckCircle className="text-secondary mt-1 shrink-0" size={20} fill="#F7A334" color="white" />
                                        <span className="font-bold text-text text-lg">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Closing */}
                        <div className="space-y-2 text-center lg:text-left">
                            <p className="font-bold text-text">
                                業務圧縮くんは、「業務を圧縮し・経費を削減する」ことに特化したBPOサービスです。
                            </p>
                            <p className="font-bold text-primary text-lg">
                                「固定費を下げたい」<br />
                                そのお悩みに、AIを活用したBPOサービス「業務圧縮くん」がお力になります。
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="btn-secondary text-center flex items-center justify-center gap-2 px-8 py-4 text-lg">
                                無料シミュレーション
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Image / Visual */}
                    <div className="lg:w-2/5 relative">
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                            {/* Abstract UI Representation of Cost Reduction */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                                    <div className="text-center w-1/3">
                                        <div className="h-40 bg-gray-300 rounded-t-lg w-full mx-auto relative group">
                                            <span className="absolute bottom-full mb-2 w-full text-center font-bold text-gray-500 whitespace-nowrap text-sm">従来のコスト</span>
                                        </div>
                                    </div>
                                    <div className="text-center w-1/3 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20">
                                            <ArrowRight className="text-primary font-bold" />
                                        </div>
                                    </div>
                                    <div className="text-center w-1/3">
                                        <div className="h-32 bg-primary rounded-t-lg w-full mx-auto relative group flex items-end justify-center">
                                            <span className="absolute bottom-full mb-2 w-full text-center font-bold text-primary text-xl whitespace-nowrap">0.8倍</span>
                                            <span className="text-white font-bold mb-4 text-xs">業務圧縮</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-lg">コスト構造を改革</p>
                                    <p className="text-xs text-gray-500">固定費を変動費へ</p>
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
