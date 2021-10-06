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
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e){
        setSearchTerm(e.target.value)
        if(!onsubmit) return;
       if(typingTimeoutRef)
        typingTimeoutRef.current = setTimeout(() => {
            const formValues ={
                searchTerm: e.target.value,
            };
            onsubmit(formValues);
        },300);
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