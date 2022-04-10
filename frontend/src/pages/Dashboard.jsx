import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals, reset } from '../features/goals/goalSlice';
import GoalForm from '../components/GoalForm';
import Spinner from '../components/Spinner';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { goals, isError, isLoading, message } = useSelector(
    (state) => state.goals
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />
    </>
  );
};

export default Dashboard;
