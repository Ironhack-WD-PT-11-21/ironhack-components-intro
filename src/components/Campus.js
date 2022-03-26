import Student from './Student'

const student = {
    firstName: 'Pierre',
    lastName: 'Portal',
    age: 156,
    likeClubbing: true
}

const Campus = (props) => {
    return (
        <>
            <h2>{props.city} campus</h2>
            <p>There are {props.numberOfStudent} students</p>
            <Student
                firstName={student.firstName}
                lastName={student.lastName}
                age={student.age}
                likeClubbing={student.likeClubbing}
            />
        </>
    )

}

export default Campus