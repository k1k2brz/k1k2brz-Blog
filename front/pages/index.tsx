import type { NextPage } from 'next'

const Home: NextPage = () => {
  type AnimalType = {
    animal: 'Dog';
    age: number;
    name: string;
  };
  
  interface AnimalInterface {
    animal: 'Dog';
    age: number;
    name: string;
  }
  
  const animal1: AnimalType = { 
    animal: 'Dog',
    age: 3,
    name: '초코'
  };
  const bird2: AnimalInterface = {
    animal: 'Dog',
    age: 3,
    name: '초코'
  };
  
  return (
    <>
    </>
  )
}

export default Home
