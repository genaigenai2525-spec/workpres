import { Zap, TrendingDown, ShieldCheck } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <TrendingDown className="text-white" size={32} />,
            title: "今かかっている業務コストを\n0.8～0.9倍で引き受けます",
            desc: "現在のコスト構造を分析し、確実に削減できるプランを提示します。",
            color: "bg-blue-500"
        },
        {
            icon: <Zap className="text-white" size={32} />,
            title: "AIの活用により、\n人件費・固定費を大幅に削減",
            desc: "人を増やすのではなく、AIを前提に業務のやり方そのものを組み替えます。",
            color: "bg-secondary"
        },
        {
            icon: <ShieldCheck className="text-white" size={32} />,
            title: "属人化の解消と\n品質の安定化を同時に実現",
            desc: "業務フローを分解・標準化することで、特定の人に依存しない体制を作ります。",
            color: "bg-primary"
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
                        <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                            <div className={`absolute top-0 right-0 w-24 h-24 ${f.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500`}></div>

                            <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                                {f.icon}
                            </div>

                            <h3 className="text-xl font-bold text-text mb-4 whitespace-pre-line leading-tight">
                                {f.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Deep Dive Box */}
                <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3 text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">なぜ 0.8～0.9倍で<br />受注できるの？</h3>
                            <div className="w-12 h-1 bg-secondary mb-4 mx-auto md:mx-0"></div>
                        </div>
                        <div className="md:w-2/3 border-l border-white/20 pl-0 md:pl-8">
                            <p className="text-lg leading-relaxed opacity-90">
                                <span className="font-bold border-b border-secondary">人を増やすのではなく、AIを前提に業務のやり方そのものを組み替えているからです。</span><br /><br />
                                一般的なBPOは人手で処理するためコストが下がりませんが、業務圧縮くんは業務フローを分解し、AIで徹底的に自動化・最適化します。
                            </p>
                        </div>
                    </div>

                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>
            </div>
        </section>
    );
}
