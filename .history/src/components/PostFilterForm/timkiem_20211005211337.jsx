import React , {useState} from 'react';
import PropTypes from 'prop-types'

PostFiltersForm.prototype = {
    onsubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onsubmit: null,
}
function PostFiltersForm(props) {
    const {onsubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearchTermChange(e){
        setSearchTerm(e.target.value)
        if(!onsubmit) return;
        onsubmit()

        const formValues ={
            searchTerm
        };
        onsubmit(formValues);
    }  
return (
        <from>
            <input 
            value={searchTerm}
            onChange={handleSearchTermChange}
             type="text"/>
        </from>
    );
}

export default PostFiltersForm;