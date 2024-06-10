import Page from "../components/page"

export default function MementoPage () {
    return (
        <Page color={"bg-[#2d325a]"}>
            <div className="flex flex-col mb-auto">
                <h1 className="text-4xl text-center text-slate-50 pt-5 inter-font">Memento</h1>
                <div className="flex flex-col w-3/5 mx-auto pt-10 gap-y-5">
                    <div className="text-lg text-slate-50">
                        <h2 className="text-3xl text-slate-50 mb-3">Coming soon!</h2>
                    </div>
                </div>
            </div>
            <div className="w-full text-center pb-5">
                <p className="text-slate-50">Made by GuntxJakka</p>
            </div>
        </Page>
    )
}