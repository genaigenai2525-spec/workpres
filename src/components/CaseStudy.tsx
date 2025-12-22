export default function CaseStudy() {
    return (
        <section id="case-study" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">導入事例</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-gray-200 relative min-h-[300px]">
                        {/* Placeholder for Case Study Image - Using a gradient overlay as per tonality */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center p-8">
                            <div className="text-white text-center">
                                <span className="block text-5xl font-bold mb-2 text-primary">10%</span>
                                <span className="block text-xl">コスト削減</span>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Meeting" className="w-full h-full object-cover mix-blend-overlay opacity-50" />
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-sm text-sm mb-4 w-fit">
                            EC事業者向けカスタマーサポート
                        </div>
                        <h3 className="text-2xl font-bold text-text mb-6">
                            業務コスト増大による利益率圧迫を解消。<br />
                            固定費から外注費への転換に成功。
                        </h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 shrink-0"></span>
                                <span className="text-gray-600">月間業務コストを10%削減</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 shrink-0"></span>
                                <span className="text-gray-600">管理工数の大幅削減により、コア業務へ集中</span>
                            </li>
                        </ul>

                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 italic text-gray-600 relative">
                            <span className="text-4xl text-gray-300 absolute -top-2 -left-2">"</span>
                            安くなるか半信半疑でしたが、実務に入って検証してくれたことで安心して任せられました。
                            <span className="text-4xl text-gray-300 absolute -bottom-4 -right-2">"</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
