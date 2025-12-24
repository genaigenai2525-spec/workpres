export default function CaseStudy() {
    const cases = [
        {
            title: "CASE 01：WEB広告代理店 A社様",
            content: "毎月数百本発生する広告レポート作成と入稿作業",
            results: [
                "外注コストを45%削減",
                "月120時間のディレクター工数をゼロに",
                "作業ミスが激減し、クライアントへの報告スピードが向上"
            ],
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "CASE 02：SaaS運営企業 B社様",
            content: "カスタマーサポートの一次回答とFAQデータの整理",
            results: [
                "月額固定費を60万円から25万円に圧縮",
                "深夜・休日の対応が可能になり、ユーザー満足度が向上",
                "社内メンバーは企画やマーケティングに集中できる環境へ"
            ],
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
    ];

    return (
        <section id="case-study" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">導入事例</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-12">
                    {cases.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-2/5 relative min-h-[250px]">
                                <div className="absolute inset-0 bg-primary/20 z-10"></div>
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-tr-xl z-20">
                                    <p className="font-bold text-primary">{item.title.split('：')[0]}</p>
                                </div>
                            </div>

                            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-text mb-4 pb-4 border-b border-gray-100">
                                    {item.title.split('：')[1] || item.title}
                                </h3>

                                <div className="mb-6">
                                    <p className="text-sm text-gray-400 mb-1">導入業務</p>
                                    <p className="font-bold text-lg text-text">{item.content}</p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <p className="text-sm font-bold text-secondary mb-3">導入成果</p>
                                    <ul className="space-y-2">
                                        {item.results.map((res, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></span>
                                                <span className="text-gray-700 font-medium">{res}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
