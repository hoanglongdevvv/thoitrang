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
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <from>
            <input />
        </from>
    );
}

export default PostFiltersForm;