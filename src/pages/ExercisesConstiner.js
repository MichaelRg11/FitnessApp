import React from 'react';
import useFetch from './../hooks/useFetch'
import Loading from './../components/Loading';
import FatalError from './500'
import Exercises from './Exercises'
import url from './../config'

const ExercisesConstainer = () => {
  const { data, loading, error } = useFetch(`${url}/exercises`);

  if (loading) return <Loading />

  if (error) return <FatalError />

  return <Exercises data={data} />

}

export default ExercisesConstainer