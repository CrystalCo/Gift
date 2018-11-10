// import { isRegExp } from "util";

describe("Django REST framework / React quickstart app", () => {
    const profile = {
        name: "Armin",
        email: "some-email@gmail.com",
        measurements: "5ft 4in"
    };

    const wish = {
        productName: "Ariel Crown in Black",
        price: "13.00",
        brand: "FlowerChild Revolution"
    };

    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });

    it("should be able to fill a web form for a profile", () => {
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
            
        cy.get('#profileForm').submit();
    });

    it("should be able to see the profile table", () => {
        cy.visit("/");
        cy.get("tr").contains(`${profile.name}${profile.email}${profile.measurements}`);
    });

    it("should be able to fill a web form for wish list product", () => {
        cy.visit("/");

        cy
            .get('input[name="productName"]')
            .type(wish.productName)
            .should("have.value", wish.productName);
        cy
            .get('input[name="price"]')
            .type(wish.price)
            .should("have.value", wish.price);
        cy
            .get('textarea[name="brand"]')
            .type(wish.brand)
            .should("have.value", wish.brand);
            
        cy.get('#wishForm').submit();
    });

    it("should be able to see the wish list/product table", () => {
        cy.visit("/");
        cy.get("tr").contains(`${wish.productName}${wish.price}${wish.brand}`);
    });
    // more tests here
  });