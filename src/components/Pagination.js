import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
    list-style: none;
    text-align: center;
`;
const Pageli = styled.li`
    font-weight:700;
    display:inline-block;
    font-size:20px;
    padding : 2px 7px;
    margin:6px;
    border-radius:10px;
    color : #fff;
    &:hover{
        color: black;
    }
    background:gray;   
    heigth : 10px;
`;
const Pagespan = styled.span`
`;

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);

    }
    return (
        <div>
            <nav>
                <PageUl>
                    {pageNumbers.map(pageNumber => (
                        <Pageli key={pageNumber}>
                            <Pagespan onClick={() => paginate(pageNumber)}>{pageNumber}</Pagespan>
                        </Pageli>
                    ))}
                </PageUl>
            </nav>
        </div>
    )
}

export default Pagination;