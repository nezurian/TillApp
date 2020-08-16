beforeEach(() => cy.visit("http://localhost:3000"));

describe("Main", () => {
  it("Renders Correctly", () => {
    cy.get("[data-cy=Main]").should("be.visible");
  });
  it("Has two displays", () => {
    cy.get("[data-cy=ToPay").should("be.visible");
    cy.get("[data-cy=Paid").should("be.visible");
  });
  describe("Alert messages", () => {
    it("Alerts when input is less than the requirement", () => {
      cy.get("[data-cy=Zahlen]").click();
      cy.get("[data-cy=Failure]").should("be.visible");
      cy.get("[data-cy=Success]").should("not.be.visible");
    });
    it("Alerts when input enough for requirement", () => {
      cy.get("[data-cy=100Bill]").click();
      cy.get("[data-cy=Zahlen]").click();
      cy.get("[data-cy=Success]").should("be.visible");
      cy.get("[data-cy=Failure]").should("not.be.visible");
    });
  });
  describe("Buttons", () => {
    it("Zahlen button doesn't change without successful transaction ", () => {
      cy.get("[data-cy=Zahlen]").click();
      cy.get("[data-cy=Fertig]").should("not.be.visible");
      cy.get("[data-cy=Zahlen]").should("be.visible");
    });
    it("Renders Fertig Button after successfull transaction", () => {
      cy.get("[data-cy=100Bill]").click();
      cy.get("[data-cy=Zahlen]").click();
      cy.get("[data-cy=Fertig]").should("be.visible");
    });
    it("Resets the app after hitting Fertig button", () => {
      cy.get("[data-cy=100Bill]").click();
      cy.get("[data-cy=Zahlen]").click();
      cy.get("[data-cy=Fertig]").click();
      cy.get("[data-cy=Paid]").should("contain", "€ 0");
    });
  });
});
