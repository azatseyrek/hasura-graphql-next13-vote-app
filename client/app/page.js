'use client';

import { gql, useQuery } from '@apollo/client';

const QUESTIONS = gql`
  query getAllQuestions {
    questions {
      id
      title
      questions_options {
        id
        title
        question_id
        options_votes_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(QUESTIONS);

  console.log(data);

  return <main>Home page</main>;
}
