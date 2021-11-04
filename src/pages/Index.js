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
                <Link to={`/plans/${plan._id}`}>
                    <h1>{plan.title}</h1>
                    <h4>{plan.parks}</h4>
                    <h4>{plan.gradeLevel}</h4>
                </Link>
                <img src={plan.img} alt={plan.title} />          
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
                    <input
                        type="text"
                        value={newForm.title}
                        title="title"
                        placeholder="title"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newForm.img}
                        title="img"
                        placeholder="img URL"
                        onChange={handleChange}
                    />
                    <input
                        type="parks"
                        value={newForm.parks}
                        title="parks"
                        placeholder="parks"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Create Lesson Plan" />
                </form>
            </div>
            <div className="plan-container">
                {props.plans ? loaded() : loading()}
            </div>
        </section>
    );
  };
  
  export default Index;