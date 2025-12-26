import { TrendingDown, RefreshCcw, Cpu } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <TrendingDown className="text-white" size={32} />,
            title: "今かかっている業務コストを\n0.8～0.9倍で引き受けます",
            desc: `業務圧縮くんは、現在かかっている業務コストを基準に、その0.8～0.9倍の金額で受注します。「安くします」ではなく、「いまのコストより確実に下げる」ことを前提にしたBPOです。

そのため、これまで月1,000万円かかっていた業務であれば、800万～900万円の水準で業務を外注することができます。`,
            color: "bg-blue-500"
        },
        {
            icon: <RefreshCcw className="text-white" size={32} />,
            title: "人件費・固定費を\n外注費に置き換えられます",
            desc: `業務圧縮くんはBPOサービスです。業務を丸ごと引き受けるため、社内で抱えていた
・人件費
・採用コスト
・教育、引き継ぎ工数
・管理、マネジメント負荷
を、すべて外注費へ置き換えることができます。

固定費を変動費化することで、経営の柔軟性が大きく高まります。`,
            color: "bg-primary"
        },
        {
            icon: <Cpu className="text-white" size={32} />,
            title: "AIを使うから、\n業務を圧縮できます",
            desc: `業務圧縮くんが0.8～0.9倍のコストで業務を引き受けられる理由は、人を増やすのではなく、AIを前提に業務を組み替えるからです。

・人が判断していた作業をAIに任せる
・手作業のチェック、転記、集計を自動化する
・属人化していた業務フローを標準化する

これにより、同じ業務量でも必要な人手と工数を大幅に減らすことができます。

業務を安くするために人件費を削るのではなく、業務のやり方そのものを変える。だから、品質を維持したまま業務コストの圧縮が可能になります。`,
            color: "bg-secondary"
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">FEATURES</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mt-2">業務圧縮くん<br className="md:hidden" />サービスの特徴</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col h-full hover:-translate-y-2">
                            <div className={`absolute top-0 right-0 w-32 h-32 ${f.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500`}></div>

                            <div className="mb-6 relative">
                                <span className="absolute -top-4 -left-4 text-6xl font-black text-gray-100 select-none -z-10 text-opacity-50 font-sans">0{i + 1}</span>
                                <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center shadow-lg shrink-0 transform group-hover:rotate-6 transition-transform`}>
                                    {f.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-text mb-6 whitespace-pre-line leading-snug border-b-2 border-gray-100 pb-4 min-h-[5em] flex items-end">
                                {f.title}
                            </h3>
                            <div className="text-gray-600 leading-relaxed text-sm flex-grow whitespace-pre-wrap">
                                {f.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
