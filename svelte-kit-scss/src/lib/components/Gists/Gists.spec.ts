import { beforeEach } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Gists from './Gists.svelte';
import { gistsFixture } from "../../fixtures/gists";

describe("Gists Component", () => {
  beforeEach(() => {
    render(Gists, {
      gist: gistsFixture[1],
      username: 'iansamz'
    })
  })

  it('should should render repo name', () => {
    const name = screen.getByText(/README-Template.md/);
    expect(name).toBeTruthy()
  });

})