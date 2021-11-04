import { Link } from "react-router-dom";
import { useState } from "react";

function Show(props) {

  const id = props.match.params.id;
  const plans = props.plans;
  const plan = plans?.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(plan);

  // handleChange function for form
  const handleChange = event => {
    setEditForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePlans(editForm, id);
    props.history.push("/");
  };

  const removePlan = () => {
    props.deletePlans(plan._id);
    props.history.push("/");
  };


    return (
        <div className="show-plan">
            <h2>{plan?.title}</h2>
            {/* <Link to="{plan?.url}" target="_blank"> Click Here for the Full Lesson Plan</Link> */}
            <h4>Park: {plan?.parks}</h4>
            <h4>Lesson Objective: {plan?.questionObjective}</h4>
            <h4>Subject: {plan?.subject}</h4>
            <h4>Appropriate for: {plan?.gradeLevel}</h4>
            <h4>Duration: {plan?.duration}</h4>
            <button id="delete" onClick={removePlan}>
                Delete This Lesson Plan
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm?.title}
                    name="title"
                    placeholder="Change Title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm?.img}
                    name="img"
                    placeholder="Change Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm?.parks}
                    name="parks"
                    placeholder="Change Park"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm?.questionObjective}
                    name="questionObjective"
                    placeholder="Change Learning Objective"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm?.subject}
                    name="subject"
                    placeholder="Change Subject"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm?.gradeLevel}
                    name="gradeLevel"
                    placeholder="Change Grade Level"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm?.duration}
                    name="duration"
                    placeholder="Change Duration"
                    onChange={handleChange}
                />
                <input type="submit" value="Update This Lesson Plan" />
            </form>
        </div>
    );
  }
  
  export default Show;