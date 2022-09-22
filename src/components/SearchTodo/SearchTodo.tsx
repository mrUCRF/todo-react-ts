
interface Props {
    search: any
}

const SearchTodo: React.FC<Props> = ({search}) => {


    return (
        <>
        <input type="text" className="form-control mb-2" aria-describedby="emailHelp" placeholder="Search"
        onChange={({target: { value }}) => search(value)}/>
        </>
    )
}

export default SearchTodo