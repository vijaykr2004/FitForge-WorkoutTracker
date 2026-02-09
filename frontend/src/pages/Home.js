import React, { useEffect } from "react";

import WorkoutDetails from "../Components/Workoutdetails";
import WorkoutForm from "../Components/WorkoutForm";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchworkouts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUT", payload: json });
      }
    };

    if (user) fetchworkouts();
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {/* ✅ Empty state */}
        {workouts && workouts.length === 0 && (
          <div className="empty-state">
            <h3>No workouts yet 💪</h3>
            <p>Add your first workout to start tracking!</p>
          </div>
        )}

        {/* ✅ Workouts list */}
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>

      <WorkoutForm />
    </div>
  );
};

export default Home;
