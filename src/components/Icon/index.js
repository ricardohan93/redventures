import React from "react";
import * as icons from "./icons";

const Icon = ({ name, size, fill, ...props }) => {
	const SelectedIcon = icons[name];

	return <SelectedIcon size={size} fill={fill} {...props} />;
};

export default Icon;
