// import { isRegExp } from "util";

describe("Django REST framework / React quickstart app", () => {
    const profile = {
        name: "Armin",
        email: "some-email@gmail.com",
        measurements: "5ft 4in"
    };

    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });

    it("should be able to fill a web form", () => {
        cy.visit("/");

        cy
            .get('input[name="name"]')
            .type(profile.name)
            .should("have.value", profile.name);
        cy
            .get('input[name="email"]')
            .type(profile.email)
            .should("have.value", profile.email);
        cy
            .get('textarea[name="measurements"]')
            .type(profile.measurements)
            .should("have.value", profile.measurements);
            
        cy.get("form").submit();
    });

    it("should be able to see the table", () => {
        cy.visit("/");
        cy.get("tr").contains(`${profile.name}${profile.email}${profile.measurements}`);
    });
    // more tests here
  });