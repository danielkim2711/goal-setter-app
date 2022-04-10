import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateGoal, deleteGoal } from '../features/goals/goalSlice';
import { FaEdit } from 'react-icons/fa';

const GoalItem = ({ goal }) => {
  const { _id } = goal;

  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateGoal({ text, _id }));
  };

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-NZ')}</div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: '90%', padding: '10px', marginTop: '5px' }}
            type='text'
            id='text'
            value={text}
            placeholder='Edit your goal'
            onChange={(e) => setText(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ marginTop: '10px' }} className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <h2>{goal.text}</h2>
      )}
      <button
        className='close'
        style={{ marginRight: '15px' }}
        onClick={() => setIsEditing(!isEditing)}
      >
        <FaEdit />
      </button>
      <button
        onClick={() => {
          if (window.confirm('Are you sure you want to delete?')) {
            dispatch(deleteGoal(_id));
          }
        }}
        className='close'
      >
        X
      </button>
    </div>
  );
};

export default GoalItem;
