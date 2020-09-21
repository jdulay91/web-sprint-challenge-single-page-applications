import React from 'react'
const { iteratee } = require("lodash")


describe('OMGsprint',()=>{
    it('Site Navigation',()=>{
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include','localhost')
    })
    it('Getting Name',()=>{
        cy.get('input[name="name"]')
        .type('Julli')
        .should('have.value','Julli')
    })

    it('Getting Email',()=>{
        cy.get('input[name="email"]')
        .type('Julli@julli.com')
        .should('have.value','Julli@julli.com')
    })
    
    it('Getting address',()=>{
        cy.get('input[name="address"]')
        .type('julliaddress')
        .should('have.value','julliaddress')
    })

    it('Choose a Size small',()=>{
        cy.get('select').select('small').should('have.value','small')
    })
    it('Choose a Size med',()=>{
        cy.get('select').select('medium').should('have.value','medium')
    })
    it('Choose a Size large',()=>{
        cy.get('select').select('large').should('have.value','large')
    })

    it('check that checkbox', () =>{
        cy.get('[type="checkbox"]').check()
        .should('have.value','on')
    })

    it('check if add user is clickable', ()=>{
        cy.get('button').should('not.be.disabled')
        .click()
    })

    it('Empty Name',()=>{
        cy.get('input[name="name"]')        
        .should('have.value','')
    })

    it('Empty Email',()=>{
        cy.get('input[name="email"]')        
        .should('have.value','')
    })

    it('Empty Address',()=>{
        cy.get('input[name="address"]')       
        .should('have.value','')
    })      
})