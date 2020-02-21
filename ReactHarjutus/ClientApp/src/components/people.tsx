import { FunctionComponent } from 'react';
import * as React from 'react';
import { Table } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

type Person = {
    id: number;
    name: string;
    gender: string;
    dateOfBirth: string;
    weight: number;
    height: number;
}

type PeopleState = {
    people: Person[]
}

export class People extends React.PureComponent<RouteComponentProps, PeopleState> {
    state = {
        people: [
            { id: 1, name: "Luke", gender: "male", dateOfBirth: "01.12.1900", weight: 95.6, height: 180.5 },
            { id: 2, name: "Mary", gender: "female", dateOfBirth: "01.12.1850", weight: 50.6, height: 150.5 },
            { id: 3, name: "Thomas", gender: "male", dateOfBirth: "01.12.1920", weight: 95.6, height: 160.5 },
            { id: 4, name: "Sarah", gender: "female", dateOfBirth: "01.12.1930", weight: 92.0, height: 170.5 },
            { id: 5, name: "Jeff", gender: "male", dateOfBirth: "01.12.1940", weight: 120.0, height: 140.5 },
        ]
    };
    _changeLocation = (person: Person) => {
        this.props.history.push(`/people/${person.id}`, { person: person });
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
                        {this.state.people.map((person: Person) =>
                            <PersonDataRow person={person} key={person.id} onCLickHandler={() => this._changeLocation(person)} />
                        )}
                    </tbody>
                </Table>
            </>
        );
    }
}

type PersonDataProps = { person: Person, onCLickHandler: () => void }
const PersonDataRow: FunctionComponent<PersonDataProps> = (props) => (
    <tr onClick={props.onCLickHandler} >
        <td>{props.person.name}</td>
        <td>{props.person.gender}</td>
        <td>{props.person.dateOfBirth}</td>
    </tr>
);