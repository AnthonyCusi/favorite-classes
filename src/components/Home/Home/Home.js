import React, {useEffect, useState} from 'react';
import Class from "../Class/Class"
import ClassGraphQL from '../Class/ClassGraphQL';
import "./Home.css"


function Home(props) {

    const [value, setValue] = useState('')
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }

        console.log(favoriteClasses)
    }

    useEffect(() => {
        document.title = "Favorite Classes"
    });

    return (
        <body>
            <div className="header">
                <h1>Anthony's Favorite Classes</h1>
                <form onSubmit={handleSubmit}>
                    <label>Add a Class </label>
                    <input type="text" value={value} onChange={handleChange}></input>
                    <button type="submit">Add Class!</button>
                </form>
            </div>
            <div className="my-classes">
                {favoriteClasses.map((favClass) => 
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
            <div className="my-classes">
                {favoriteClasses.map((favClass) => 
                    <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>
        </body>
    
        
    )
}

export default Home;