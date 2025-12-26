import { AlertTriangle, ArrowDown } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        {
            title: "業務量は増えているのに、固定費が下がらない",
            content: "業務が増えるたびに、人を増やし、コストが積み上がっていく。改善したくても、「誰かがやらないと回らない業務」が多く、固定費を下げられない状態が続いている。"
        },
        {
            title: "外注しても、結局コストが安くならない",
            content: "BPOや外注を検討しても、・社内と同じやり方 ＋ ・作業量ベースの人月契約 になりがち。結果として、手間は減っても、コストはほとんど変わらない。"
        },
        {
            title: "本当は、社内でやる必要のない業務が多い",
            content: "その業務、本当に自社で抱え続ける必要がありますか。「昔からそうしている」「引き継ぎが面倒」その理由だけで、本来は外に出せる業務を社内リソースで消耗しているケースは少なくありません。"
        },
        {
            title: "コストを下げたいが、業務は止められない",
            content: "固定費は下げたい。でも、業務は必要。だから、止めることはできない。その結果、「下げたいが、下げられない」という矛盾を抱えたまま、現状維持を選び続けている。"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">TARGET</span>
                    <h2 className="text-3xl font-bold text-text mt-2 leading-tight">
                        経営者・管理部門・事業責任者の皆さまへ<br />
                        こんなお悩み、ありませんか？
                    </h2>
                </div>

                {/* Problems Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                    {problems.map((prob, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gray-400 hover:border-primary transition-all duration-300 group hover:-translate-y-1">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-primary-light transition-colors shrink-0">
                                    <AlertTriangle className="text-gray-500 group-hover:text-primary transition-colors" size={24} />
                                </div>
                                <h3 className="font-bold text-xl text-text leading-snug">
                                    {prob.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line pl-16">
                                {prob.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Solution Bridge Intro */}
                <div className="bg-primary-dark/5 p-8 md:p-12 rounded-2xl border border-primary/10 text-center relative overflow-hidden max-w-4xl mx-auto">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
                            そこで、<br />
                            AIを活用したBPOサービス<br />
                            「業務圧縮くん」という選択があります。
                        </h3>

                        <div className="flex justify-center mt-8">
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
