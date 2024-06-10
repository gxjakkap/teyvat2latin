export default function Page({ children, color }: { children: JSX.Element | JSX.Element[], color: string }) {
    return (
        <div className="w-full">
            <div className={`flex flex-col min-h-screen ${color}`}>
                <nav className="w-full h-14 flex flex-row pt-4 px-9 text-slate-50 inter-font">
                    <a href="/"><span className="text-3xl"><span className="teyvat-font">Teyvat</span>2Latin</span></a>
                    <div className="flex gap-3 text-lg ml-auto">
                        <a href="/">Home</a>
                        <a href="/memento">Memento</a>
                        <a href="/credits">Credits</a>
                        <a href="https://github.com/gxjakkap/teyvat2latin">Source</a>
                    </div>
                </nav>
                { children }
            </div>
        </div>
    )
}