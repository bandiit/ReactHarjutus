import * as React from 'react';
import { Table } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

export class PersonDetails extends React.PureComponent<RouteComponentProps>{
    render() {
        if (this.props.location.state == undefined) {
            return <h1>Person not found</h1>;
        }
        let person = this.props.location.state.person;
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
                        <tr>
                            <td>Height</td>
                            <td>{person.height}</td>
                        </tr>
                        <a href="javascript: history.go(-1)">Tagasi</a>
                    </tbody>
                </Table>
            </>
        );
    }
}
