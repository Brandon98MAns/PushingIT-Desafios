// Ingresar en Pushing IT
// Dirigirse a Online Shop
// Agregar un producto nuevo
// Buscar el producto por su ID en el search
// Eliminar el producto
// Volver a buscar el producto
// Verificar que el producto no exista

describe('Recorrido en Pushing IT', () => {
    it('Realiza el recorrido especificado', () => {
      // Ingresar en Pushing IT
      cy.visit('https://pushing-it.vercel.app/')
      cy.get('[data-cy="registertoggle"]').dblclick()
      cy.get('[data-cy="user"]').type('pushingit')
      cy.get('[data-cy="pass"]').type('123456!')
      cy.get('[data-cy="submitForm"]').click().wait(1000);
      // Dirigirse a Online Shop
      cy.contains('Online Shop').click();
      // Agregar un producto nuevo
      cy.get('[data-cy="add-product"]').click();
      cy.get('[data-cy="productName"]').type('Producto de Brandon')
      cy.get('[data-cy="productPrice"]').type(2500)
      cy.get('[data-cy="productCard"]').type('https://www.google.com/aclk?sa=l&ai=DChcSEwjDxtfKo72EAxWFQUgAHRjoBjkYABADGgJjZQ&ase=2&gclid=CjwKCAiA29auBhBxEiwAnKcSqnPTUUBB_ZEDAMHasI3g4p4dielBzuj-VlNKA6SGs6QQjBRt3JOY2xoC5c0QAvD_BwE&sig=AOD64_1dHBgmEb7E99AHi--pB7tgt-3CWg&ctype=5&nis=6&adurl&ved=2ahUKEwi56cvKo72EAxVxiJUCHeNOCUoQvhd6BAgBEF0')
      cy.get('[data-cy="productID"]').type('1234')
      cy.get('[data-cy="createProduct"]').click()
      //cy.get('#closeModal').click()
      // Buscar el producto por su ID en el search
      cy.get('[data-cy="search-type"]').select('ID')
      //cy.contains('ID').click()
      //cy.get('[data-cy="ID-option"]').click() 
      cy.get('[data-cy="search-bar"]').type('1234').type('{enter}').wait(2000);
      // Eliminar el producto
      cy.get('[data-cy="delete-1234"]').click().wait(1000);
      cy.get('#saveEdit').click().wait(3000);
      cy.get('.chakra-button.css-japon').click()
      //cy.contains('close').click().wait(1000);
      //cy.get('#closeModal').click().wait(1000);
      // Volver a buscar el producto
      cy.get('[data-cy="search-type"]').select('ID')
      cy.get('[data-cy="search-bar"]').type('1234').type('{enter}').wait(2000);
      // Verificar que el producto no exista
      cy.get('.css-4t9hm0').should('not.be.visible');
    });
  });
  