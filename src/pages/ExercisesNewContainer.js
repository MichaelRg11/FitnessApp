import React, { useState } from 'react';
import './../components/styles/ExercisesNew.css';
import FatalError from './500';
import Loading from '../components/Loading'
import ExercisesNew from './ExercisesNew';
import url from './../config';

const ExercisesNewContainer = ({ history }) => {
  const [form, setForm] =
    useState({
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault()
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }
      let res = await fetch(`${url}/exercises`, config);
      let json = await res.json();
      console.log(json);
      setLoading(false);
      history.push('/exercise');
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  if (loading) return <Loading />

  if (error) return <FatalError />

  return <ExercisesNew
    onChange={handleChange}
    onSubmit={handleSubmit}
    form={form}
  />

}

export default ExercisesNewContainer