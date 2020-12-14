import React from "react"

const SearchForm = (props) => {
    return (
        <>
            <form className="center">
                <input 
                    name="query" 
                    className="searchInput"
                    value={props.query || ""}
                    placeholder="Enter Department" 
                    onChange={props.handleInputChange}/>
                <button 
                    type="submit" 
                    className="searchButton"
                    onClick={props.sortDept}>Search
                </button>
            </form> 
                <div className="center">
                    <button 
                        type="submit" 
                        className="searchButton"
                        onClick={props.seeAll}>See All
                    </button>
                </div>
        </>
    )
}

export default SearchForm