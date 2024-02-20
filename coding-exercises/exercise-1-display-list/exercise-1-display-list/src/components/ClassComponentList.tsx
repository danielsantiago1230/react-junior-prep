import React, { Component } from "react";

interface Props {}

interface State {
    items: string[];
}

class ClassComponentList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3'],
        };
    }

    render() {
        return (
            <div>
                <h2>Class Component List</h2>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ClassComponentList;