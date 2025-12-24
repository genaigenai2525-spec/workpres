import { AlertTriangle, ArrowDown } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        "業務量は増えているのに、固定費が下がらない",
        "外注しても、結局コストが安くならない",
        "本当は、社内でやる必要のない業務が多い",
        "コストを下げたいが、業務は止められない"
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom">
                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-10">業務圧縮くんとは何か</h2>
                    <div className="text-lg text-text leading-relaxed space-y-8 font-medium">
                        <p>
                            あなたの会社の業務を、<br />
                            AI×アウトソーシングで<br />
                            <span className="text-primary font-bold">圧倒的に「圧縮」するサービス</span>です。
                        </p>
                        <p>
                            これまで「外注すると高い」「自社でやるしかない」<br />
                            と諦めていた定型業務や事務作業を、<br />
                            AIを活用することで従来のBPOよりも<br />
                            <span className="border-b-2 border-secondary/50">はるかに安く、正確に引き受けます。</span>
                        </p>
                        <p>
                            単なる人貸しではなく、<br />
                            「業務そのものをテクノロジーで効率化し、<br />
                            最小限のコストで運用する」
                        </p>
                        <p className="text-2xl font-bold text-primary pt-4">
                            それが業務圧縮くんです。
                        </p>
                    </div>
                </div>

                {/* Problems Grid */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">TARGET</span>
                        <h3 className="text-2xl font-bold text-text mt-2">
                            経営者・管理部門・事業責任者の皆さまへ<br />
                            こんなお悩み、ありませんか？
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {problems.map((prob, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-400 hover:border-primary transition-colors duration-300 group">
                                <div className="mb-4 flex justify-center">
                                    <div className="bg-gray-100 p-3 rounded-full group-hover:bg-primary-light transition-colors">
                                        <AlertTriangle className="text-gray-500 group-hover:text-primary transition-colors" size={24} />
                                    </div>
                                </div>
                                <p className="text-center font-bold text-text leading-snug">
                                    {prob}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solution Bridge */}
                <div className="bg-primary-dark/5 p-8 md:p-12 rounded-2xl border border-primary/10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
                            下げたいが、下げられない<br />
                            その矛盾に対する、現実的な解決策。
                        </h3>
                        <p className="text-xl font-bold text-primary mb-8">
                            それが、業務圧縮くんです。
                        </p>
                        <div className="flex justify-center">
                            <ArrowDown className="text-secondary animate-bounce" size={40} />
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </div>
        </section>
    );
}
