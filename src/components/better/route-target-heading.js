import React from "react";
import { css } from "@emotion/core";

const styles = css`
	.routeSkipHeading {
		position: relative;
	}

	.routeSkipLink {
		position: absolute;
		display: inline-block;
		margin-left: -0.75em;
		opacity: 0;

		&:before {
			content: "<-";
			display: block;
		}
	}

	.routeSkipLink:focus,
	.routeSkipLink:hover {
		opacity: 1;
	}
`;

const RouteHeading = ({ level = 1, targetID, children }) => {
	const Heading = `h${level}`;
	return (
		<Heading css={styles} className="routeSkipHeading">
			<a
				href={`#${targetID}`}
				id="skip-link"
				className="routeSkipLink"
				aria-label={`skip to ${targetID}`}
			></a>
			{children}
		</Heading>
	);
};

export default RouteHeading;
