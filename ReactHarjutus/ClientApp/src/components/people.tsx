import { FunctionComponent } from 'react';
import * as React from 'react';
import { Table } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import * as PeopleStore from '../store/People'
import { connect } from 'react-redux';
import { ApplicationState } from '../store';

type PeopleProps =
    PeopleStore.PeopleState & RouteComponentProps<{}>;

class People extends React.PureComponent<PeopleProps> {
    _changeLocation = (person: PeopleStore.Person) => {
        this.props.history.push(`/people/${person.id}`, { person: person });
    },
    _deleteItem = (person: PeopleStore.Person) => {
        this.splice(this.props.location.state.person,1);
    }
};

    
    render() {
        return (
            <>
                <h1>People</h1>
                <Table striped hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Date of birth</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.people.map((person: PeopleStore.Person) =>
                            <PersonDataRow person={person} key={person.id} onCLickHandler={() => this._changeLocation(person)} />                          
                    )}
                        {this.props.people.map((person: PeopleStore.Person) =>
                            <PersonDeleteRow person={person} key={person.id} onDeleteHandler={() => this._changeLocation(person)} />
                        )}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.people,
)(People);



type PersonDataProps = { person: PeopleStore.Person, onCLickHandler: () => void, onDeleteHandler : () => void }
const PersonDataRow: FunctionComponent<PersonDataProps> = (props) => (
    <tr onClick={props.onCLickHandler} >
        <td>{props.person.name}</td>
        <td>{props.person.gender}</td>
        <td>{props.person.dateOfBirth}</td>
    </tr>
// <a href="javascript: delete Person[props.person.id];">Kustuta</a> //PeopleStore.Person
);
const PersonDeleteRow: FunctionComponent<PersonDataProps> = (props) => (
    //<tr><a href="javascript: delete PeopleStore.Person[props.person.id];">Kustuta</a></tr>
    <tr onClick={props.onDeleteHandler} >

        {delete props.person}
    </tr>
// <a href="javascript: delete Person[props.person.id];">Kustuta</a> //PeopleStore.Person
);

