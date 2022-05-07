import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    text-align: left;
    padding: 10px 50px;
    background: lightgray;
    border-radius: 10px;
    margin-bottom: 2%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: .3s;
    word-wrap: break-word;

    &:hover {
        transform: scale(1.02);
    }

    @media screen and (max-width: 768px) {
        padding: 10px 25px;
    }
`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
    color: black;
`;

const Count = styled.span`
    color: black;
`;

const TagSection = styled.div`
    color: black;
    margin: 10px 0 10px -8px;
    display: flex;
    flex-wrap: wrap;
    /* padding-left: -8px; */
    
`;

const Tags = styled.span`
    background-color: orange;
    color: white;
    padding: 4px 8px;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    transition: .4s;

    &:hover {
        background-color: white;
        border: 1px solid orange;
        color: orange;
    }
`;

function Card({title, views, answers, tags}) {
  return (
    <CardWrapper>
        <Title>{title}</Title>
        <Count>
            {`Views: ${views} | Answers: ${answers}`}
        </Count>
        <TagSection>
            {tags.map((tag, index) => (
                <Tags key={index}>{tag}</Tags>
            ))}
        </TagSection>
    </CardWrapper>
  )
}

export default Card