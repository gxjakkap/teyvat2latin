import Page from "../components/page"

export default function CreditsPage () {
    return (
        <Page color={"bg-[#2d325a]"}>
            <div className="flex flex-col mb-auto">
                <h1 className="text-4xl text-center text-slate-50 pt-5 inter-font">Credits</h1>
                <div className="flex flex-col w-3/5 mx-auto pt-10 gap-y-5">
                    <div className="text-lg text-slate-50">
                        <h2 className="text-3xl text-slate-50 mb-3">Teyvat Regular Font</h2>
                        <p>Made by <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://www.reddit.com/user/StationaryCottage/" target="_blank" rel="noopener,noreferer">u/StationaryCottage</a> on Reddit</p>
                        <p>Source: <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://redd.it/ltnf92" target="_blank" rel="noopener,noreferer">"Made A Mondstad/Teyvat (??) Alphabet Font, drive link in comments" on r/Genshin_Impact</a></p>
                        <p>Download: <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://drive.google.com/file/d/1kIon2atuCbr_Xrm92th9V8eoqx5uld6E/view" target="_blank" rel="noopener,noreferer">Google Drive</a></p>
                    </div>
                    <div className="text-lg text-slate-50">
                        <h2 className="text-3xl text-slate-50 mb-3">FontaineScript Regular Font</h2>
                        <p>Made by <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://www.reddit.com/user/To_Bun/" target="_blank" rel="noopener,noreferer">u/To_Bun</a> on Reddit</p>
                        <p>Source: <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://redd.it/1739kqe" target="_blank" rel="noopener,noreferer">"Fontaine Script Font" on r/Genshin_Impact</a></p>
                        <p>Download: <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://drive.google.com/file/d/1KHn1vp8hbcGoe2QkM7NTa6cqyuFde3jJ/view" target="_blank" rel="noopener,noreferer">Google Drive</a></p>
                    </div>
                    <div className="text-lg text-slate-50">
                        <h2 className="text-3xl text-slate-50 mb-3">Sumeru Regular Font</h2>
                        <p>Made by <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://twitter.com/puepeupeu" target="_blank" rel="noopener,noreferer">@puepeupeu</a> on Twitter</p>
                        <p>Source: <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://twitter.com/puepeupeu/status/1599089752153927680" target="_blank" rel="noopener,noreferer">Original Tweet</a></p>
                        <p>Download: <a className="underline hover:text-sky-400 focus:text-violet-500" href="https://drive.google.com/drive/folders/1zX_2pqRvjGy9-rBhXzjOj84QE6N9TLSP" target="_blank" rel="noopener,noreferer">Google Drive</a></p>
                    </div>
                </div>
            </div>
            <div className="w-full text-center pb-5">
                <p className="text-slate-50">Made by GuntxJakka</p>
            </div>
        </Page>
    )
}