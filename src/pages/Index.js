import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        img: "",
        parks: "",
        gradeLevel: "",
    });

    //handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.title]: event.target.value });
    };

    //handle submit function form 
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPlans(newForm);
        setNewForm({
            title: "",
            img: "",
            parks: "",
            gradeLevel: "",
        })
    };

    //loaded function
    const loaded = () => {
        return props.plans.map((plan) => (
            <div key={plan._id} className="plan">
                <Link to={`/plans/${plan._id}`} style={{ textDecoration: "none" }}>
                    <h1>{plan.title}</h1>
                    <h4>{plan.parks}</h4>
                    <h4>{plan.gradeLevel}</h4>
                </Link>
                <div className="notebook">
                    <img src={plan.img} alt={plan.title} />
                </div>          
            </div>
        ));
    };
    
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="submit" value="Add Your Own Lesson Plan" />
                    <input
                        type="new-input"
                        value={newForm.title}
                        title="title"
                        placeholder="Title"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newForm.parks}
                        title="title"
                        placeholder="Park"
                        onChange={handleChange}
                    />
                     <input
                        type="new-input"
                        value={newForm.questionObjective}
                        title="title"
                        placeholder="Student Objectives"
                        onChange={handleChange}
                    />
                     <input
                        type="new-input"
                        value={newForm.subject}
                        title="title"
                        placeholder="Subject"
                        onChange={handleChange}
                    />
                     <input
                        type="new-input"
                        value={newForm.gradeLevel}
                        title="title"
                        placeholder="Grade Level"
                        onChange={handleChange}
                    />
                    <input
                        type="new-input"
                        value={newForm.img}
                        title="img"
                        placeholder="Image URL"
                        onChange={handleChange}
                    />
                    <input
                        type="new-input"
                        value={newForm.duration}
                        title="parks"
                        placeholder="Plan Duration"
                        onChange={handleChange}
                    />
                </form>
            </div>
            <div className="plan-container">
                {props.plans ? loaded() : loading()}
            </div>
        </section>
    );
  };
  
  export default Index;