import React from 'react';

const Search = props => {
    const { searchTerms, changeHandler, submitHandler } = props;
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="category" className="col-sm-4">Search for: </label>
                    <select name="category" value={ searchTerms.category } onChange={ changeHandler } className="col-sm-8 form-control">
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id" className="col-sm-4">ID:</label>
                    <input type="number" name="id" value={searchTerms.id } onChange={changeHandler} className="col-sm-8 form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Search" className="col-sm-12 btn btn-primary"/>
                </div>
            </form>
        </div>

    )
}

export default Search