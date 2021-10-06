import React from 'react';
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
        setSearchTerm(e.tar)
    }  
return (
        <from>
            <input 
            value={searchTerm}
            onChange={}
             type="text"/>
        </from>
    );
}

export default PostFiltersForm;