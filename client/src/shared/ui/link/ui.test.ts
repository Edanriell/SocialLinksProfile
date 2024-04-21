import {screen} from "@testing-library/dom";
import {render,} from "@testing-library/vue";
import {describe, expect, it} from "vitest";
import "@testing-library/jest-dom/vitest";

import Link from "./ui.vue";

describe("Link component", () => {
	it("renders without anny issues", async () => {
		render(Link, {
			props: {
				linkText: "Test Link",
				linkHref: "#"
			}
		});

		screen.getByText("Test Link");
	});

	it("renders with correct props", async () => {
		const link = screen.getByTestId("link-ref");

		expect(link).toHaveTextContent("Test Link");
		expect(link).toHaveAttribute("href", "#");
	});

	it("is accessible", async () => {
		const link = screen.getByTestId("link-ref");

		expect(link).toHaveAttribute("role", "link");
		expect(link).toHaveAccessibleName("Test Link");
	});
});