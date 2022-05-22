import {useState} from "react";
import Repos from "./Repos";

export default function Search () {
    const [query, setQuery] = useState('')
    return (
        <>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Repo Arayın" className="w-100 my-5 py-2 px-3 rounded border-1 form-control"/>
            <div className="container-fluid row">
                <Repos query={query} />
            </div>
        </>
    )
}
