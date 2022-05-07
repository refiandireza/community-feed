import { useRouter } from "next/router";
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Card from "../../components/Card";
import Head from 'next/head';
import Spinner from '../../components/Spinner';

const QuestionDetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

function QuestionDetail() {
    const router = useRouter();
    const {id} = router.query;

    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState({});

    useEffect(() => {
      const url = `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`;
        async function fetchData() {
            // setLoading(true);
            const data = await fetch(url)
            const result = await data.json();
            console.log(result);

            if(result) {
                setQuestion(result.items[0]);
                setLoading(false)
            }
        }

        id && fetchData();
    }, [id])

    const renderResult = (
      <>
        <Head>
          <title>{question.title}</title>
        </Head>
        <QuestionDetailContainer>
            <Card
              key={question.question_id}
              title={question.title}
              views={question.view_count}
              answers={question.answer_count}
              tags={question.tags}
            />
            {/* <h2>{question.title}</h2> */}
            {/* {question.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))} */}
            
        </QuestionDetailContainer>
      </>
    )

    return (
    <>
      {loading ? <Spinner/> : renderResult}
    </>
  )
}

export default QuestionDetail