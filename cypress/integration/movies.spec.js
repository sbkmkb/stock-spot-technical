describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("works correctly", () => {
    const firstMovieTitle = "The Matrix";
    const firstMovieTestId = "The-Matrix-test-id";
    const moviePlot =
      "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo.";
    const starTestId = "star-selected-id";
    const forwardButtonTestId = "pager-button-forward";
    const backButtonTestId = "pager-button-back";
    const modalBackButtonTestId = "movie-modal-back-button";
    const movieDetailsTestId = "movie-details";
    const secondMovieTitle = "The Living Matrix";

    cy.get("input").type(`${firstMovieTitle}{enter}`);

    // MovieList renders correctly
    cy.wait(1000);
    cy.contains("The Matrix Reloaded").should("exist");
    cy.contains("Page 1").should("exist");
    cy.contains("75 results").should("exist");

    // MovieDetails renders correctly
    cy.get(`[data-testid=${firstMovieTestId}]`).click();
    cy.get(`[data-testid=${starTestId}]`)
      .parent()
      .siblings()
      .first()
      .should("contain.text", firstMovieTitle);
    cy.get(`[data-testid=${movieDetailsTestId}]`).should("exist");
    cy.contains(moviePlot).should("exist");

    // Pager works correctly
    cy.get(`[data-testid=${forwardButtonTestId}]`).click();
    cy.wait(1000);
    cy.contains("Page 2").should("exist");
    cy.get(`[data-testid=${firstMovieTestId}]`).should("not.exist");
    cy.contains(secondMovieTitle).should("exist");
    cy.get(`[data-testid=${backButtonTestId}]`).click();
    cy.wait(1000);
    cy.contains(secondMovieTitle).should("not.exist");
    cy.get(`[data-testid=${firstMovieTestId}]`).should("exist");
    cy.get(`[data-testid=${starTestId}]`)
      .parent()
      .siblings()
      .first()
      .should("contain.text", firstMovieTitle);

    // On mobile back button removes MovieDetails
    cy.viewport("iphone-6+");
    cy.get(`[data-testid=${modalBackButtonTestId}]`).should("exist").click();
    cy.get(`[data-testid=${movieDetailsTestId}]`).should("not.exist");
  });
});
