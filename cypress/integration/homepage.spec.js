describe("All pages work", function() {
  it("Can open homepage", function() {
    cy.visit("http://localhost:3000");
  });
  it("Should not open error pages", function() {
    cy.visit("http://localhost:3000/some-page");
  });
  it("Clicks Should work", function() {
    cy.get("#test").click();
  });
});
