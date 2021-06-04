import React from "react";
import API from "./API";

export default class GetCredsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generated: false,
            paymentPointer: "",
            username: "",
            authToken: "",
            ilpOverHttpUrl: "https://jc.ilpv4.dev",
            assetCode: "XRP",
            assetScale: 9
        };
    }

    render() {
        if (this.state.generated) {
            var body =
                [
                    ['Username', this.state.username],
                    ['Authorization Token', this.state.authToken],
                    ['Payment Pointer', this.state.paymentPointer],
                    ['ILP-over-HTTP URL', this.state.ilpOverHttpUrl],
                    ['Asset Code', this.state.assetCode],
                    ['Asset Scale', this.state.assetScale]
                ];
            return (
                <div>
                    <Table body={body}/>,
                </div>
            );
        }

        // Display a "Like" <button>
        return (
            <button onClick={() => {
                const createAccountRequest = {
                    accountId: null,
                    assetCode: this.state.assetCode,
                    assetScale: this.state.assetScale,
                    receiveRoutes: false,
                    sendRoutes: false
                };
                return API.post('https://hermes-rest.ilpv4.dev/accounts', createAccountRequest)
                    .then(response => {
                        const data = response.data;
                        const newIlpOverHttpUrl = this.state.ilpOverHttpUrl + '/accounts/' + data.accountId + '/ilp';

                        const authToken = data.customSettings["ilpOverHttp.incoming.simple.auth_token"];
                        console.log(response);

                        this.setState({
                            generated: true,
                            username: data.accountId,
                            ilpOverHttpUrl: newIlpOverHttpUrl,
                            authToken: authToken,
                            paymentPointer: "$jc.ilpv4.dev/" + data.accountId,
                            assetCode: data.assetCode,
                            assetScale: data.assetScale
                        });
                    });
                // return this.setState({generated: true})
            }}>
                Generate ILP Testnet Credentials
            </button>
        );
    }
}

class Table extends React.Component {
    render() {
        var body = this.props.body;
        return (
            <table style={{width: 500}}>
                <tbody>
                {body.map(row => <TableRow row={row}/>)}
                </tbody>
            </table>
        );
    }
}

class TableRow extends React.Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}

// const domContainer = document.querySelector('#get_creds_button_container');
// ReactDOM.render(e(GetCredsButton), domContainer);