import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals, reset } from '../features/goals/goalSlice';
import { toast } from 'react-toastify';
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
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
      toast.error(message);
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
        <h1>
          Welcome{' '}
          {user && user.name.charAt(0).toUpperCase() + user.name.slice(1)}!
        </h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals </h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
