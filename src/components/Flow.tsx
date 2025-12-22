import { ArrowRight } from 'lucide-react';

export default function Flow() {
    const steps = [
        {
            step: "01",
            title: "現状業務のヒアリングと\n対象業務の選定",
            desc: "現在のコストと業務内容の相関を確認します。（無料）",
            active: true
        },
        {
            step: "02",
            title: "実務に入り込み、\n業務を実測・検証",
            desc: "業務が本当に圧縮できるか実走します。圧縮不可なら全額返金。（有償）",
            active: false
        },
        {
            step: "03",
            title: "業務をAI前提で\n再設計",
            desc: "システム・ツールの構築、フロー再定義を行います。",
            active: false
        },
        {
            step: "04",
            title: "内容に合意のうえ、\n契約",
            desc: "正式受注。この時点で0.8～0.9倍のコストが確定します。",
            active: false
        },
        {
            step: "05",
            title: "サービス開始",
            desc: "業務を引き受け、継続的に運用します。",
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
                        <div key={i} className="flex-1 min-w-[180px] relative group">
                            <div className={`h-full bg-white p-6 rounded-xl border-2 ${s.active ? 'border-primary shadow-lg' : 'border-gray-200'} relative z-10 hover:border-primary transition-colors duration-300`}>
                                <div className="text-4xl font-black text-gray-100 absolute top-2 right-4 pointer-events-none group-hover:text-primary/10 transition-colors">
                                    {s.step}
                                </div>
                                <div className="text-sm font-bold text-primary mb-2">STEP {s.step}</div>
                                <h3 className="font-bold text-text mb-4 text-base whitespace-pre-line leading-tight">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>

                            {/* Connector Arrow (Desktop only, skip last) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 z-20 text-gray-300 transform -translate-y-1/2">
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
