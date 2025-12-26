import { ArrowRight } from 'lucide-react';

export default function SolutionIntro() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center space-y-12">

                    <div className="space-y-6">
                        <h2 className="text-2xl lg:text-3xl font-bold text-text leading-relaxed">
                            業務圧縮くんは、<br />
                            業務をそのまま外注するサービスではありません。<br />
                            <span className="text-primary">AIを前提に業務を組み替え、</span><br />
                            <span className="text-primary">同じ業務を、より低いコストで引き受けます。</span>
                        </h2>

                        <div className="flex justify-center">
                            <ArrowRight className="rotate-90 text-gray-300" size={40} />
                        </div>

                        <p className="text-xl font-medium text-text-light">
                            そのため<br />
                            これまで1,000万円かかっていた業務を、<br />
                            <span className="text-secondary font-bold text-3xl mx-2">800万〜900万円</span>
                            のコストで<br />
                            外注することが可能になります。
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <p className="text-lg leading-relaxed text-text">
                            企業側は、<br />
                            <span className="font-bold">固定費を下げながら、業務を止めることなく手放すことができ、</span><br />
                            社内リソースを本来注ぐべき業務に集中させられます。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-2xl font-bold text-text">
                            「下げたいが、下げられない」<br />
                            その矛盾に対する、現実的な解決策。
                        </p>
                        <p className="text-3xl lg:text-4xl font-black text-primary">
                            それが、業務圧縮くんです。
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
