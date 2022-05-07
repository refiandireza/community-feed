import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Card from '../../components/Card';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

const CardLink = styled.a`
  text-decoration: none;
`;

function Questions() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const router = useRouter();
  const {page} = router.query;

  useEffect(() => {
      setLoading(true);
      const url = `https://api.stackexchange.com/2.2/questions?${page ? 'page=' + page + '&' : ''}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`;
      const fetchData = async () => {
      const data = await fetch(url);
      const result = await data.json();

      if (result) {
        setQuestions(result.items);
        setHasMore(result.has_more);
        console.log(url);
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  const result = (
    <>
      <h2>Questions : </h2>
      <div>
        {questions.map((question) => (
              <Link
                key={question.question_id}
                href={`/questions/${question.question_id}`}
                passHref
              >
                <CardLink>
                  <Card
                    key={question.question_id}
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}
                    tags={question.tags}
                  />
    
                </CardLink>
    
              </Link>
            ))}
      </div>
      <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore}/>
    </>

  )
  return (
    <QuestionsContainer>
      {loading ? <Spinner/> : result}
    </QuestionsContainer>
  )
}

export default Questions