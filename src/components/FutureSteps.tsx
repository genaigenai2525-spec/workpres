

export default function FutureSteps() {
    const steps = [
        {
            step: "STEP 01",
            title: "お問い合わせ・無料相談",
            desc: "まずは、お問い合わせフォームよりご連絡ください。現在の業務内容やお困りごとを簡単にお伺いし、業務圧縮くんが適用可能かどうかを整理します。この段階では、契約を前提とした提案は行いません。"
        },
        {
            step: "STEP 02",
            title: "実務に入り込み、業務を実測・検証（有償）",
            desc: "本当に業務を圧縮できるかどうかは、資料やヒアリングだけでは判断できません。そのため、実際に貴社の実務に入り込み、業務フロー、工数、AI活用余地を実測・検証します。期間は2週間から2カ月程度。業務内容に応じて個別にお見積りします。なお、業務圧縮が現実的でないと判断した場合は、本フェーズの費用は返金します。"
        },
        {
            step: "STEP 03",
            title: "業務引き渡しの方法と体制をご説明",
            desc: "検証結果をもとに、・どの業務を・どの範囲まで・どのような体制で引き受けるのか を、こちらから具体的にご説明します。あわせて、業務を止めずに引き渡すための進め方や、役割分担、移行スケジュールも共有します。"
        },
        {
            step: "STEP 04",
            title: "内容に合意のうえ、契約",
            desc: "業務内容、コスト、体制、スケジュールについて双方合意が取れた段階で契約を締結します。この時点で、0.8〜0.9倍のコストでの受注条件が確定します。"
        },
        {
            step: "STEP 05",
            title: "サービス開始",
            desc: "合意した体制・フローに基づき、業務圧縮くんが業務を引き受け、サービスを開始します。固定費を下げながら、業務が安定して回り続ける状態を継続的に運用していきます。"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">PROCESS</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mt-2">今後の流れ</h2>
                </div>

                <div className="max-w-4xl mx-auto relative px-4 md:px-0">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-ml-px hidden md:block"></div>

                    <div className="space-y-12">
                        {steps.map((s, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm transform -translate-x-1/2 mt-6 hidden md:block z-10"></div>

                                {/* Content */}
                                <div className={`flex-1 w-full md:w-1/2 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                                    <div className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow relative group ${i % 2 === 1 ? 'mr-0' : 'ml-0'}`}>
                                        <div className={`text-sm font-bold text-primary mb-2 ${i % 2 === 1 ? 'md:flex md:justify-end' : ''}`}>{s.step}</div>
                                        <h3 className="text-lg font-bold text-text mb-3 leading-tight border-b border-gray-100 pb-2">{s.title}</h3>
                                        <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                                            {s.desc}
                                        </div>

                                        {/* Mobile decoration */}
                                        <div className="absolute -left-3 top-6 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold md:hidden">
                                            {i + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
