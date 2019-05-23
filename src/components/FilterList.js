import React from "react";

const FilterList = ({ header, dataKey, options, onChange }) => {
	return (
		<div className="filter-section">
			{header}:
			{Object.entries(options).map(([key, val]) => (
				<label key={key}>
					<input
						name={key}
						type="checkbox"
						checked={val}
						onChange={onChange}
						data-filter={dataKey}
					/>
					{key}
				</label>
			))}
		</div>
	);
};

export default FilterList;
