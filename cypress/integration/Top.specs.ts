beforeEach(() => cy.visit("http://localhost:3000"));

describe("Topbar", () => {
  it("Renders Correctly", () => {
    cy.get("[data-cy=Topbar]").should("be.visible");
  });

  it("Has three buttons", () => {
    cy.get("[data-cy=ButtonLock").should("be.visible");
    cy.get("[data-cy=ButtonKeyPad").should("be.visible");
    cy.get("[data-cy=ButtonMenu").should("be.visible");
  });

  it("KeyPad Button hides and shows Keypad Component", () => {
    cy.get("[data-cy=ButtonKeyPad").click();
    cy.get("[data-cy=Bottom").should("not.be.visible");
    cy.get("[data-cy=ButtonKeyPad").click();
    cy.get("[data-cy=Bottom").should("be.visible");
  });

  it("Add Button creates a new Tab", () => {
    cy.get("[data-cy=ButtonAdd]").should("be.visible");
    cy.get("[data-cy=ButtonAdd]").click();
    cy.get("[data-cy=Tab1]").should("be.visible");
    cy.get("[data-cy=Close-Tab]").should("be.visible");
  });

  it("X Button closes tab when clicked", () => {
    cy.get("[data-cy=ButtonAdd]").click();
    cy.get("[data-cy=Close-Tab]").click();
    cy.get("[data-cy=Close-Tab]").should("not.be.visible");
  });
  it("Renders new tab names with tab No", () => {
    cy.get("[data-cy=ButtonAdd]").click();
    cy.get("[data-cy=Tab1]").should("be.visible");
    cy.get("[data-cy=ButtonAdd]").click();
    cy.get("[data-cy=Tab2]").should("be.visible");
  });
  it("X button closes the correct tab", () => {
    cy.get("[data-cy=ButtonAdd]").click();
    cy.get("[data-cy=ButtonAdd]").click();
    cy.get("[data-cy=Tab1]").within(()=> {
      cy.get("[data-cy=Close-Tab]")
    }).click();
    cy.get("[data-cy=Tab2]").should("be.visible");
    cy.get("[data-cy=Tab1]").should("not.be.visible");
  });
});

describe("Topbar Styles", () => {
  it("Has gray background", () => {
    cy.get("[data-cy=Topbar]").should(
      "have.css",
      "background-color",
      "rgb(61, 77, 77)"
    );
  });
});
