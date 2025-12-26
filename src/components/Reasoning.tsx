import { X, Check } from 'lucide-react';

export default function Reasoning() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">
                            業務圧縮くんは<br />
                            なぜ0.8～0.9倍でできるの？
                        </h2>
                        <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-lg border-l-4 border-primary">
                            <p className="text-xl font-bold text-text">
                                人を増やすのではなく、<br />
                                <span className="text-primary text-2xl">AIを前提に業務のやり方そのものを組み替えている</span><br />
                                からです。
                            </p>
                        </div>
                    </div>

                    {/* Comparison */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Bad Case */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 opacity-80">
                            <div className="flex items-center gap-3 mb-4 text-gray-500 border-b pb-4">
                                <X size={24} />
                                <h3 className="font-bold text-lg">一般的なBPO</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                業務をそのまま引き受け、人手で処理します。<br />
                                そのため、<span className="font-bold border-b border-gray-400">コスト構造は社内とほとんど変わりません。</span>
                            </p>
                        </div>

                        {/* Good Case */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-xl scale-105 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                Answer
                            </div>
                            <div className="flex items-center gap-3 mb-4 text-primary border-b border-primary/20 pb-4">
                                <Check size={24} />
                                <h3 className="font-bold text-lg">業務圧縮くん</h3>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    実際の現場に入り込み、業務フローを分解します。
                                </p>
                                <ul className="bg-slate-50 p-4 rounded-lg space-y-2 text-sm font-bold text-text">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>どこが人手に依存しているのか</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>どこが自動化できるのか</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>どこが不要、または簡略化できるのか</li>
                                </ul>
                                <p>
                                    を見極め、AIで置き換えられる部分は徹底的に置き換えます。
                                </p>
                                <p>
                                    そのうえで、システム、運用、体制をこちらで再構築し、
                                    同じ業務を、より少ない工数で回せる状態をつくります。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="text-center bg-primary text-white p-8 rounded-2xl shadow-lg">
                        <p className="font-bold text-lg mb-2">
                            結果として、業務にかかる総コストが下がるため、<br />
                            現在の0.8～0.9倍の金額でも受注が成立します。
                        </p>
                        <p className="text-sm opacity-90">
                            安さの理由は、無理な値下げではありません。業務構造そのものを変えているからです。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
