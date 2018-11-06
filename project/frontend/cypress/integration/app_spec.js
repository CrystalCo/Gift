// import { isRegExp } from "util";

describe("Django REST framework / React quickstart app", () => {
    const wish = {
        productName: "Ariel Crown in Black",
        price: "13.00",
        brand: "FlowerChild Revolution"
    };

    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });

    it("should be able to fill a web form", () => {
        cy.visit("/");

        cy
            .get('input[name="productName"]')
            .type(wish.name)
            .should("have.value", wish.name);
        cy
            .get('input[name="price"]')
            .type(wish.price)
            .should("have.value", wish.price);
        cy
            .get('textarea[name="brand"]')
            .type(wish.brand)
            .should("have.value", wish.brand);
            
        cy.get("form").submit();
    });

    it("should be able to see the table", () => {
        cy.visit("/");
        cy.get("tr").contains(`${wish.name}${wish.price}${wish.brand}`);
    });
    // more tests here
  });