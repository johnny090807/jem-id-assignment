
// Zoeken op potmaat
const Search = ({filterProducts}) => {
    return(
        <div className="container m-5">
            <h1>Filter op potmaat:</h1>
            <input className="form-control" style={{width: "80%"}} onChange={filterProducts} placeholder="Filteren op potmaat" aria-label="Search"></input>
        </div>
      );
}

export default Search