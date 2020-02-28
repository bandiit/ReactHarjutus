import * as React from 'react';
import { Table } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import * as PeopleStore from '../store/People'
import { connect } from 'react-redux';
import { ApplicationState } from '../store';

type PeopleProps =
    PeopleStore.PeopleState
    & RouteComponentProps<{ personId: string }>;

class PersonDetails extends React.PureComponent<PeopleProps, RouteComponentProps>{
    public render() {
        let personId = this.props.match.params.personId;
        let person = this.props.location.state.person;
        //let person = this.props.people.find(x => x.id == +personId);
        if (person === undefined) {
            return <h1>Person not found</h1>;
        }
        return (
            <>
                <h1>Person {person.id}</h1>
                <Table striped hover size="sm">
                    <tbody>
                        <tr>
                            <td>Name</td> 
                            <td>{person.name}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{person.gender}</td>
                        </tr>
                        <tr>
                            <td>DateofBirth</td>
                            <td>{person.dateOfBirth}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{person.weight}</td>
                        </tr>
                        <a href="javascript: history.go(-1)">Tagasi</a>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.people,
)(PersonDetails);