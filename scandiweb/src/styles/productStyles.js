import styled from "styled-components";

export const ProductPage = styled.div`
    padding: 5rem 6rem 11rem 6rem;
    
    h1 {
        margin-bottom: 6.4rem;
    }

    .products {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 2.5rem;
        row-gap: 6.4rem;
        padding: 2rem 1rem 2rem 7rem;
    }

    .product {
        background: grey;
        padding: 1rem;        
        width: fit-content;
    }

    img {
        width: 200px;
        height: 300px; 
    }

    .name {
        margin-bottom: -0.1rem;
    }
`