import { Action, Reducer } from 'redux';

export type Person = {
    id: number,
    name: string,
    gender: string,
    dateOfBirth: string,
    weight: number,
}

export type PeopleState = {
    people: Person[]
}

const unloadedState: PeopleState = {
    people: [
        { id: 1, name: "Luke", gender: "male", dateOfBirth: "01.12.1900", weight: 95.6 },
        { id: 2, name: "Mary", gender: "female", dateOfBirth: "01.12.1850", weight: 50.6 },
        { id: 3, name: "Thomas", gender: "male", dateOfBirth: "01.12.1920", weight: 95.6 },
        { id: 4, name: "Sarah", gender: "female", dateOfBirth: "01.12.1930", weight: 92.0 },
        { id: 5, name: "Jeff", gender: "male", dateOfBirth: "01.12.1940", weight: 120.0 },
    ]
};

export const reducer: Reducer<PeopleState> = (state: PeopleState | undefined, incomingAction: Action): PeopleState => {
    return unloadedState;
};