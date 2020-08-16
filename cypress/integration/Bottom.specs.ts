beforeEach(() => cy.visit("http://localhost:3000"));

describe("Bottom", () => {
  it("Renders Correctly", () => {
    cy.get("[data-cy=Bottom]").should("be.visible");
  });
  it("Has a tab section with 5 tabs", () => {
    cy.get("[data-cy=PayTab]").should("be.visible");
    cy.contains("Bar").should("be.visible");
    cy.contains("EC").should("be.visible");
    cy.contains("Kreditkarte").should("be.visible");
    cy.contains("Gutschein").should("be.visible");
    cy.contains("Sonstige").should("be.visible");
  });
  describe("KeyPad", () => {
    it("Renders", () => {
      cy.get("[data-cy=KeyPad]").should("be.visible");
    });
    it("displays the number when pushed & deletes numbers", () => {
      cy.get("[data-cy=Button1]").click();
      cy.get("[data-cy=Paid]").contains("€ 1").should("be.visible");
      cy.get("[data-cy=Button2]").click();
      cy.get("[data-cy=Paid]").contains("€ 12").should("be.visible");
      cy.get("[data-cy=Button3]").click();
      cy.get("[data-cy=Paid]").contains("€ 1.23").should("be.visible");
      cy.get("[data-cy=Button4]").click();
      cy.get("[data-cy=Paid]").contains("€ 12.34").should("be.visible");
      cy.get("[data-cy=ButtonDel]").click();
      cy.get("[data-cy=Paid]").contains("€ 1.23").should("be.visible");
      cy.get("[data-cy=ButtonDel]").click();
      cy.get("[data-cy=Paid]").contains("€ 12").should("be.visible");
      cy.get("[data-cy=ButtonDel]").click();
      cy.get("[data-cy=Paid]").should("contain", "€ 1");
    });
  });
  describe("QuickBar", () => {
    it("Renders", () => {
      cy.get("[data-cy=QuickBar]").should("be.visible");
    });
    it("Displays 5 options that overwrites the value when clicked", () => {
      cy.get("[data-cy=100Bill]").should("be.visible").click();
      cy.get("[data-cy=Paid]").should("contain", "€ 100");
      cy.get("[data-cy=50Bill]").should("be.visible").click();
      cy.get("[data-cy=Paid]").should("contain", "€ 50");
      cy.get("[data-cy=20Bill]").should("be.visible").click();
      cy.get("[data-cy=Paid]").should("contain", "€ 20");
      cy.get("[data-cy=10Bill]").should("be.visible").click();
      cy.get("[data-cy=Paid]").should("contain", "€ 10");
      cy.get("[data-cy=5Bill]").should("be.visible").click();
      cy.get("[data-cy=Paid]").should("contain", "€ 5");
    });
  });

});
