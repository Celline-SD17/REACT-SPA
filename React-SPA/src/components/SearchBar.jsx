function SearchBar({ searchQuery, setSearchQuery }){

    return(
        <div>
            <h2>Search Project</h2>
            <input 
            type="text" 
            placeholder="Type project name" 
            value={searchQuery} 
            onChange={(e)=>setSearchQuery (e.target.value)}
            />
            <button type="search">Search</button>
        </div>
    

    );
}
export default SearchBar