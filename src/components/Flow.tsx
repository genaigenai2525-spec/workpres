import { ChevronDown } from 'lucide-react';

export default function Flow() {
    const steps = [
        {
            step: "01",
            title: "現状業務のヒアリングと\n対象業務の選定",
            desc: "まずは、現在社内または外注で回している業務についてヒアリングを行います。\n・業務内容\n・業務量\n・関与人数\n・現在のコスト構造\nを整理し、業務圧縮の対象となり得る業務を明確にします。この時点では、契約や外注を前提とした判断は行いません。"
        },
        {
            step: "02",
            title: "実務に入り込み、業務を実測・検証（有償）",
            desc: "業務が本当に圧縮できるかどうかは、資料やヒアリングだけでは判断できません。そのため、業務圧縮くんでは実際に貴社の業務に入り込み、現場で業務を回しながら検証を行います。\n\n期間：2週間〜2カ月（業務内容により変動）※別途お見積り\n\nこのフェーズでは、\n・業務フローの把握\n・無駄や重複の洗い出し\n・AI活用可能領域の特定\nを行います。\nなお、検証の結果、業務圧縮が現実的でないと判断した場合は、本フェーズでいただいた費用は全額返金します。"
        },
        {
            step: "03",
            title: "AI前提で業務を再設計し、\n体制を構築",
            desc: "検証結果をもとに、業務をAI前提で再設計します。\n・システム、ツールの構築\n・業務フローの再定義\n・必要に応じた人材の採用、配置\nを行い、0.8～0.9倍のコストで業務を引き受けられる体制をこちらで整えます。企業側での追加対応は、最小限に抑えます。"
        },
        {
            step: "04",
            title: "業務コスト0.8～0.9倍での\n正式受注",
            desc: "体制構築が完了した段階で、業務圧縮後のコストを提示し、正式なBPO契約へ進みます。これまで1000万円かかっていた業務であれば、800万〜900万円の水準での受注が目安となります。固定費を下げながら、業務そのものは継続されます。"
        },
        {
            step: "05",
            title: "継続運用と業務改善の実行",
            desc: "正式受注後は、構築した体制で業務を継続的に実行します。業務量の変化や新たな改善余地があれば、随時見直しを行い、圧縮されたコスト構造を維持します。業務を「外に出して終わり」ではなく、安く回り続ける状態をつくることが業務圧縮くんのゴールです。"
        }
    ];

    return (
        <section id="flow" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">FLOW</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mt-2">業務圧縮くん<br className="md:hidden" />サービス利用手順</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        AI活用BPOサービス「業務圧縮くん」が、業務コストを0.8～0.9倍に圧縮した状態で引き受けるまでの実際のプロセスをご説明します。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {steps.map((s, i) => (
                        <div key={i} className="relative">
                            {/* Connector Line */}
                            {i < steps.length - 1 && (
                                <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200 lg:left-1/2 lg:-ml-px lg:top-auto lg:h-16 lg:-bottom-12 z-0 hidden lg:block"></div>
                            )}

                            <div className="relative z-10 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                                        {s.step}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-xl text-text mb-3 whitespace-pre-line flex items-center gap-2">
                                        <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-1 rounded inline-block md:hidden">STEP {s.step}</span>
                                        {s.title}
                                    </h3>
                                    <div className="text-gray-600 leading-relaxed text-sm whitespace-pre-wrap">
                                        {s.desc}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Connector */}
                            {i < steps.length - 1 && (
                                <div className="flex justify-center my-4 lg:hidden">
                                    <ChevronDown className="text-gray-300" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
