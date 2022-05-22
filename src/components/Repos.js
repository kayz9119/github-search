import {useEffect, useState} from "react";

export default function Repos ({query = null}) {
    const [repos, setRepos] = useState([])
    const [qrRepos, setQrRepos] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/kayz9119/repos`)
            .then(res => res.json())
            .then(res => {
                const myArr = [res]
                setRepos([...myArr[0]])
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const filteredResult = repos.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        setQrRepos([...filteredResult])
        console.log(qrRepos)
    }, [query])


    return query ? (
        <div>
            {qrRepos.map((repo, index) => (
                <div key={index} className="card col-md-4 my-3">
                    <div className="card-header">
                        <h2>{repo.name}</h2>
                    </div>
                    <div className="card-body">
                        <p>{repo.description ? repo.description : (
                            <a href={repo.html_url}>link</a>
                        )}</p>
                    </div>
                    <div className="card-footer">
                        <p>from <a href={repo.owner.html_url}>{repo.owner.login}</a></p>
                    </div>
                </div>
            ))}
        </div>
    ) : repos.map((repo, index) => (
        <div key={index} className="card col-md-4 my-3">
            <div className="card-header">
                <h2>{repo.name}</h2>
            </div>
            <div className="card-body">
                <p>{repo.description ? repo.description : (
                    <a href={repo.html_url}>link</a>
                )}</p>
            </div>
            <div className="card-footer">
                <p>from <a href={repo.owner.html_url}>{repo.owner.login}</a></p>
            </div>
        </div>
    ))
}
