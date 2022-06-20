import React from 'react';
import shortid from 'shortid';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
			{options.map(option => (
                <button
                    key={shortid.generate()}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
    );
}

FeedbackOptions.propTypes = {
    options: propTypes.array.isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;