import React from 'react';

//Component
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';

const ExercisesNew = ({ form, onChange, onSubmit }) => (
  <div className="container ExercisesContent">
    <div className="row">
      <div className="col-sm Excersises">
        <Card {...form} />
      </div>
      <div className="col-sm Excersises">
        <ExerciseForm onChange={onChange} onSubmit={onSubmit} form={form} />
      </div>
    </div>
  </div>
)


export default ExercisesNew