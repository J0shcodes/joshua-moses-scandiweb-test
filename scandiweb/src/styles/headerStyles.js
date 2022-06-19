import styled from 'styled-components';

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 3rem 0 2rem;
    

    ul {
        display: flex;
        justify-content: space-between;
    }

    li {
        margin-right: 1rem;
        list-style-type: none;
    }

    .link {
        text-decoration: none;
        color: #000;
        font-size: 14px;
    }

    .link:hover {
        color: #5ECE7B;
    } 

    .logo {
        padding-top: 0.2rem;
        margin-right: 1rem;
    }

    .icons {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem 0 0;

        &__vectors {
            display: flex;
            margin-right: 1rem;
            height: fit-content;
        }

        &__cart {
            height: fit-content;
            cursor: pointer;
            margin-top: 0.4rem;
        }
    }

    .vector1 {
        width: fit-content;
        height: fit-content;
    }

    .vector1 img {
        width: 30px;
    }

    .vector2 {
        cursor: pointer;
        height: fit-content;
        margin-top: 0.2rem;
    }
`