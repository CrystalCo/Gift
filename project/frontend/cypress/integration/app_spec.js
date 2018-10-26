describe("Django REST framework / React quickstart app", () => {
    const profile = {
        name: "Armin",
        email: "some-email@gmail.com",
        message: "I am looking for a React tutor"
    };
    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });
    it("should be able to fill a web form", () => {
        cy.visit("/");
        // Next line tests that the user can see the table:
        cy.get("tr").contains(`${profile.name}${profile.email}${profile.measurements}`);
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
    // more tests here
  });