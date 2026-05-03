function SearchBar({ searchQuery, setSearchQuery }){

    return(
        <div>
            <input 
            type="text" 
            placeholder="Search projects" 
            value={searchQuery} 
            onChange={(e)=>setSearchQuery (e.target.value)}
            />
            <button type="search">Search</button>
        </div>
    

    );
}
export default SearchBar