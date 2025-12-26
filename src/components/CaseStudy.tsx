export default function CaseStudy() {
    const cases = [
        {
            company: "A社（東京都）",
            industry: "EC事業者向けカスタマーサポート運営",
            intro: "業務コストの増大が原因で利益率が圧迫されていたが改善",
            before: {
                title: "導入前の課題",
                content: `事業拡大に伴い、問い合わせ件数が年々増加。
それに合わせて、カスタマーサポート人員を増やし続けていました。

・人件費が固定費として膨らむ
・採用、教育コストがかかる
・繁忙期と閑散期の差が大きい

結果として、売上は伸びているのに利益率が下がり続けている状態でした。
外注も検討しましたが、人月ベースのBPOではコストがほとんど変わらず、踏み切れずにいました。`
            },
            after: {
                title: "導入後の変化（業務圧縮くん導入後）",
                content: `業務圧縮くんが実務に入り込み、問い合わせ対応業務をAI前提で再設計。

・一次対応の自動化
・対応フローの標準化
・人手が必要な業務のみを切り分け

その結果、月間業務コストを約10%削減した状態で業務を丸ごと外注。
社内で抱えていた人件費、管理工数が不要になり、本来注力すべきマーケティングと商品開発にリソースを集中できるようになりました。`
            },
            results: [
                "月間業務コスト：▲10%",
                "固定費→外注費へ置き換え",
                "管理工数：大幅削減"
            ],
            voice: "「安くなるか半信半疑でしたが、実務に入って検証してくれたことで安心して任せられました。コストだけでなく、社内の負担が減ったのが一番大きいです。」"
        },
        {
            company: "B社（大阪府）",
            industry: "BtoB向け人材サービス運営",
            intro: "バックオフィス業務の肥大化により事業成長のスピードが鈍化していたが改善",
            before: {
                title: "導入前の課題",
                content: `取引先と求職者の増加に伴い、契約管理、請求処理、データ入力などのバックオフィス業務が急増。

・業務が属人化している
・引き継ぎに時間がかかる
・人を増やすと固定費が上がる

結果として、「業務が回らないから採用できない」という状態に陥っていました。`
            },
            after: {
                title: "導入後の変化（業務圧縮くん導入後）",
                content: `業務圧縮くんが2カ月間の実務検証フェーズで業務フローを洗い出し。

・重複作業の削減
・手作業工程のAI化
・業務ルールの再設計

を実施。そのうえで、従来コストの0.85倍でバックオフィス業務を受託。
社内では業務に追われる状態から解放され、営業活動と新規サービス開発に集中できる体制が整いました。`
            },
            results: [
                "業務コスト：▲15%",
                "属人業務：ほぼ解消",
                "新規施策の立ち上げスピード：向上"
            ],
            voice: "「業務を外に出しただけでなく、安く回る形まで作ってくれたのが他のBPOとの決定的な違いでした。経営判断がかなり楽になりました。」"
        }
    ];

    return (
        <section id="case-study" className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">CASE STUDY</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mt-2">導入事例</h2>
                </div>

                <div className="space-y-16">
                    {cases.map((item, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            {/* Header */}
                            <div className="bg-primary p-6 text-white text-center">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">導入事例{index === 0 ? '❶' : '❷'}：{item.company}</h3>
                                <p className="text-sm opacity-90 max-w-2xl mx-auto border-b border-white/30 pb-2 mb-2 inline-block">事業内容：{item.industry}</p>
                                <p className="text-lg font-bold">{item.intro}</p>
                            </div>

                            <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12 relative">
                                {/* Connector Arrow */}
                                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-lg border border-gray-100">
                                    <div className="bg-secondary rounded-full p-2">
                                        <ArrowRight className="text-white" />
                                    </div>
                                </div>

                                {/* Before */}
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <div className="inline-block bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">BEFORE</div>
                                    <h4 className="font-bold text-lg text-text mb-4 border-b border-gray-200 pb-2">{item.before.title}</h4>
                                    <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                                        {item.before.content}
                                    </div>
                                </div>

                                {/* After */}
                                <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                                    <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">AFTER</div>
                                    <h4 className="font-bold text-lg text-primary mb-4 border-b border-primary/20 pb-2">{item.after.title}</h4>
                                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {item.after.content}
                                    </div>
                                </div>
                            </div>

                            {/* Results & Voice */}
                            <div className="bg-slate-100 px-6 py-8 md:px-10 border-t border-gray-200">
                                <div className="grid md:grid-cols-2 gap-8 items-start">
                                    <div>
                                        <h5 className="font-bold text-secondary mb-4 flex items-center gap-2">
                                            <span className="w-2 h-6 bg-secondary rounded-full"></span>
                                            成果まとめ
                                        </h5>
                                        <ul className="space-y-3">
                                            {item.results.map((res, i) => (
                                                <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                                                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                                                    <span className="font-bold text-text">{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-text mb-4 flex items-center gap-2">
                                            <span className="w-2 h-6 bg-gray-400 rounded-full"></span>
                                            お客様の声
                                        </h5>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">
                                            <span className="absolute top-4 left-4 text-4xl font-serif text-gray-200">“</span>
                                            <p className="font-medium text-text italic relative z-10 leading-relaxed">
                                                {item.voice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { ArrowRight } from 'lucide-react';
