import { ArrowRight } from 'lucide-react';

export default function ConsultationCTA() {
    return (
        <section id="contact" className="py-20 bg-primary-dark/5">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                                まずは、<br />
                                自社の業務がどれくらい圧縮できるかを<br />
                                確認してみませんか？
                            </h2>
                            <div className="text-left md:text-center text-gray-600 space-y-4 bg-gray-50 p-6 rounded-xl">
                                <p>
                                    業務圧縮くんでは、いきなり契約や外注を前提としたご提案は行っていません。<br />
                                    現在の業務内容とコストをもとに、
                                </p>
                                <ul className="inline-block text-left list-disc pl-6 space-y-1 font-bold text-text">
                                    <li>どの業務が外に出せるか</li>
                                    <li>どれくらいコストを下げられるか</li>
                                    <li>業務移行に無理がないか</li>
                                </ul>
                                <p>
                                    を、無料で整理します。
                                </p>
                                <p className="font-bold text-primary">
                                    「本当に安くなるのか」「外に出して問題ないのか」<br />
                                    まずは、そこを確認するだけで構いません。
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text">貴社名</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例：株式会社〇〇" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text">部署</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text">役職</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text">お名前</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例：山田 太郎" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text">カナ</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例：ヤマダ タロウ" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text">メールアドレス</label>
                                    <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="test@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text">電話番号</label>
                                    <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="03-1234-5678" />
                                </div>
                            </div>

                            <div className="pt-6 text-center">
                                <button type="submit" className="btn-secondary w-full md:w-auto px-12 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mx-auto">
                                    自社業務がどれだけ圧縮できるかを確認する
                                    <ArrowRight />
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}
