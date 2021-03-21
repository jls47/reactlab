import React, { Component } from "react";
import "./Compiler.css";
//Figure out possible props
interface compilerProps {

}
interface compilerState {
    input: string
    output: string
    language_id: number
}
export class Compiler extends Component<compilerProps, compilerState> {
    
    input = (event: React.ChangeEvent<HTMLInputElement>) => {

    };

    language = (event: React.ChangeEvent<HTMLOptionElement>) => {

    };

    submit = (event: React.ChangeEvent<HTMLButtonElement>) => {

    };

    render() {
        return (
            <div>
                <h1>AAAAA</h1>
            </div>
        );
    }
}