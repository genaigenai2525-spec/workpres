import { ArrowRight } from 'lucide-react';

export default function Flow() {
    const steps = [
        {
            step: "01",
            title: "オンライン相談（無料）",
            desc: "まずは現状の業務内容や課題をヒアリング。AIでどこまで圧縮できるか、概算のコストメリットを提示します。",
            active: true
        },
        {
            step: "02",
            title: "業務の可視化・\nプラン提示",
            desc: "対象となる業務フローを整理し、具体的な運用体制と見積もりを提案。この時点で「本当に安くなるか」を明確にします。",
            active: false
        },
        {
            step: "03",
            title: "テスト運用・\n環境構築",
            desc: "実際の業務をスモールスタート。AIのプロンプト作成やフロー構築を行い、品質に問題がないかを検証します。",
            active: false
        },
        {
            step: "04",
            title: "本契約・運用開始",
            desc: "テスト運用の結果に納得いただければ、本契約へ。専任チームが貴社の事務局として実稼働を開始します。",
            active: false
        },
        {
            step: "05",
            title: "継続的な改善・圧縮",
            desc: "運用中もAI技術のアップデートに合わせてフローを常に最適化。さらなる業務効率化とコストダウンを追求し続けます。",
            active: false
        }
    ];

    return (
        <section id="flow" className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">導入の流れ</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
                    {steps.map((s, i) => (
                        <div key={i} className="flex-1 min-w-[200px] relative group">
                            <div className={`h-full bg-white p-6 rounded-xl border-2 ${s.active ? 'border-primary shadow-lg' : 'border-gray-200'} relative z-10 hover:border-primary transition-colors duration-300 flex flex-col`}>
                                <div className="text-4xl font-black text-gray-100 absolute top-2 right-4 pointer-events-none group-hover:text-primary/10 transition-colors">
                                    {s.step}
                                </div>
                                <div className="text-sm font-bold text-primary mb-2">STEP {s.step}</div>
                                <h3 className="font-bold text-text mb-4 text-lg whitespace-pre-line leading-tight min-h-[3.5em] flex items-center">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {s.desc}
                                </p>
                            </div>

                            {/* Connector Arrow (Desktop only, skip last) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-[50%] -right-3 z-20 text-gray-300 transform -translate-y-1/2">
                                    <ArrowRight size={24} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
