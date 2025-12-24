import { Zap, TrendingDown, ShieldCheck } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <TrendingDown className="text-white" size={32} />,
            title: "特徴01：\nAI活用による圧倒的な低コスト",
            desc: "従来のBPOのような「人件費メイン」の価格構成ではありません。最新のAIツールや自社開発のシステムを駆使することで、属人性を排除し、驚きの低単価を実現しました。",
            color: "bg-blue-500"
        },
        {
            icon: <ShieldCheck className="text-white" size={32} />,
            title: "特徴02：\n専任担当者による高品質な運用",
            desc: "AI任せにするのではなく、専門のディレクターが貴社の業務フローを理解し、運用を管理します。AIのスピードと、人のきめ細やかさを両立させた体制を提供します。",
            color: "bg-primary"
        },
        {
            icon: <Zap className="text-white" size={32} />,
            title: "特徴03：\nスピーディな導入と柔軟な拡張",
            desc: "最短数日で業務の切り出しと運用開始が可能です。小規模なタスクからスタートし、成果を確認しながら範囲を広げていくといった柔軟な対応が可能です。",
            color: "bg-secondary"
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">サービスの特徴</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group flex flex-col">
                            <div className={`absolute top-0 right-0 w-24 h-24 ${f.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500`}></div>

                            <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-6 shadow-md shrink-0`}>
                                {f.icon}
                            </div>

                            <h3 className="text-xl font-bold text-text mb-4 whitespace-pre-line leading-tight">
                                {f.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
