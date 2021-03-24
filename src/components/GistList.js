import React from 'react'
import Card from '../components/card/card'

function GistList({ currentArrayGist, fiteredGist }) {


    return (
        <div>
            {fiteredGist === '' ?
                currentArrayGist.map((v, i) => {
                    return <div key={i}>
                        <Card key={i}
                            updatedAt={v.updated_at}
                            createdAt={v.created_at}
                            name={v.owner.login}
                            img={ !v.owner.avatar_url? 'https://avatars.githubusercontent.com/u/64832996?v=4': v.owner.avatar_url}
                        />
                    </div>
                })
                :
                fiteredGist.map((v, i) => {
                    return <div key={i}>
                        <Card key={i}
                            updatedAt={v.updated_at}
                            createdAt={v.created_at}
                            name={v.owner.login}
                            img={v.owner.avatar_url}
                        />
                    </div>
                })
            }
        </div>
    )
}
export default GistList

