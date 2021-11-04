import { useState } from "react";

function Show(props) {
  console.log(props);

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
        <div className="plan">
            <h1>{plan?.title}</h1>
            <h2>{plan?.url}</h2>
            <h2>{plan?.parks}</h2>
            <h2>{plan?.questionObjective}</h2>
            <h2>{plan?.subject}</h2>
            <h2>{plan?.gradeLevel}</h2>
            <h2>{plan?.duration}</h2>
            <img src={plan?.img} alt={plan?.title} />
            <button id="delete" onClick={removePlan}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm?.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm?.img}
                    name="img"
                    placeholder="img URL"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Lesson Plan" />
            </form>
        </div>
    );
  }
  
  export default Show;