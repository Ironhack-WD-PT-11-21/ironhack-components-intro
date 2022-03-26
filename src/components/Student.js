const Student = (props) => {
    const { firstName, lastName, age, likeClubbing } = props;
    return (
        <div>
            <h3>My name is {firstName} {lastName}</h3>
            <p>
                I am {age} years old.
                {
                    likeClubbing ? 'I love clubbing' : 'I hate clubbing :('
                }
            </p>
        </div>
    )
}

export default Student