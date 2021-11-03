import { Link } from "react-router-dom";

function Index(props) {
    //loaded function
    const loaded = () => {
        return props.plans.map((plan) => (
            <div key={personalbar._id} className="plan">
                <Link to={`/plans/${plan._id}`}>
                    <h1>{plan.name}</h1>
                </Link>
                <h3>{plan.title}</h3>
            </div>
        ));
    };
    
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.plans ? loaded() : loading();
  }
  
  export default Index;