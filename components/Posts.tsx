
interface post{
    id: string,
    title:string,
    content:string,
    authorName: string
}

export default async function Posts({ id, title,content,authorName}:post) {
    return (
        <div className="">
            <h3 className="">{authorName}</h3>
            <h4 className="">{title}</h4>
            <p className="">{content}</p>
        </div>
    )    
}